namespace Ng2CoreCLR
{
    using System;
    using System.IO;
    using System.Reflection;

    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.FileProviders;
    using Microsoft.Extensions.Logging;

    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder =
                new ConfigurationBuilder().SetBasePath(env.ContentRootPath)
                    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                    .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsEnvironment("Development"))
            {
                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                builder.AddApplicationInsightsSettings(developerMode: true);
            }

            builder.AddEnvironmentVariables();
            this.Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(this.Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseApplicationInsightsRequestTelemetry();

            app.UseApplicationInsightsExceptionTelemetry();

            // Applying HTML5 routing redirect fix.
            app.Use(
                async (context, next) =>
                {
                    await next();

                    if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                    {
                        context.Request.Path = "/index.html"; // Put your Angular root page here 
                        await next();
                    }
                });

            ConfigureClientSideStaticFiles(app);

            app.UseMvc();
        }

        // This method gets called by the runtime. Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddApplicationInsightsTelemetry(this.Configuration);

            services.AddMvc();
        }

        private void ConfigureClientSideStaticFiles(IApplicationBuilder app)
        {
            var ds = Path.DirectorySeparatorChar;
            var wwwRootPath = Path.GetFullPath("wwwroot");

            var nodeModulesPath = Path.GetFullPath($"{wwwRootPath}{ds}..{ds}node_modules");
            if (Directory.Exists(nodeModulesPath))
            {
                var nodeModulesFileSystem = new PhysicalFileProvider(nodeModulesPath);
                app.UseStaticFiles(
                    new StaticFileOptions
                    {
                        FileProvider = nodeModulesFileSystem,
                        ServeUnknownFileTypes = true,
                        RequestPath = new PathString("/node_modules")
                    });
            }

            string pathToCss = $"{wwwRootPath}{ds}css";
            if (Directory.Exists(pathToCss))
            {
                var cssFileSystem = new PhysicalFileProvider(Path.GetFullPath(pathToCss));
                app.UseStaticFiles(
                    new StaticFileOptions
                    {
                        FileProvider = cssFileSystem,
                        ServeUnknownFileTypes = true,
                        RequestPath = new PathString("/wwwroot/css")
                    });
            }

            var fileSystem = new PhysicalFileProvider(Path.GetFullPath(wwwRootPath));

            // Remember linux is case sensitive beast!
            app.UseDefaultFiles(
                new DefaultFilesOptions { FileProvider = fileSystem, DefaultFileNames = new[] { "index.html" } });

            // app.UseApplicationInsightsRequestTelemetry();
            app.UseStaticFiles(new StaticFileOptions { FileProvider = fileSystem, ServeUnknownFileTypes = true });
        }

    }
}
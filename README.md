# WARNING

This project is no longer maintained. For Angular 2 starter take a look at the [angular2-seed](https://github.com/mgechev/angular2-seed), that this project is based on.

# angular2-seed & ng2-bootstrap & SB Admin 2.0

Integration showcase of [angular2-seed-ng2-bootstrap](https://github.com/ludohenin/angular2-seed-ng2-bootstrap) (Itself an integration of [ng2-bootstrap](http://valor-software.github.io/ng2-bootstrap/) with [angular2-seed](https://mgechev.github.io/angular2-seed)) and [SB Admin 2.0](http://startbootstrap.com/template-overviews/sb-admin-2/).

[![Dependency Status](https://david-dm.org/AngularShowcase/ng2-bootstrap-sbadmin.svg)](https://david-dm.org/AngularShowcase/ng2-bootstrap-sbadmin)
[![devDependency Status](https://david-dm.org/AngularShowcase/ng2-bootstrap-sbadmin/dev-status.svg)](https://david-dm.org/AngularShowcase/ng2-bootstrap-sbadmin#info=devDependencies)
[![Build Status](https://travis-ci.org/AngularShowcase/ng2-bootstrap-sbadmin.svg?branch=master)](https://travis-ci.org/AngularShowcase/ng2-bootstrap-sbadmin)

# What is it?

This template combines the famous StartBootstrap Admin v2.0 template with an Angular 2.0 template by Minko Gechev. Ludovic Henin did the initial integration of NG-Bootstrap, a set of controller components for Bootstrap written for Angular 2.0. 

**Note:** Angular 2.0 is not production ready yet! This seed project is perfect for playing around with the latest versions but do not start new projects with it since a lot of new changes are going to be introduced until the framework is officially released.

Submissions are welcome. There are a lot of opportunities to get this template into better shape. Hopefully we can help improve the dependency projects in the process. 

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 3.x.x.

```bash
git clone https://github.com/AngularShowcase/ng2-bootstrap-sbadmin.git
cd ng2-bootstrap-sbadmin
npm install   # clean npm cache & delete node_modules folder if you get an error
npm start     # start with --env dev
npm run docs      # api document for app
```
_Does not rely on any global dependencies._

# Directory Structure

```
.
├── LICENSE
├── README.md
├── appveyor.yml
├── circle.yml
├── gulpfile.ts
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── src
│   └── client
│       ├── app
│       │   ├── components
│       │   │   ├── app
│       │   │   │   ├── app.css
│       │   │   │   ├── app.html
│       │   │   │   └── app.ts
│       │   │   ├── auth
│       │   │   │   ├── auth.css
│       │   │   │   ├── auth.html
│       │   │   │   ├── auth.spec.ts
│       │   │   │   └── auth.ts
│       │   │   ├── buttons
│       │   │   │   ├── buttons.css
│       │   │   │   ├── buttons.html
│       │   │   │   ├── buttons.spec.ts
│       │   │   │   └── buttons.ts
│       │   │   ├── chart
│       │   │   │   ├── api
│       │   │   │   │   └── chart.json
│       │   │   │   ├── chart-element.html
│       │   │   │   ├── chart.css
│       │   │   │   ├── chart.html
│       │   │   │   ├── chart.spec.ts
│       │   │   │   └── chart.ts
│       │   │   ├── form
│       │   │   │   ├── form.css
│       │   │   │   ├── form.html
│       │   │   │   ├── form.spec.ts
│       │   │   │   └── form.ts
│       │   │   ├── grid
│       │   │   │   ├── grid.css
│       │   │   │   ├── grid.html
│       │   │   │   ├── grid.spec.ts
│       │   │   │   └── grid.ts
│       │   │   ├── header
│       │   │   │   ├── header-notification.html
│       │   │   │   ├── header.html
│       │   │   │   ├── header.ts
│       │   │   │   ├── sidebar-search.html
│       │   │   │   └── sidebar.html
│       │   │   ├── home
│       │   │   │   ├── chat.html
│       │   │   │   ├── home.css
│       │   │   │   ├── home.html
│       │   │   │   ├── home.spec.ts
│       │   │   │   ├── home.ts
│       │   │   │   ├── notifications.html
│       │   │   │   ├── stats.html
│       │   │   │   ├── timeline.css
│       │   │   │   └── timeline.html
│       │   │   ├── icons
│       │   │   │   ├── icons.css
│       │   │   │   ├── icons.html
│       │   │   │   ├── icons.spec.ts
│       │   │   │   └── icons.ts
│       │   │   ├── notifications
│       │   │   │   ├── notifications.css
│       │   │   │   ├── notifications.html
│       │   │   │   ├── notifications.spec.ts
│       │   │   │   └── notifications.ts
│       │   │   ├── panels-wells
│       │   │   │   ├── panels-wells.css
│       │   │   │   ├── panels-wells.html
│       │   │   │   ├── panels-wells.spec.ts
│       │   │   │   └── panels-wells.ts
│       │   │   ├── table
│       │   │   │   ├── table.css
│       │   │   │   ├── table.html
│       │   │   │   ├── table.spec.ts
│       │   │   │   └── table.ts
│       │   │   └── typography
│       │   │       ├── typography.css
│       │   │       ├── typography.html
│       │   │       ├── typography.spec.ts
│       │   │       └── typography.ts
│       │   └── shared
│       │       ├── index.ts
│       │       └── services
│       │           ├── name_list.spec.ts
│       │           └── name_list.ts
│       ├── assets
│       │   └── img
│       │       └── smile2.gif
│       ├── css
│       │   ├── main.css
│       │   └── sb-admin-2.css
│       ├── index.html
│       ├── main.ts
│       └── npm-debug.log
├── test-main.js
├── tools
│   ├── README.md
│   ├── config
│   │   ├── project.config.ts
│   │   ├── seed.config.interfaces.ts
│   │   └── seed.config.ts
│   ├── config.ts
│   ├── debug.ts
│   ├── manual_typings
│   │   ├── project
│   │   │   └── sample.package.d.ts
│   │   └── seed
│   │       ├── angular2-hot-loader.d.ts
│   │       ├── autoprefixer.d.ts
│   │       ├── colorguard.d.ts
│   │       ├── connect-livereload.d.ts
│   │       ├── cssnano.d.ts
│   │       ├── doiuse.d.ts
│   │       ├── express-history-api-fallback.d.ts
│   │       ├── istream.d.ts
│   │       ├── karma.d.ts
│   │       ├── merge-stream.d.ts
│   │       ├── open.d.ts
│   │       ├── postcss-reporter.d.ts
│   │       ├── slash.d.ts
│   │       ├── stylelint.d.ts
│   │       ├── systemjs-builder.d.ts
│   │       ├── tildify.d.ts
│   │       └── tiny-lr.d.ts
│   ├── tasks
│   │   ├── project
│   │   │   └── sample.task.ts
│   │   └── seed
│   │       ├── build.assets.dev.ts
│   │       ├── build.assets.prod.ts
│   │       ├── build.bundles.app.ts
│   │       ├── build.bundles.ts
│   │       ├── build.docs.ts
│   │       ├── build.html_css.ts
│   │       ├── build.index.dev.ts
│   │       ├── build.index.prod.ts
│   │       ├── build.js.dev.ts
│   │       ├── build.js.e2e.ts
│   │       ├── build.js.prod.ts
│   │       ├── build.js.test.ts
│   │       ├── build.js.tools.ts
│   │       ├── check.versions.ts
│   │       ├── clean.all.ts
│   │       ├── clean.dev.ts
│   │       ├── clean.prod.ts
│   │       ├── clean.tools.ts
│   │       ├── copy.js.prod.ts
│   │       ├── css-lint.ts
│   │       ├── karma.start.ts
│   │       ├── serve.coverage.ts
│   │       ├── serve.docs.ts
│   │       ├── server.prod.ts
│   │       ├── server.start.ts
│   │       ├── tslint.ts
│   │       ├── watch.dev.ts
│   │       ├── watch.e2e.ts
│   │       └── watch.test.ts
│   ├── utils
│   │   ├── project
│   │   │   └── sample_util.ts
│   │   ├── project.utils.ts
│   │   ├── seed
│   │   │   ├── clean.ts
│   │   │   ├── code_change_tools.ts
│   │   │   ├── server.ts
│   │   │   ├── tasks_tools.ts
│   │   │   ├── template_locals.ts
│   │   │   ├── tsproject.ts
│   │   │   └── watch.ts
│   │   └── seed.utils.ts
│   └── utils.ts
├── tsconfig.json
├── tslint.json
└── typings.json
```

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# Now to extend?

If you want to use your custom libraries:

```bash
npm install my-library --save
vim tools/config.js
```
Add reference to the installed library in `PATH.src.jslib` (or whatever you like).

# Running test

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window
```

# Presentations

Rocky Mountain Angular Users Group 10-Nov-2015: [Transitioning from Server Side to Client Side Web Development with Angular 2](http://angularshowcase.github.io/ng2-bootstrap-sbadmin/slides/20151110/index.html)

# Contributing

Please see the [CONTRIBUTING](https://github.com/AngularShowcase/ng2-bootstrap-sbadmin/blob/master/CONTRIBUTING.md) file for guidelines.

# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT

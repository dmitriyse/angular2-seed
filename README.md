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
├── app
│   ├── bootstrap.ts
│   ├── components
│   │   ├── about
│   │   │   ├── about.html
│   │   │   ├── about.ts
│   │   │   └── about_spec.ts
│   │   ├── app
│   │   │   ├── app.css
│   │   │   ├── app.html
│   │   │   ├── app.ts
│   │   │   └── app_spec.ts
│   │   └── home
│   │       ├── home.css
│   │       ├── home.html
│   │       ├── home.ts
│   │       └── home_spec.ts
│   ├── index.html
│   ├── services
│   │   ├── name_list.ts
│   │   └── name_list_spec.ts
│   ├── system.config.js
│   └── typings.d.ts
├── gulpfile.ts
├── karma.conf.js
├── package.json
├── test
│   ├── components
│   │   ├── about
│   │   │   ├── about.js
│   │   │   └── about_spec.js
│   │   ├── app
│   │   │   ├── app.js
│   │   │   └── app_spec.js
│   │   └── home
│   │       ├── home.js
│   │       └── home_spec.js
│   └── services
│       ├── name_list.js
│       └── name_list_spec.js
├── test-main.js
├── tools
│   ├── config.ts
│   ├── preinstall.js
│   ├── tasks
│   │   ├── build.csslib.dev.ts
│   │   ├── build.docs.ts
│   │   ├── build.fonts.ts
│   │   ├── build.index.dev.ts
│   │   ├── build.js.dev.ts
│   │   ├── build.jslib.dev.ts
│   │   ├── build.sass.dev.ts
│   │   ├── build.test.ts
│   │   ├── clean.ts
│   │   ├── karma.start.ts
│   │   ├── npm.ts
│   │   ├── server.docs.ts
│   │   ├── server.start.ts
│   │   ├── tsd.ts
│   │   ├── tslint.ts
│   │   ├── watch.dev.ts
│   │   ├── watch.serve.ts
│   │   └── watch.test.ts
│   ├── typings
│   │   ├── connect-livereload.d.ts
│   │   ├── gulp-load-plugins.d.ts
│   │   ├── karma.d.ts
│   │   ├── tiny-lr.d.ts
│   │   ├── ng2_test.d.ts
│   │   ├── open.d.ts
│   │   ├── run-sequence.d.ts
│   │   ├── slash.d.ts
│   │   └── yargs.d.ts
│   ├── utils
│   │   ├── server.ts
│   │   ├── tasks-tools.ts
│   │   ├── template-injectables.ts
│   │   └── template-locals.ts
│   └── utils.ts
├── tsconfig.json
├── tsd.json
└── tslint.json
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

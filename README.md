HTML5 Thor
========================

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/newbreedofgeek/html5-thor/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

HTML5 Thor is a simple HTML5 App Tooling framework that provides you the tools needed to build efficient single page or multi page Web Apps. It also has a complete GruntJS workflow.


### Features

* Provides Responsiveness for your app via Skeleton (A Beautiful Boilerplate for Responsive, Mobile-Friendly Development) - www.getskeleton.com

* Contains a cool, interactive demo Brokerage Counter web app

* Includes Bower Package Management to download and install the core libraries and their correct versions (currently jquery, modernizr, yepnope)

* Other 3rd party libraries and plugins can also be added locally along with the Package Libraries mentioned above (currently contains jquery.loadie to show cool page loading animation)

* Using YepNope to load your JS files (which can be broken into 'modules') and init your web app

* The JS core includes the Standard Garber-Irish Implementation design pattern

* Includes a QUnit based Unit and Integration test template which can be run in the browser or in headless mode using PhantomJS

* Includes a complete GruntJS dev work flow, this currently has the following grunt tasks:
  + default
      - Does the same as 'build' below

  + build
      - Applies JSHint to the core js files, lint errors need to be fixed to proceed
      - Executes the Unit and Integration tests in headless mode using PhantomJS, tests need to pass to proceed to next step
      - Uglifies and merges all your JS file modules into a single JS file script.js (Your 3rd party scripts are put into its own file called libraries.js)
      - Creates a flat build of your files (placed in /build)

  + package
      - Does what 'build' does as well as packaging your build into a single zip file (placed in /deploy)

  + serve
      - This is where you work from, it serves your app using localhost
      - Bower Package Management is used here to download and install the core libraries to make sure everyone uses the same versions
      - This is the 1st step to run before using 'package' or 'build' as you need the Bower fetched libraries

  + test
      _ Runs the QUnit based Unit and Integration tests in standalone/headless mode using PhantomJs


### JavaScript Quality Control via JSHint

* HTML5 Thor enforces JavaScript code quality via JSHint by putting your app through a set of JSHint rules to check its conformance to industry standards
* These rules are described to your app locally using the .jshintrc config file
* By having these rules in a separate file, your rules become 'portable' to your app developers who can share the rules between them and improve them if needed
* The .jshintrc config file evolves separately in this repo - [JSHint Config Template] (https://github.com/newbreedofgeek/jshint-config-template) and you can choose to update to newer versions if you want (1.0.0 is the config version being used currently in HTML5 Thor)
* the JSHint checks are built into the 'build' and 'package' steps, but if you want to run it on it's own you can do so with the 'grunt jshint' command
* To learn more on how to prevent your custom variables and coding style from appearing as errors etc, visit this [readme] (https://github.com/newbreedofgeek/jshint-config-template) or read the [JSHint documentation] (http://jshint.com/docs/)


### Setup

1. Install [Node.js](http://nodejs.org/)

2. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli)

3. Clone the html5-thor repository
```
$ git clone https://github.com/newbreedofgeek/html5-thor.git
```

4. Navigate to the html5-thor folder
```
$ cd html5-thor
```

5. Install dependencies
```
$ npm install
```

6. Serve the working folder using localhost
```
$ grunt serve
```

7. Open <http://localhost:8000> to view your working app


Note: If you don't want the grunt workflow and you only want the pure HTML5 responsive front end template, you only need to clone the repo and work off the /src folder


### Folder Structure

- **src/** Where you work from
- **build/** Where your build files live
- **deploy/** Where your build files are packaged for deployment


### Demo

http://markpaul.name/dont-delete/html5-thor/v1.0.0/build
+ The demo shows the last version that had major UI updates (Patches and task/build updates are not shown as they wont be visible in the ui)

### Tests

http://markpaul.name/dont-delete/html5-thor/v1.0.0/src/tests


### Release History
2.0.0 - (7/02/2014) - We use cssmin to minify and concat your css files now.

1.1.0 - (7/02/2014) JSHint now runs using the .jshintrc file for portability. Although this in NOT a breaking change, the JSHint steps may fail due to more strict rules, if so you can tweak the .jshintrc file to fix them.
+ 1.1.1 - (7/02/2014) Fixed some ad-hoc bugs
+ 1.1.2 - (7/02/2014) Fixed some Typos
+ 1.1.3 - (7/02/2014) Fixed some Typos

1.0.0 - (24/01/2014) Initial release that was forked out of HTML5 Skeletor.

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
      - Does the same as 'serve' below

  + build
      - Applies JSHint to the core js files, lint errors need to be fixed to proceed
      - Executes the Unit and Integration tests in headless mode using PhantomJS, tests need to pass to proceed to next step
      - Builds two versions of your app:

            - minified :
                - minifies and merges all your JS file modules into a single JS file script.js (Your 3rd party scripts are put into its own file called libraries.js)
                - minifies and merges all your CSS files  into a single CSS file

            - readable :
                - Does the same as above but it does not minify any file and keeps them readable. This build will be used to Audit your app for coding standards etc

  + package
      - Does what 'build' does as well as packaging your build into a single TAR file (placed in /package)

  + serve
      - This is where you work from, it serves your app using localhost
      - Bower Package Management is used here to download and install the core libraries to make sure everyone uses the same versions
      - This is the 1st step to run before using 'package' or 'build' as you need the Bower fetched libraries
      - A src/docs/readme.html is also automatically generated and becomes the user documentation of your App. It's built using the README.md file so please keep that up to date as it forms your App's user documentation.

  + test
      - Runs the QUnit based Unit and Integration tests in standalone/headless mode using PhantomJS
      - The following options are available:

        ```
        $ grunt test //Runs both Unit and Integration tests
        $ grunt test:unit //Runs only the Unit tests
        $ grunt test:integration //Runs only the Integration tests


### Supported Platforms

* It runs on any OS / Platform that has support for a Node.js runtime
* It has been tested on OSX and Windows 8, but it will run on other MacOS and Windows versions. It should also run on Linux machines
* It has been built on Node.js v0.10.3, but it should be forward compatible with newer versions of Node.js


### Setup / Get Started

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


### Manual Steps

The SDK will continually strive for full automation, but for now the following manual steps will be needed in certain tasks.

* In "build" and "package" your libraries are minified and joined, as we are using Bower for package fetching for certain JS libraries, we need to point to the exact js file within each Bower downloaded package. So make sure you update the 'libraryPackageMinFiles' variable in package.json to point to all your individual JS libraries that you want minified.


### Some important things to keep in mind before you get started…

1.  Make sure you update the meta data in the package.json file to reflect your app (i.e. name, version, description etc)
3.  The 'version' in package.json is a very important tag that needs to be always accurate. We recommend the SemVer versioning system. (i.e. major.minor.path - e.g. 1.3.5)
3.  The README.md file is your App's user Documentation, make sure you always keep this up to date. (.md) is a markdown file and you can use the markdown syntax to keep it pretty.
4.  Make sure you add any local files/folders that you add to the app for your own benefit in the .gitignore file so as to not mess us the project wrapper for your other team members


### JavaScript Quality Control via JSHint

* HTML5 Thor enforces JavaScript code quality via JSHint by putting your app through a set of JSHint rules to check its conformance to industry standards
* These rules are described to your app locally using the .jshintrc config file
* By having these rules in a separate file, your rules become 'portable' to your app developers who can share the rules between them and improve them if needed
* The .jshintrc config file evolves separately in this repo - [JSHint Config Template] (https://github.com/newbreedofgeek/jshint-config-template) and you can choose to update to newer versions if you want (1.0.0 is the config version being used currently in HTML5 Thor)
* the JSHint checks are built into the 'build' and 'package' steps, but if you want to run it on it's own you can do so with the 'grunt jshint' command
* To learn more on how to prevent your custom variables and coding style from appearing as errors etc, visit this [readme] (https://github.com/newbreedofgeek/jshint-config-template) or read the [JSHint documentation] (http://jshint.com/docs/)


### Folder Structure

- **src/** Where you work from
- **build/** Where your build files live
- **deploy/** Where your build files are packaged for deployment


### Core SDK Files

The following files are core to HTML5 Thor and should not be deleted and should only be modified with caution.

```
1. ".gitignore"
You GIT rules live here. GIT is the official Source Control solution for Foxtel SDK based apps. You can choose to use any other source control systems internally but you need to release your code to our GIT server for audit/testing/deployment etc

2. ".jshintrc"
These are your JSHint rules, see the JavaScript Quality Control via JSHint section above for more details.

3. "bower.json"
Bower is used for Package Management, you can use this to specify if you need a specific version of a JS library. (e.g. "jquery": "2.1.0")

4. "gruntfile.js"
This are your Grunt rules. Please don't edit any of the tasks in this file.

5. "package.json"
This is file that stores meta data on your app and is a core file that you need to keep updated. It's used by Grunt as well as our automated app audit systems.

6. "README.md"
This is your user Documentation. Keep it updated at all times as its best practice.
```


### Using your own MVC or App Development Frameworks

**The Current Framework:**

This SDK uses a very simple MVC type framework which is based on the Garber-Irish implementation. This design provides a basic JS router between your view and controller. This system is more useful for "multi page" websites rather than "single page" web apps but we use it because we wanted to keep it simple and use vanilla JS. We also use YepNope as a Async file loader for loading multiple JS files in a sequence, where you specify the JS files you want loaded in the 'src/js/script.min.js' file and YepNope does the dynamic  loading for you.

**Using Other Frameworks:**

- The there many good MVC / Development Frameworks out there (Backbone.js, Knockout.JS - to name a few).

- This SDK is built in such a way that you can use your own preferred Frameworks to develop. This is because we want to promote open standards and innovation and let developers try out new frameworks.

- But if you choose your own Development Framework you need to maintain a basic "SDK foundation structure" within this SDK to ensure the app conforms to some automated 'hooks' our build systems look for when you check your App into the Source Control System for review and testing.

- As mentioned above in the 'Folder Structure' section, you develop by working purely within the 'src/' folder. The **File System Foundation Structure Rules** and **HTML Page Foundation Structure Rules** you need to maintain within this src folder is as below:

**FILE SYSTEM FOUNDATION STRUCTURE RULES**

```
src/

---- css/					(all your standard .css files will live here)
-------- open-web/ 			(all 3rd party/plugin .css files go here)
---- main.css 				(this can be your main .css file)
---- style.min.css 			(this is a placeholder file used for builds, don't edit or delete it

---- docs/ 					(your documentation goes here)

---- fonts/ 				(your fonts go here)

---- images/ 				(your images go here)

---- js/ 					(all your .js files will live here)
-------- libraries/
------------open-web/ 		(all open-source 3rd party/plugin .js files go here)
------------package/ 		(this is the folder for Bower packages to be inserted, don't edit or delete it)
------------private/ 		(all private vendor plugin .js files go here)
--------modules/ 			(all your app's JS files can go here, a good idea to break them
							into modules so its easier to work with. e.g app.loading.js, app.home.js, app.list.js)
------- libraries.min.js 	(this is a placeholder file used for builds, don't edit or delete it)
------- script.min.js 		(this is a placeholder file used for builds, don't delete it.
							If you are not using yepnope then just comment out or
							remove app the code you see in this file)
----tests/
--------integration/ 		(You integration tests go here. Only edit the tests.js file and don't
							touch the index.html file)
--------qunit-resource/ 	(Used for QUnit resources, don't edit or delete it)
--------unit/ 				(You unit tests go here. Only edit the tests.js file and don't touch the index.html file)

----index.html				(This is your app's HTML file - it needs to follow the
							HTML Page Foundation Structure Rules as below)

```

**HTML PAGE FOUNDATION STRUCTURE RULES**

The src/index.html file is well commented with the rules so it's best you open and read those comments but at a high level here is the HTML structure.

```
<html>
	<head>
		<!--------------------->
    	<!--S: CSS Files Area-->
    	<!--------------------->
		<!--CSS Area 1 (Only used in Dev/Serve mode) - All your Standard CSS Files go here-->
		<!--CSS Area 2 (Only used in Dev/Serve mode) - All your other 3rd party/plugin .css files go here (all files in the css/open-web folder)-->

		<!--CSS Area 3 (- This is a placeholder style file used for builds, don't edit or delete it-->
		<!--------------------->
    	<!--S: CSS Files Area-->
    	<!--------------------->
	</head>

	<body>
	    <!--------------------->
    	<!--S: HTML Code Area-->
    	<!--------------------->
		<!--HTML Area 1 - All your HTML goes below here - Start-->

		<!--All your HTML goes above here - End-->
		<!--------------------->
    	<!--E: HTML Code Area-->
    	<!--------------------->


    	<!-------------------->
    	<!--S: JS Files Area-->
    	<!-------------------->
    	<!--JS Area 1 (Only used in Dev/Serve mode) - All your Bower package based .js files go here (all libs in the js/libraries/package folder)-->
    	<!--JS Area 2 (Only used in Dev/Serve mode) - All your other open-web/ and private/ .js files go here -->
    	<!--JS Area 3 (Only used in Dev/Serve mode) - All your module/ .js files go here (Currently using yepnope so we use the loader in script.min.js to load the module files) -->
    	<!--JS Area 4 - These are placeholder JS files used for builds, don't edit or delete it (But you can clear all code in script.min.js if you are not using yepnope)-->
    	<!-------------------->
    	<!--E: JS Files Area-->
    	<!-------------------->
	</body>
</html>

```


### Demo

http://markpaul.name/dont-delete/html5-thor/v3.0.0/build/minified/
+ The demo shows the last version that had major UI updates (Patches and task/build updates are not shown as they wont be visible in the ui)


### Integration Tests

http://markpaul.name/dont-delete/html5-thor/v3.0.0/src/tests/integration


### Release History

3.0.0 - (28/03/2014)
- Adding seperate integration tests as well as even though you don't write unit tests you should at least maintain platform integration tests.
- The build and package produces 2 versions of the app (minified and readable)
- upgraded these plugins to the latest version (grunt-contrib-qunit, grunt-contrib-uglify, grunt-contrib-copy, grunt-contrib-compress, grunt-contrib-cssmin)
- package task puts a tar file in a directory called package now and not deploy
- README.md is generated into a HTML user documentation file now.
- Major upgrade to the index.html file to be more descriptive and also for better dev/prod build flow control
- Major updates to the README.md

2.0.0 - (7/02/2014) - We use cssmin to minify and concat your css files now.

1.1.0 - (7/02/2014) JSHint now runs using the .jshintrc file for portability. Although this in NOT a breaking change, the JSHint steps may fail due to more strict rules, if so you can tweak the .jshintrc file to fix them.
+ 1.1.1 - (7/02/2014) Fixed some ad-hoc bugs
+ 1.1.2 - (7/02/2014) Fixed some Typos
+ 1.1.3 - (7/02/2014) Fixed some Typos

1.0.0 - (24/01/2014) Initial release that was forked out of HTML5 Skeletor.

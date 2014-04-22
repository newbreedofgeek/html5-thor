[![Stories in Ready](https://badge.waffle.io/newbreedofgeek/html5-thor.png?label=ready&title=Ready)](https://waffle.io/newbreedofgeek/html5-thor)
# HTML5 Thor
HTML5 Thor is a simple HTML5 App Tooling framework that provides you the tools needed to build efficient single page or multi page Web Apps. It also has a complete GruntJS workflow.

![image](http://markpaul.name/dont-delete/html5-thor/hotlink/thor-one.png)


## Features
* Contains a simple demo app to get your started

* Includes Bower Package Management to download and install the core libraries and their correct versions (currently jquery, modernizr, yepnope)

* Other 3rd party libraries and plugins can also be added locally (currently contains jquery.loadie to show cool page loading animation)

* Uses YepNope in 'Dev mode' to load all your JS files (which can be broken into 'modules')

* Includes a QUnit based Unit and Integration test template which can be run in the browser or in headless mode using PhantomJS

* It's got some built in automation tools so it can be used like an SDK for large development teams (this is optional)

* Includes a complete Grunt work flow, this currently has the following grunt tasks:
  + **serve**
      - This is where you work from (called 'Dev mode'), it serves your app using localhost
      - Bower Package Management is used here to download and install the core libraries to make sure everyone uses the same versions
      	(This is the 1st step to run before using 'package' or 'build' as you need the Bower fetched libraries)
      - A src/docs/readme.html is also automatically generated and becomes the user documentation of your App. It's built using the README.md file so please keep that up to date as it forms your App's documentation.

  + **build**
      - Applies JSHint to the core js files, lint errors need to be fixed to proceed
      - Executes the Unit and Integration tests in headless mode using PhantomJS, tests need to pass to proceed to next step
      - Builds two versions of your app:
      	- minified:
      		- minifies and merges all your JS file modules into a single JS file script.js (Your 3rd party scripts are put into its own file called libraries.js)
           	- minifies and merges all your CSS files into a single CSS file
      	- readable :
			- Does the same as above but it does not minify any file and keeps them readable. This build will be used to Audit your app for coding standards etc

  + **package**
      - Does what 'build' does as well as packaging your build into a single TAR file (placed in /package)

  + **test**
      - Runs the QUnit based Unit and Integration tests in headless mode
      - The following options are available:

        ```
        $ grunt test //Runs both Unit and Integration tests
        $ grunt test:unit //Runs only the Unit tests
        $ grunt test:integration //Runs only the Integration tests
        ```

  + **validate**
      - This is a core utility task you can run to ensure that changes you make to the Core Thor files and folders dont break the 'Folder Structure Integrity' (see below)


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

4. Navigate to the html5-thor folder (You should rename it to your app's name)

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
HTML5 Thor will continually strive for full automation, but for now the following manual steps will be needed in certain tasks.

* In "build" and "package" your libraries are minified and joined, as we are using Bower for package fetching for certain JS libraries, we need to point to the exact js file within each Bower downloaded package. So make sure you update the 'libraryPackageMinFiles' variable in package.json to point to all your individual JS libraries that you want minified.



### Some important things to keep in mind before you get started…
1.  Make sure you update the meta data in the package.json file to reflect your app (i.e. name, version, description etc)
2.  The 'version' in package.json is a very important tag that needs to be always accurate. We recommend the SemVer versioning system. (i.e. major.minor.path - e.g. 1.3.5)
3.  The README.md file is your App's user Documentation, make sure you always keep this up to date. (.md) is a markdown file and you can use the markdown syntax to keep it pretty.
4.  Make sure you add any local files/folders that you add to the app for your own benefit in the .gitignore file so as to not mess us the project wrapper for your other team members.



### JavaScript Quality Control via JSHint
* Thor enforces JavaScript code quality via JSHint by putting your app through a set of JSHint rules to check its conformance to industry standards
* These rules are described to your app locally using the .jshintrc config file
* The .jshintrc config file evolves separately in this repo - [JSHint Config Template] (https://github.com/newbreedofgeek/jshint-config-template) and you can choose to update to newer versions if you want (1.0.0 is the config version being used currently)
* The JSHint checks are built into the 'build' and 'package' steps, but if you want to run it on it's own you can do so with the 'grunt jshint' command.
* To learn more on how to prevent your custom variables and coding style from appearing as errors etc, visit this [readme] (https://github.com/newbreedofgeek/jshint-config-template) or read the [JSHint documentation] (http://jshint.com/docs/)



### Folder Structure
- **src/** Where you work from (Dev mode)
- **build/** Where your build files live
- **package/** Where your build files are packaged as a Tar file



### Core HTML5 Thor Files
The following files are core to how Thor provides workflow and should not be deleted and should only be modified with caution.


1. "sdk_core" folder
This folder and its contents should NEVER be modified or deleted as they are the private utility methods that keep your app's workflow working smoothly.

2. ".gitignore"
You GIT rules live here.

3. ".jshintrc"
These are your JSHint rules, see the JavaScript Quality Control via JSHint section above for more details.

4. "bower.json"
Bower is used for Package Management, you can use this to specify if you need a specific version of a JS library. (e.g. "jquery": "2.1.0")

5. "gruntfile.js"
This are your Grunt rules. Please don't edit any of the tasks in this file.

6. "package.json"
This is file that stores meta data on your app and is a core file that you need to keep updated.

7. "README.md"
This is your user Documentation. Keep it updated at all times as its best practice.




### Using your own MVC or App Development Frameworks

**The Current Framework:**

Thor currently does not use any specific framework and instead is pure ""vanilla javascript"". It uses the YepNope plugin to insert the various javascript files when in Dev mode.

**Using Other Frameworks:**

- The there many good MVC / Development Frameworks out there (Backbone.js, Knockout.JS - to name a few).

- HTML5 Thor is built in such a way that you can use your own preferred Frameworks to develop. This is because we want to promote open standards and innovation and let developers try out new frameworks.

- But if you choose your own Development Framework you still need to maintain the HTML5 Thor's "Folder Structure Integrity" to ensure the app conforms to a common structure (which will assist in CI automation etc).

- As mentioned above in the 'Folder Structure' section, you develop by working in Dev mode which is purely within the 'src/' folder. The root page of your app is 'index.html'. The **'Src' Directory Structure Rules** and **'index.html' Page Structure Rules** you need to maintain within this src folder is given below.

**'Src' DIRECTORY STRUCTURE RULES**

+ You should never delete or modify any 'first level' folders (css, js etc)
+ Items marked [* Required] should never be deleted or even renamed

```
src/
---- css/					(all your standard .css files will live here) [* Required]
-------- open-web/ 			(all 3rd party/plugin .css files go here)
---- main.css 				(this can be your main .css file)
---- style.min.css 			(this is a placeholder file used for builds, don't edit or delete it [* Required]
---- data/ 					(your mock JSON data goes here) [* Required]
---- docs/ 					(your documentation goes here)
---- fonts/ 				(your fonts go here) [* Required]
---- images/ 				(your images go here) [* Required]
---- js/ 					(all your .js files will live here) [* Required]
-------- libraries/
------------open-web/ 		(all open-source 3rd party/plugin .js files go here)
------------package/ 		(this is the folder for Bower packages to be inserted, don't edit or delete it)
------------private/ 		(all private vendor plugin .js files go here)
--------modules/ 			(all your app's JS files can go here [* Required]
------- libraries.min.js 	(this is a placeholder file used for builds, don't edit or delete it) [* Required]
------- script.min.js 		(this is a placeholder file used for YepNope and builds, don't delete it) [* Required]
----tests/
--------integration/ 		(You integration tests go here) [* Required]
--------qunit-resource/ 	(Used for QUnit resources, don't edit or delete it)
--------unit/ 				(You unit tests go here)  [* Required]
----index.html				(Your main HTML file, follow the index.html Page Structure Rules as below) [* Required]

```

**'index.html' PAGE STRUCTURE RULES**

+ The src/index.html file is well commented with the rules so it's best you open and read those comments but at a high level here is the HTML structure.

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

### Folder Structure Integrity
Thor is a open and flexible option to build your apps. But it also acts as a the foundation to an SDK that can be used in large development teams who churn out HTML5 apps. As such, as a developer you need to ensure you dont break the 'Folder Structure Integrity'. This can be validated by running the 'validate' grunt task. This task does the following:

**1. Validates your App's folder structure**

Step 1 - It makes sure your 'src' directory conforms to the **'Src' Directory Structure Rules**

Step 2 - Runs the 'build' task to generate the minified and readable builds of your app

Step 3 - It then makes sure the resulting builds conform to the following structure

	minified
	---- css/
	---- css/style.min.css
	---- fonts/
	---- images/
	---- js/
	---- js/libraries.min.js
	---- js/script.min.js
	---- index.html

	readable
	---- css/
	---- css/style.min.css
	---- fonts/
	---- images/
	---- js/
	---- js/libraries.min.js
	---- js/script.min.js
	---- index.html

**2. Provides you a link to Sanity test both your 'minified' and 'readable' builds**

You need to ensure that you Sanity test both the minified and readable builds. A link is provided for you to do the Sanity Tests.

### Demo

http://markpaul.name/dont-delete/html5-thor/v4.0.0/build/minified/
+ The demo shows the last version that had major UI updates (Patches and task/build updates are not shown as they wont be visible in the ui)

### Integration Tests

http://markpaul.name/dont-delete/html5-thor/v4.0.0/src/tests/integration

### Release History
- 4.0.0
	- (Released on 22/04/2014) And differs from 3.0.0 as below:
        - Updated - the "grunt-contrib-connect" plugin.
        - Removed - the garber-irish JS code design as its too complicated for simple web apps.
        - Removed - the skeletor css templates.
        - Removed - the ugly sample counter app.
        - Updated - the "__launch.js" file is now called "_appLaunch.js".
        - Added - a 'data' folder to store your mock json data files.
        - Added (Tests): Now lets you use the same YepNope file to load your JS modules for unit testing.
        - Added (Tests): Tests now work in Async mode when calling it using "grunt test" and will wait until the yepnope files load before running your tests.
        - Added (Meta): package.json included 'thorVersion' which should indicate the x.x.x version of HTML5 Thor being used (e.g. 0.2.0).
        - Removed (Meta): The "version" property in bower.json were removed as its not needed.
        - Added (Documentation): Added a section on "Folder Structure Integrity" which describes how automated systems will test your app's integrity and validate your app for conformance. (optional feature that will be useful if you use HML5 thor as a SDK for large teams where multiple apps are being built)
        - Updated (Documentation): has been updated to reflect the changes in this version.
        - Other: Grunt 'serve' auto loads the app in default browser, but this can be disabled if its annoying.
        - Other: The JSHint config enables a 'node' default environment as well.

- 3.0.0
    - (Released on 28/03/2014) And differs from 2.0.0 as below:
        - Adding separate integration tests as well as even though you don't write unit tests you should at least maintain platform integration tests.
        - The build and package produces 2 versions of the app (minified and readable).
        - upgraded these plugins to the latest version (grunt-contrib-qunit, grunt-contrib-uglify, grunt-contrib-copy, grunt-contrib-compress, grunt-contrib-cssmin).
        - package task puts a tar file in a directory called package now and not deploy.
        - README.md is generated into a HTML user documentation file now.
        - Major upgrade to the index.html file to be more descriptive and also for better dev/prod build flow control.
        - Major updates to the README.md.

- 2.0.0
    - (Released on 7/02/2014)
        - We use cssmin to minify and concat your css files now.

- 1.1.0
    - (Released on 7/02/2014)
        - JSHint now runs using the .jshintrc file for portability. Although this in NOT a breaking change, the JSHint steps may fail due to more strict rules, if so you can tweak the .jshintrc file to fix them.
        - 1.1.1 - (7/02/2014) Fixed some ad-hoc bugs
        - 1.1.2 - (7/02/2014) Fixed some Typos
        - 1.1.3 - (7/02/2014) Fixed some Typos

- 1.0.0
    - (Released on 24/01/2014)
        - Initial release that was forked out of HTML5 Skeletor.



##### Thanks:
[Nanda @ clker](http://www.clker.com/clipart-254019.html) for Thor clipart.

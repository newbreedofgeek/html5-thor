var fs = require('fs');

exports.validateSrcFolder = function() {
    "use strict";

    var srcFolderIntegrityPassed = false;

    // check 'src' folder integrity
    if (fs.existsSync('src')
        && fs.existsSync('src/css/style.min.css')
        && fs.existsSync('src/data')
        && fs.existsSync('src/fonts')
        && fs.existsSync('src/images')
        && fs.existsSync('src/js/libraries.min.js')
        && fs.existsSync('src/js/script.min.js')
        && fs.existsSync('src/js/modules')
        && fs.existsSync('src/tests/integration/index.html')
        && fs.existsSync('src/tests/integration/tests.js')
        && fs.existsSync('src/index.html')) {

        console.log('> src folder structure integrity test - Passed!');
        srcFolderIntegrityPassed = true;
    }
    else {
        console.log('> src folder structure integrity test - FAILED!');
    }

    return srcFolderIntegrityPassed;
};

exports.validateBuildFolder = function() {
    "use strict";

    var passed = false;

    // check 'src' folder integrity
    if (fs.existsSync('build')
        && fs.existsSync('build/minified/css/style.min.css')
        && fs.existsSync('build/minified/fonts')
        && fs.existsSync('build/minified/images')
        && fs.existsSync('build/minified/js/libraries.min.js')
        && fs.existsSync('build/minified/js/script.min.js')
        && fs.existsSync('build/readable/css/style.min.css')
        && fs.existsSync('build/readable/fonts')
        && fs.existsSync('build/readable/images')
        && fs.existsSync('build/readable/js/libraries.min.js')
        && fs.existsSync('build/readable/js/script.min.js')) {

        console.log('> build folder structure integrity test - Passed!');
        passed = true;
    }
    else {
        console.log('> build folder structure integrity test - FAILED!');
    }

    return passed;
};
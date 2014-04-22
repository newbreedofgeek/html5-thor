exports.promptConfig = function() {
    "use strict";

    return {
        validateIntegrity: {
            options: {
                questions: [
                    {
                        config: 'validateIntegrity',
                        type: 'input',
                        message: 'We will now test the integrity of your \'src\' folder and your \'build\' output folders. Please ensure your folders conform to the HTML5 Thor\'s requirements for \'Folder Structure Integrity\'. (Press Enter to Proceed)',
                        default: ''
                    }
                ]
            }
        },
        prepareBuild: {
            options: {
                questions: [
                    {
                        config: 'prepareBuild',
                        type: 'input',
                        message: 'We will now build your app using your app\'s default \'grunt build\' task to generate the build for build folder integrity testing. Please ensure your build passes with no errors. (Press Enter to Proceed)',
                        default: ''
                    }
                ]
            }
        },
        validateSanity: {
            options: {
                questions: [
                    {
                        config: 'validateSanity',
                        type: 'input',
                        message: 'Next you will be presented with a link to Sanity Test both the minified and readable app builds. Once you confirm both builds are good you can proceed to publish the app for deployment. (Press Enter to Proceed)',
                        default: ''
                    }
                ]
            }
        }
    }
}

exports.bindValidate = function(grunt, sdkNode) {
    "use strict";

    grunt.registerTask('validate', function() {
        // Do all "Integrity Tests"
        grunt.task.run(['prompt:validateIntegrity']);
        grunt.task.run(['validateSrcFolder']);

        grunt.task.run(['prompt:prepareBuild']);
        grunt.task.run(['build:skip']);
        grunt.task.run(['validateBuildFolder']);

        // Launch Sanity Tests on Build
        grunt.task.run(['prompt:validateSanity']);
        grunt.task.run(['connect:sanityTest']);
    });

    grunt.registerTask('validateSrcFolder', function() {
        return sdkNode.validateSrcFolder();
    });

    grunt.registerTask('validateBuildFolder', function() {
        return sdkNode.validateBuildFolder();
    });
}
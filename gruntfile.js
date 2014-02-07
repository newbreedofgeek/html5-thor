module.exports = function(grunt) {

    "use strict";

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            src: ['build', 'deploy', 'src/css/style.min.css']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false
            },
            min: {
                files: [{
                    src:[ "src/js/modules/*.js"],
                    dest: 'build/js/script.js'
                },
                {
                    src: '<%= pkg.libraryPackageMinFiles %>',
                    dest: 'build/js/libraries.js'
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/images/', src: ['**'], dest: 'build/images/'},
                    {expand: true, cwd: 'src/css/', src: ['style.min.css'], dest: 'build/css/'},
                    {expand: true, cwd: 'src/fonts/', src: ['**'], dest: 'build/fonts/'}
                ]
            }
        },
        targethtml: {
            dist: {
                files: {
                    'build/index.html': 'src/index.html'
                }
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'deploy/build.zip'
                },
                files: [
                    {src: ['build/**'], dest: ''}
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'src/'
                }
            },
            serverAlive: {
                options: {
                    port: 8000,
                    base: 'src/',
                    keepalive: true
                }
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: './src/js/libraries/package',
                    cleanTargetDir: true,
                    cleanBowerDir: true,
                    install: true,
                    copy: true,
                    verbose: true
                }
            }
        },
        jshint: {
            files: ['bower.json', 'package.json', 'gruntfile.js', 'src/js/**/*.js'],
            options: {
                ignores: ['src/js/libraries/**/*.js'],
                jshintrc: true
            }
        },
        qunit: {
            all: {
                options: {
                    urls: [
                        'http://localhost:8000/tests/index.html'
                    ]
                }
            }
        },
        cssmin: {
            combine: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                },
                files: {
                    'src/css/style.min.css': ['src/css/**/*.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task is to serve the app
    grunt.registerTask('default', function() {
        grunt.task.run(['build']);
    });

    // Build and package app to zip
    grunt.registerTask('package', ['jshint', 'test', 'clean', 'uglify', 'cssmin', 'copy', 'targethtml:dist', 'compress'] );

    // Serve working src locally
    grunt.registerTask('serve', ['clean', 'bower', 'connect:serverAlive'] );

    // Build the app
    grunt.registerTask('build', ['jshint', 'test', 'clean', 'uglify', 'cssmin', 'copy', 'targethtml:dist']);

    // run apps unit tests
    grunt.registerTask('test', ['connect:server', 'qunit']);

};
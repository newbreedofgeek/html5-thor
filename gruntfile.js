module.exports = function(grunt) {

    "use strict";

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            src: ['build', 'package']
        },
        uglify: {
            minified: {
                options: {
                    mangle: false,
                    compress: false,
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: [{
                    src:[ "src/js/modules/*.js"],
                    dest: 'build/minified/js/script.min.js'
                },
                    {
                        src: '<%= pkg.libraryPackageMinFiles %>',
                        dest: 'build/minified/js/libraries.min.js'
                    }]
            },
            readable: {
                options: {
                    mangle: false,
                    compress: false,
                    beautify: true,
                    preserveComments: true,
                    banner: '/*! Readable Version: <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: [{
                    src:[ "src/js/modules/*.js"],
                    dest: 'build/readable/js/script.min.js'
                }]
            }
        },
        copy: {
            minified: {
                files: [
                    {expand: true, cwd: 'src/images/', src: ['**'], dest: 'build/minified/images/'},
                    {expand: true, cwd: 'src/fonts/', src: ['**'], dest: 'build/minified/fonts/'}
                ]
            },
            readable: {
                files: [
                    {expand: true, cwd: 'src/images/', src: ['**'], dest: 'build/readable/images/'},
                    {expand: true, cwd: 'src/fonts/', src: ['**'], dest: 'build/readable/fonts/'},
                    {expand: true, cwd: 'build/minified/js/', src: ['libraries.min.js'], dest: 'build/readable/js/'}
                ]
            }
        },
        targethtml: {
            minified: {
                files: [
                    {'build/minified/index.html': 'src/index.html'}
                ]
            },
            readable: {
                files: [
                    {'build/readable/index.html': 'src/index.html'}
                ]
            }
        },
        compress: {
            minified: {
                options: {
                    archive: 'package/build.tar'
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
                        'http://localhost:8000/tests/unit/index.html',
                        'http://localhost:8000/tests/integration/index.html'
                    ]
                }
            },
            unit: {
                options: {
                    urls: [
                        'http://localhost:8000/tests/unit/index.html'
                    ]
                }
            },
            integration: {
                options: {
                    urls: [
                        'http://localhost:8000/tests/integration/index.html'
                    ]
                }
            }
        },
        cssmin: {
            options: {
                noAdvanced: true
            },
            minified: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: {
                    'build/minified/css/style.min.css': ['src/css/**/*.css']
                }
            },
            readable: {
                options: {
                    banner: '/*! Readable Version: <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    keepBreaks: true
                },
                files: {
                    'build/readable/css/style.min.css': ['src/css/**/*.css']
                }
            }
        },
        md2html: {
            one_file: {
                options: {},
                files: [{
                    src: ['README.md'],
                    dest: 'src/docs/readme.html'
                }]
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
    grunt.loadNpmTasks('grunt-md2html');


    grunt.registerTask('default', function() {
        grunt.task.run(['serve']);
    });

    grunt.registerTask('package', function() {
        grunt.task.run(['build', 'compress']);
    });

    grunt.registerTask('document', function() {
        grunt.task.run(['md2html']);
    });

    grunt.registerTask('serve', [
        'clean',
        'bower',
        'document',
        'connect:serverAlive'
    ]);

    grunt.registerTask('build', function() {
        grunt.customSdkMethods.logMinFilesMsg();

        grunt.task.run([
            'jshint',
            'test',
            'clean',
            'uglify:minified',
            'uglify:readable',
            'cssmin:minified',
            'cssmin:readable',
            'copy:minified',
            'copy:readable',
            'targethtml:minified',
            'targethtml:readable'
        ]
        );
    });

    grunt.registerTask('test', function(testType) {
        if (!testType) {
            testType = 'all';
        }

        grunt.task.run(['connect:server', 'qunit:' + testType]);
    });

    grunt.customSdkMethods = {
        logMinFilesMsg : function() {
            grunt.log.writeln('**************************************');
            grunt.log.writeln('Building your app now... Please ensure that:');
            grunt.log.writeln('');
            grunt.log.writeln('(a) The libraryPackageMinFiles array in package.json includes the correct paths to all the library files you want included in your app.');
            grunt.log.writeln('**************************************');
        }
    };
};
// Generated on 2016-02-14 using generator-angular 0.15.1
(function () {
	'use strict';

	// # Globbing
	// for performance reasons we're only matching one level down:
	// 'test/spec/**/*.js'
	// use this if you want to recursively match all subfolders:
	// 'test/spec/**/*.js'

	module.exports = function (grunt) {

		// Time how long tasks take. Can help when optimizing build times
		require('time-grunt')(grunt);

		// Automatically load required Grunt tasks
		require('jit-grunt')(grunt, {
			useminPrepare: 'grunt-usemin',
			ngtemplates: 'grunt-angular-templates',
		});

		// Configurable paths for the application
		var appConfig = {
			app: require('./bower.json').appPath || 'app',
			dist: 'dist'
		};

		// Define the configuration for all the tasks
		grunt.initConfig({
			// Project settings
			yeoman: appConfig,

			// Watches files for changes and runs tasks based on the changed files
			watch: {
				bower: {
					files: ['bower.json'],
					tasks: ['wiredep']
				},
				js: {
					files: ['<%= yeoman.app %>/{components,modules}/**/*.js'],
					tasks: ['newer:injector:js' /*, 'newer:jshint:all', 'newer:jscs:all'*/ ],
					options: {
						livereload: '<%= connect.options.livereload %>'
					}
				},
				jade: {
					files: ['<%= yeoman.app %>/{components,modules}/**/*.jade'],
					tasks: ['jade']
				},
				stylus: {
					files: ['<%= yeoman.app %>/{components,modules}/**/*.styl', '<%= yeoman.app %>/assets/styles/*.styl'],
					tasks: ['newer:injector:styl','stylus']
				},
				gruntfile: {
					files: ['Gruntfile.js']
				},
				livereload: {
					options: {
						livereload: '<%= connect.options.livereload %>'
					},
					files: [
						'.tmp/{components,modules}/**/*.html',
						'<%= yeoman.app %>/assets/styles/*.css',
						'.tmp/assets/styles/main.css',
						'<%= yeoman.app %>/assets/images/*.{png,jpg,jpeg,gif,webp,svg}'
					]
				}
			},

			// The actual grunt server settings
			connect: {
				options: {
					port: 9000,
					// Change this to '0.0.0.0' to access the server from outside.
					hostname: 'localhost',
					livereload: 35729
				},
				livereload: {
					options: {
						open: true,
						middleware: function (connect) {
							return [
								connect.static('.tmp'),
								connect().use(
									'/bower_components',
									connect.static('./bower_components')
								),
								connect().use(
									'/app/assets/styles',
									connect.static('./app/assets/styles')
								),
								connect.static(appConfig.app)
							];
						}
					}
				},
				dist: {
					options: {
						open: true,
						base: '<%= yeoman.dist %>'
					}
				}
			},

			// Make sure there are no obvious mistakes
			jshint: {
				options: {
					jshintrc: '.jshintrc',
					reporter: require('jshint-stylish')
				},
				all: {
					src: [
						'Gruntfile.js',
						'<%= yeoman.app %>/scripts/**/*.js'
					]
				}
			},

			// Make sure code styles are up to par
			jscs: {
				options: {
					config: '.jscsrc',
					verbose: true
				},
				all: {
					src: [
						'Gruntfile.js',
						'<%= yeoman.app %>/{components,modules}/**/*.js'
					]
				},
			},

			// Empties folders to start fresh
			clean: {
				dist: {
					files: [{
						dot: true,
						src: [
							'.tmp',
							'<%= yeoman.dist %>/**/*',
							'!<%= yeoman.dist %>/.git**/*'
						]
					}]
				},
				server: '.tmp'
			},

			injector: {
				options: {},
				js: {
					options: {
						transform: function (filePath) {
							filePath = filePath.replace('/app/', '');
							return '<script src="' + filePath + '"></script>';
						},
						starttag: '<!-- inject-scripts -->',
						endtag: '<!-- end inject-scripts -->'
					},
					files: {
						'<%= yeoman.app %>/index.html': [
							'<%= yeoman.app %>/{components,modules}/**/*.js',
							'!<%= yeoman.app %>/{components,modules}/**/*.spec.js',

						]
					}
				},
				styl: {
					options: {
						transform: function (filePath) {
							filePath = filePath.replace('/app/', '');
							return '@import "../../' + filePath + '"';
						},
						starttag: '// inject-styl',
						endtag: '// end inject-styl'
					},
					files: {
						'<%= yeoman.app %>/assets/styles/app.styl': [
							'<%= yeoman.app %>/{components,modules}/**/*.styl',
						]
					}
				}
			},

			jade: {
				compile: {
					options: {
						data: {
							debug: true
						}
					},
					files: [{
						expand: true,
						cwd: '<%= yeoman.app %>/',
						src: [
							'{components,modules}/**/*.jade'
						],
						dest: '.tmp',
						ext: '.html'
					}]
				}
			},

			stylus: {
				compile: {
					options: {},
					files: {
						'.tmp/assets/styles/main.css': ['<%= yeoman.app %>/assets/styles/app.styl']
					}
				}
			},

			// Add vendor prefixed styles
			postcss: {
				options: {
					processors: [
						require('autoprefixer-core')({
							browsers: ['last 1 version']
						})
					]
				},
				server: {
					options: {
						map: true
					},
					files: [{
						expand: true,
						cwd: '.tmp/styles/',
						src: '**/*.css',
						dest: '.tmp/styles/'
					}]
				},
				dist: {
					files: [{
						expand: true,
						cwd: '.tmp/styles/',
						src: '**/*.css',
						dest: '.tmp/styles/'
					}]
				}
			},

			// Automatically inject Bower components into the app
			wiredep: {
				app: {
					src: ['<%= yeoman.app %>/index.html'],
					ignorePath: /\.\.\//
				},
			},

			// Renames files for browser caching purposes
			filerev: {
				dist: {
					src: [
						'<%= yeoman.dist %>/{components,modules}/**/*.js',
						'!<%= yeoman.dist %>/{components,modules}/**/*.spec.js',
						// '<%= yeoman.dist %>/assets/styles/**/*.css'
						// '<%= yeoman.dist %>/assets/images/*.{png,jpg,jpeg,gif,webp,svg}',
						//'<%= yeoman.dist %>/assets/fonts/*'
					]
				}
			},

			// Reads HTML for usemin blocks to enable smart builds that automatically
			// concat, minify and revision files. Creates configurations in memory so
			// additional tasks can operate on them
			useminPrepare: {
				html: '<%= yeoman.app %>/index.html',
				options: {
					dest: '<%= yeoman.dist %>/',
					flow: {
						html: {
							steps: {
								js: ['concat', 'uglifyjs'],
								css: ['cssmin']
							},
							post: {}
						}
					}
				}
			},

			// Performs rewrites based on filerev and the useminPrepare configuration
			usemin: {
				html: ['<%= yeoman.dist %>/**/*.html'],
				css: ['<%= yeoman.dist %>/assets/styles/**/*.css'],
				js: ['<%= yeoman.dist %>/{components,modules}/**/*.js'],
				options: {
					assetsDirs: [
						'<%= yeoman.dist %>',
						'<%= yeoman.dist %>/assets/images',
						'<%= yeoman.dist %>/assets/styles'
					],
					patterns: {
						js: [
							[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']
						]
					}
				}
			},

			// The following *-min tasks will produce minified files in the dist folder
			// By default, your `index.html`'s <!-- Usemin block --> will take care of
			// minification. These next options are pre-configured if you do not wish
			// to use the Usemin blocks.
			// cssmin: {
			//   dist: {
			//     files: {
			//       '<%= yeoman.dist %>/styles/main.css': [
			//         '.tmp/styles/**/*.css'
			//       ]
			//     }
			//   }
			// },
			// uglify: {
			//   dist: {
			//     files: {
			//       '<%= yeoman.dist %>/scripts/scripts.js': [
			//         '<%= yeoman.dist %>/scripts/scripts.js'
			//       ]
			//     }
			//   }
			// },

			// concat: {
			//   dist: {}
			// },

			imagemin: {
				dist: {
					files: [{
						expand: true,
						cwd: '<%= yeoman.app %>/images',
						src: '**/*.{png,jpg,jpeg,gif}',
						dest: '<%= yeoman.dist %>/images'
					}]
				}
			},

			svgmin: {
				dist: {
					files: [{
						expand: true,
						cwd: '<%= yeoman.app %>/images',
						src: '**/*.svg',
						dest: '<%= yeoman.dist %>/images'
					}]
				}
			},

			htmlmin: {
				dist: {
					options: {
						collapseWhitespace: true,
						conservativeCollapse: true,
						collapseBooleanAttributes: true,
						removeCommentsFromCDATA: true
					},
					files: [{
						expand: true,
						cwd: '<%= yeoman.dist %>',
						src: ['*.html'],
						dest: '<%= yeoman.dist %>'
					}]
				}
			},

			ngtemplates: {
				dist: {
					options: {
						module: '5minlogo',
						htmlmin: '<%= htmlmin.dist.options %>',
						usemin: 'scripts/scripts.js'
					},
					cwd: '.tmp',
					src: '{components,modules}/**/*.html',
					dest: '.tmp/templateCache.js'
				}
			},

			// ng-annotate tries to make the code safe for minification automatically
			// by using the Angular long form for dependency injection.
			ngAnnotate: {
				dist: {
					files: [{
						expand: true,
						cwd: '.tmp/concat/assets/scripts',
						src: '*.js',
						dest: '.tmp/concat/assets/scripts'
					}]
				}
			},


			// Copies remaining files to places other tasks can use
			copy: {
				dist: {
					files: [{
						expand: true,
						dot: true,
						cwd: '<%= yeoman.app %>',
						dest: '<%= yeoman.dist %>',
						src: [
							'*.{ico,png,txt}',
							'*.html',
							'assets/images/**/*.*',
							'assets/fonts/**/*.*',
						]
					}, {
						expand: true,
						cwd: '<%= yeoman.app %>/bower_components/Ionicons/fonts',
						dest: '<%= yeoman.dist %>/assets/fonts',
						src: ['*.*']
					}, {
						expand: true,
						cwd: '<%= yeoman.app %>/bower_components/components-font-awesome/fonts',
						dest: '<%= yeoman.dist %>/assets/fonts',
						src: ['*.*']
					}, {
						expand: true,
						cwd: '.tmp/images',
						dest: '<%= yeoman.dist %>/images',
						src: ['generated/*']
					}]
				},
				styles: {
					expand: true,
					cwd: '<%= yeoman.app %>/assets/styles',
					dest: '.tmp/styles/',
					src: '**/*.css'
				}
			},

			// Run some tasks in parallel to speed up the build process
			concurrent: {
				server: [
					'copy:styles'
				],
				dist: [
					'copy:styles',
					'imagemin',
					'svgmin'
				]
			},
		});


		grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
			if (target === 'dist') {
				return grunt.task.run(['build', 'connect:dist:keepalive']);
			}

			grunt.task.run([
				'clean:server',
				'wiredep',
                'injector:styl',
				'jade',
				'stylus',
				'injector:js',
				'concurrent:server',
				'postcss:server',
				'connect:livereload',
				'watch'
			]);
		});

		grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
			grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
			grunt.task.run(['serve:' + target]);
		});

		grunt.registerTask('build', [
			'clean:dist',
			'wiredep',
			'useminPrepare',
			'jade',
			'injector:js',
			'injector:styl',
			'stylus',
			'concurrent:dist',
			'postcss',
			'ngtemplates',
			'concat',
			'ngAnnotate',
			'copy:dist',
			'cssmin',
			'uglify',
			'filerev',
			'usemin',
			'htmlmin'
		]);

		grunt.registerTask('default', [
			'newer:jshint',
			'newer:jscs',
			'build'
		]);
	};
}());

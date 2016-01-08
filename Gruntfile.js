module.exports = function (grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		banner:'/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; \n*/\n',

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['public/js/navigator-js/**/*.js'],
				dest: 'navigator-js.js'
			}
		},

		uglify: {
			dist: {
				files: {
					'navigator-js.min.js': 'navigator-js.js'
				},
				options: {
					banner:'<%= banner %>'
				}
			}
		},

		umd: {
			dist: {
				src: 'navigator-js.js',
				objectToExport: 'this.navigatorjs'
			}
		},

		copy: {
			navigator: {
				src: ['navigator-js.js', 'navigator-js.min.js'],
				dest: 'public/js/dist/'
			}
		},

		watch: {
			files: 'public/js/navigator-js/**/*.js',
			tasks: ['default']
		},

		bump: {
			options: {
				files: ['package.json', 'bower.json'],
				updateConfigs: ["pkg","banner"],
				commit: true,
				commitMessage: 'Release v%VERSION%',
				commitFiles: ['package.json', 'bower.json', 'navigator-js.min.js', 'navigator-js.js', 'public/js/dist/navigator-js.min.js', 'public/js/dist/navigator-js.js'], // '-a' for all files
				createTag: true,
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: true,
				pushTo: 'origin master',
				gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-umd');

	grunt.registerTask('default', ['concat', 'umd', 'uglify', 'copy']);

	grunt.registerTask('release', ['default','bump-commit']);
	grunt.registerTask('release:patch', ['bump-only:patch','release']);
	grunt.registerTask('release:minor', ['bump-only:minor','release']);
	grunt.registerTask('release:major', ['bump-only:major','release']);
};

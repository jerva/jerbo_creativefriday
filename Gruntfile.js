/*global module */
module.exports = function(grunt) {
	'use strict';
	
    // Project configuration.
    grunt.initConfig({
		watch: {
            jshint: {
            	files: ['src/*.js'],
            	tasks: ['jshint']
            },
			karma: {
				files: ['src/*.js'],
				tasks: ['karma:unit:run']
			}
		},
		jshint: {
            frontend: {
              src: ['Gruntfile.js', 'src/*.js'],
              options: globalLintOptions()
            },
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				background: true,
				singleRun: false,
				browsers: ['IE', 'PhantomJS', 'Chrome', 'Firefox']
			},
			continuous: {
				configFile: 'karma.conf.js',
				singleRun: true,
				browsers: ['IE', 'PhantomJS', 'Chrome', 'Firefox'],
				browserNoActivityTimeout: 2000
			}
		}
    });

    // Load grunt plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');

    // Register tasks
    grunt.registerTask("default", "Lint & test", ["jshint", "karma:continuous"]);
    grunt.registerTask("lint", "Lint", ["jshint"]);
	grunt.registerTask("karmasrv", "Run Karma on file change (must run command: grunt karmasrv watch)", ["karma:unit:start"]);
	
    //grunt.registerTask("test", "Test everything", [""]);


    function doNothing(){ }
    function globalLintOptions() {
        return {
            bitwise: true,
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: false,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            strict: true,
            trailing: true
        };
    }
};
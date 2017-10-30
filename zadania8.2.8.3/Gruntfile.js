module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'assets/css/style.css': 'assets/sass/main.scss'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/images/build/'
        }]
      }
    },
    watch: {
      styles: {
        files: ['assets/sass/main.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      }
    }
		jshint: {
			all: ['assets/js/*.js']
    }
  });
  
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
  grunt.registerTask('default', ['jshint']);
};
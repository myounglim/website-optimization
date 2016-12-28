module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 100,
            suffix: '_small',
            quality: 20
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'img-resized/'
        }]
      }
    },
    imagemin: {                          // Task
      static: {                          // Target
        options: {                       // Target options
          optimizationLevel: 4

        }
      },
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img/',                   // Src matches are relative to this path
          src: ['*.{gif,jpg,png}'],   // Actual patterns to match
          dest: 'img-minified/'                  // Destination path prefix
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', [
    'responsive_images',
    'imagemin'
    ]);

};
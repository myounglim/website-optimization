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
    },

    htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true
      },
      files: {                                   // Dictionary of files
        'release/index.html': 'index.html'     // 'destination': 'source'
      }
    }
  },

  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'css/',
        src: ['*.css'],
        dest: 'release/css',
        ext: '.min.css'
      }]
    }
  },

  uglify: {
    my_target: {
      files: [{
          expand: true,
          cwd: 'js/',
          src: ['*.js'],
          dest: 'release/js'
      }]
    }
  }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', [
    'responsive_images',
    'imagemin',
    'htmlmin',
    'cssmin',
    'uglify'
    ]);

};
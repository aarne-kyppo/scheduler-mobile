module.exports = function(grunt){
  grunt.initConfig({
    options: {
      scheduler_root: '../../nodeprojects/schedule',
      root: '../../mobiilisovellukset/Scheduler',
      viewsroot: '../../mobiilisovellukset/Scheduler/views',
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: '<%= options.scheduler_root %>',
            src: [
              'bower.json',
              'package.json',
            ],
            dest: '<%= options.root %>',
          },
          {
            expand: true,
            cwd: 'bower_components/',
            src: [
              'angular/angular.min.js',
              'angular/angular.js',
              'jquery/dist/jquery.min.js',
              'lodash/lodash.min.js',
              'moment/moment.js',
              'ScrollToFixed/jquery-scrolltofixed-min.js',
              'angular-route/angular-route.min.js',
              'bootstrap/dist/css/bootstrap.min.css',
              'bootstrap/dist/css/bootstrap-theme.min.css',
              'bootstrap/dist/js/bootstrap.min.js',
              'bootstrap/dist/fonts/*'
            ],
            dest: 'www/lib'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default',['copy']);
}

module.exports = function(grunt) {
  var os = require('os');
  var browsers = ['Chrome', 'Firefox'];
  if (os.type() === 'Darwin') {
    browsers.push('ChromeCanary');
  }
  if (os.type() === 'Windows_NT') {
    browsers.push('IE');
  }
  grunt.initConfig({
    pkg: '<json:package.json>',
    testacular: {
      shadowdom: {
        options: {
          configFile: "testacular-shadowdom.conf.js",
          browsers: browsers,
          keepalive: true,
          singleRun: true
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-testacular');
  grunt.registerTask('test', 'testacular');
}

module.exports = function(config) {
  const browser = ['Chrome'];

  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular/cli/plugins/karma')
    ],
    files: [
      {pattern: './src/**/*.spec.ts'},
      {pattern: './demo/**/*.spec.ts', included: false, served: false, watched: false}
    //  exclude didn't work, templates with !() too
    ],
    exclude: ["./demo/**/*"],
    reporters: ['dots'],
    browsers: browser,
    browserNoActivityTimeout: 180000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,
    port: 9876
  });
};

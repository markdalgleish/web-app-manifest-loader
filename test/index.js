var expect = require('chai').expect;
var webpack = require('webpack');
var clean = require('rimraf');
var getSubDirsSync = require('./utils/get-sub-dirs-sync');
var directoryContains = require('./utils/directory-contains');

var successCases = getSubDirsSync(__dirname + '/success-cases');

describe('Success cases', function() {

  successCases.forEach(function(successCase) {

    describe(successCase, function () {

      beforeEach(function (done) {
        clean(__dirname + '/success-cases/' + successCase + '/actual-output', done);
      });

      it('generates the expected files', function (done) {
        var webpackConfig = require('./success-cases/' + successCase + '/webpack.config.js');

        webpack(webpackConfig, function(err, stats) {
          if (err) {
            return done(err);
          }

          var caseDir = __dirname + '/success-cases/' + successCase;
          var expectedDir = caseDir + '/expected-output/';
          var actualDir = caseDir + '/actual-output/';

          directoryContains(expectedDir, actualDir, function(err, result) {
            if (err) {
              return done(err);
            }

            expect(result).to.be.ok;
            done();
          });
        });
      });

    });

  });

});

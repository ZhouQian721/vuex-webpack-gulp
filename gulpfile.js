var gulp = require('gulp');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var webpack = require('webpack');
var webpackDevconfig = require('./build/webpack.dev.conf');
var webpackProdConfig = require('./build/webpack.prod.conf');
var WebpackDevServer = require('webpack-dev-server');
var fse = require('fs-extra');
var mustache = require('gulp-mustache');
var opn = require('opn');

const zipmd5 = require('gulp-zipmd5');

var dir = './dist';
var jsAssets = [
  './src/assets/lib/jquery.js',
  './src/assets/lib/jquery.cookie.js'
];
var cssAssets = [
  './src/assets/style/vue2-animate.min.css',
  './src/assets/style/vue2-animate.css'
];

var devcompiler = webpack(webpackDevconfig);
var prodCompiler = webpack(webpackProdConfig);

gulp.task('pre-build', function (cb) {
  fse.remove(dir, function (err) {
    if (err) {
      console.log('err:', err);
      return;
    }

    cb();
  });
});

gulp.task('build-js', ['pre-build'], function (cb) {
  /*gulp.src(jsUplify)
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest(`${dir}/js`));*/

  gulp.src(jsAssets).pipe(gulp.dest(`${dir}/js`));
  cb();
});

gulp.task('build-css', ['pre-build'], function (cb) {
  gulp.src(cssAssets).pipe(gulp.dest(`${dir}/css`));
  cb();
});

gulp.task('build-img', ['pre-build'], function (cb) {
  cb();
});

gulp.task('build-html', ['pre-build'], function (cb) {
  gulp.src([
    './src/*.mustache'
  ])
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(mustache({}))
    .pipe(gulp.dest(`${dir}`));
  cb();
});

gulp.task('build', ['build-js', 'build-css', 'build-img', 'build-html'], function (cb) {
  setTimeout(function () {
    prodCompiler.run(function (error, status) {
      if (error) {
        return console.error(error);
      }
      cb();
    });
  }, 1000); // prodCompiler must run after 'build-html' done
});

gulp.task('arthur', () =>
  gulp.src('build/**/*')
    .pipe(zipmd5('output.zip'))
    .pipe(gulp.dest('arthur'))
);

gulp.task('debug', ['build-js', 'build-css', 'build-img', 'build-html'], function () {
  setTimeout(function () {
    devcompiler.run(function (error, status) {
      if (error) {
        return console.error(error);
      }

      var server = new WebpackDevServer(devcompiler, {
        contentBase: dir,
        disableHostCheck: true
      });

      var port = 8080;
      server.listen(port, function () {
        var uri = 'http://localhost:' + port;
        opn(uri);
      });
    });
  }, 1000);// devcompiler must run after 'build-html' done
});

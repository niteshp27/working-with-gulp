//npm install gulp-less --save-dev
//npm install gulp-concat --save-dev
//npm install merge-stream --save-dev
//npm install gulp-minify-css --save-dev
//npm install gulp-sass --save-dev

var gulp = require('gulp'); //The require statement tells Node to look into the node_modules folder for a package named gulp
var less = require('gulp-less');
var path = require('path');  //included in npm install gulp-less --save-dev setup
var concat = require('gulp-concat');
var merge = require('merge-stream');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');

var srcpaths = {
  src: './src/**/*',
  srccss: './src/css/**/*.css',
  srcless: './src/less/**/*.less',
  srcscss: './src/scss/**/*.scss',
  dist: './dist/',
  distcss: './dist/css/'
};

gulp.task('compiletocss', function(){
    console.log("starts");
    //single file -- gulp.src('./src/less/main.less')
    //multiple files -- gulp.src('./src/less/**/*.less')

    var lessStream = gulp.src(srcpaths.srcless)
    .pipe(
      less(
        { paths: [ path.join(__dirname, 'less', 'includes') ] }
      )
    )
    .pipe(concat('lessfiles.less'))

    var scssStream = gulp.src(srcpaths.srcscss)
    .pipe(
      sass()    //to do include paths by checking onlinbe docs as done in less also add @import inn scss files
    )
    .pipe(concat('scssfiles.scss'));

    var cssStream = gulp.src(srcpaths.srccss)
    .pipe(concat('cssfiles.css'));

    var mergedStream = merge(lessStream, scssStream, cssStream)
        .pipe(concat('final.min.css'))  //multipel to one
        //.pipe(minify())  //minify. you can disable to get unminified file
        .pipe( gulp.dest(srcpaths.distcss));

    console.log("ends");
});

gulp.task('default', ['compiletocss']);
//run command- gulp compiletocss

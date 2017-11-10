//npm install gulp-concat --save-dev
//npm install gulp-uglify --save-dev
//npm install gulp-rename --save-dev


var gulp = require('gulp'); //The require statement tells Node to look into the node_modules folder for a package named gulp

var path = require('path');  //included in npm install gulp-less --save-dev setup
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var srcpaths = {
  src: './src/**/*',
  srcjs: './src/js/**/*.js',
  dist: './dist',
  distjs: './dist/js'
};

gulp.task('compilejs', function(){
    console.log("start");

    gulp.src(srcpaths.srcjs)
	  .pipe(concat('script.js')) //concate multiple files as unminified file
    .pipe( gulp.dest(srcpaths.distjs))
    .pipe(concat('script.min.js'))
    .pipe(uglify()) //we uglify that file, and drop it into the same location as our previous file
    .pipe( gulp.dest(srcpaths.distjs));
    console.log("end");
});

//run command- gulp compilejs

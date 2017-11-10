//npm install gulp-less --save-dev
//npm install gulp-concat --save-dev
//npm install merge-stream --save-dev
//npm install gulp-minify-css --save-dev
//npm install gulp-sass --save-dev

//npm install gulp-uglify --save-dev
//npm install gulp-rename --save-dev

var gulp = require('gulp'); //The require statement tells Node to look into the node_modules folder for a package named gulp
var less = require('gulp-less');
var path = require('path');  //included in npm install gulp-less --save-dev setup
var concat = require('gulp-concat');
var merge = require('merge-stream');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var srcpaths = {
  src: './src/**/*',
  srccss: './src/css/**/*.css',
  srcjs: './src/js/**/*.js',
  srcless: './src/less/**/*.less',
  srcscss: './src/scss/**/*.scss',
  dist: './dist',
  distcss: './dist/css',
  distjs: './dist/js'
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
      sass().on('error', sass.logError)    //to do include paths by checking onlinbe docs as done in less also add @import inn scss files
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


gulp.task('bundlejs', function(){
    console.log("start");

    gulp.src(srcpaths.srcjs)
	  .pipe(concat('script.js')) //concate multiple files as unminified file
    .pipe( gulp.dest(srcpaths.distjs))
    .pipe(concat('script.min.js'))
    .pipe(uglify()) //we uglify that file, and drop it into the same location as our previous file
    .pipe( gulp.dest(srcpaths.distjs));
    console.log("end");
});

gulp.task('watch', function(){
  gulp.watch(srcpaths.srccss,['compiletocss']);
  gulp.watch(srcpaths.srcscss,['compiletocss']);
  gulp.watch(srcpaths.srcless,['compiletocss']);
  gulp.watch(srcpaths.srcjs,['bundlejs']);
});

gulp.task('default', ['compiletocss', 'bundlejs']); //will run with run command- gulp no need to specify task name
//gulp.task('bundlecssjs', ['compiletocss', 'bundlejs']); //will run with run command- gulp bundlecssjs

/*1.
run command- "gulp compiletocss" or //run command seperately- "gulp bundlejs"
or
run command- gulp bundlecssjs

2. first run "gulp default" command and then run "gulp watch" command
run command- "gulp watch"
*/

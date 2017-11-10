//npm install gulp-less --save-dev
//npm install gulp-concat --save-dev
//npm install merge-stream --save-dev
//npm install gulp-minify-css --save-dev
//npm install gulp-sass --save-dev

//npm install gulp-uglify --save-dev
//npm install gulp-rename --save-dev

//npm install browser-sync --save-dev

//npm install gulp-if --save-dev
//npm install gulp-beautify --save-dev

//npm install del --save-dev
//npm install run-sequence --save-dev

var gulp = require('gulp'); //The require statement tells Node to look into the node_modules folder for a package named gulp
var less = require('gulp-less');
var path = require('path');  //included in npm install gulp-less --save-dev setup
var concat = require('gulp-concat');
var merge = require('merge-stream');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var gulpif = require('gulp-if');
var beautify = require('gulp-beautify');

var del = require('del');
var runSequence  = require('run-sequence');

var paths = {
  basedist: 'dist',
  src: './src/**/*',
  srccss: './src/css/**/*.css',
  srcjs: './src/js/**/*.js',
  srcless: './src/less/**/*.less',
  srcscss: './src/scss/**/*.scss',
  srchtml: './src/*.html',
  srcfonts: './src/fonts/**/*',
  dist: 'dist/',  //check if '.dist/' required
  distcss: './dist/css/',
  distjs: './dist/js/',
  distfonts: './dist/fonts/',
  disthtml: 'dist/'     //no . for html
};
var chkprocess = {
  minify: false,
  uglify: true
};
var clean = {
  dist: './dist/*',
  image: '!./dist/images',
  subimage: './!dist/images/**/*'
};

var browserSync = require('browser-sync').create();

/*We need to create a browserSync task to enable Gulp to spin up a server using Browser Sync.
Since we're running a server, we need to let Browser Sync know where the root of the server should be. In our case, it's the `app` folder
*/
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: paths.basedist
    }
  })
});

gulp.task('compiletocss', function(){
    console.log("starts");
    //single file -- gulp.src('./src/less/main.less')
    //multiple files -- gulp.src('./src/less/**/*.less')

    var lessStream = gulp.src(paths.srcless)
    .pipe(
      less(
        { paths: [ path.join(__dirname, 'less', 'includes') ] }
      )
    )
    .pipe(concat('lessfiles.less'));

    var scssStream = gulp.src(paths.srcscss)
    .pipe(
      sass().on('error', sass.logError)    //to do include paths by checking onlinbe docs as done in less also add @import inn scss files
    )
    .pipe(concat('scssfiles.css'));

    var cssStream = gulp.src(paths.srccss)
    .pipe(concat('cssfiles.css'));

    var mergedStream = merge(lessStream, scssStream, cssStream)
        .pipe(concat('style.min.css'))  //multipel to one
        .pipe(gulpif(chkprocess.minify, minify())) //minify. you can disable to get unminified file
        .pipe( gulp.dest(paths.distcss))
        .pipe(
          browserSync.stream()
        );     //Browser Sync can inject new CSS styles (update the CSS) into the browser whenever the sass task is ran
    console.log("ends");
});


gulp.task('bundlejs', function(){
    console.log("start");

    gulp.src(paths.srcjs)
	//  .pipe(concat('script.js')) //concate multiple files as unminified file
//    .pipe( gulp.dest(paths.distjs))
    .pipe(concat('script.min.js'))
    .pipe(gulpif(chkprocess.uglify, uglify(), beautify())) //we uglify that file, and drop it into the same location as our previous file
    .pipe( gulp.dest(paths.distjs))
    .pipe(
      browserSync.stream()
    );
    console.log("end");
});

gulp.task('movehtml', function(){
  console.log("start html");
  gulp.src(paths.srchtml)
  .pipe( gulp.dest(paths.disthtml) )
  .pipe(
    browserSync.stream()
  );
  console.log("end html");
});

// Copying fonts
gulp.task('copyfonts', function() {
  console.log("start copying fonts");
  gulp.src(paths.srcfonts)
  .pipe( gulp.dest(paths.distfonts) )
  .pipe(
    browserSync.stream()
  );
  console.log("end copying fonts");
});


gulp.task('cleandist', function() {
  console.log("start cleaning dist");
  del.sync([clean.dist, clean.image, clean.subimage]);
  console.log("end cleaning dist");
});


//gulp.task('default', ['watch']); //uncomment after proj completed

gulp.task('default', function(callback){
  runSequence(
    'build', 'watch',
    callback
  )
});

gulp.task('build', function(callback){
  runSequence(
     'cleandist', ['compiletocss', 'bundlejs', 'movehtml','copyfonts'],
    callback
  )
});

gulp.task('watch', ['browserSync'], function(){

  gulp.watch(paths.srccss,['compiletocss']);
  gulp.watch(paths.srcless,['compiletocss']);
  gulp.watch(paths.srcscss,['compiletocss']);

  gulp.watch(paths.srcjs,['bundlejs']);
  gulp.watch(paths.srchtml, ['movehtml']);

  gulp.watch(paths.srcfonts, ['copyfonts']);

  gulp.watch(paths.distcss, browserSync.reload);
  gulp.watch(paths.distjs, browserSync.reload);
  gulp.watch(paths.disthtml, browserSync.reload);

  gulp.watch(paths.distfonts, browserSync.reload);

  gulp.watch(paths.disthtml).on('change', browserSync.reload);

});

/*
first run "gulp default" command and then run "gulp watch" command
run command- "gulp"
run command- "gulp watch"
*/

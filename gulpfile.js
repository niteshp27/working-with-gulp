//npm install gulp-less --save-dev


var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('compileless', function(){
    console.log("less css starts");
    //single file -- gulp.src('./src/less/main.less')
    //multiple files -- gulp.src('./src/less/**/*.less')
    gulp.src('./src/less/**/*.less')
    .pipe(
      less()
    )
    .pipe( gulp.dest('./dist/css/'));
    console.log("less css ends");
});

//run command- gulp compileless

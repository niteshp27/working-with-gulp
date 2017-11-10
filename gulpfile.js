//npm install gulp-less --save-dev
//npm install gulp-less --save-dev
//npm install gulp-concat --save-dev

var gulp = require('gulp'); //The require statement tells Node to look into the node_modules folder for a package named gulp
var less = require('gulp-less');
var path = require('path');  //included in npm install gulp-less --save-dev setup
var concat = require('gulp-concat');

gulp.task('compileless', function(){
    console.log("less css starts");
    //single file -- gulp.src('./src/less/main.less')
    //multiple files -- gulp.src('./src/less/**/*.less')
    gulp.src('./src/less/**/*.less')
    .pipe(
      less(
        {paths: [ path.join(__dirname, 'less', 'includes') ]}
      )
    )
    .pipe(concat('final.min.css'))
    .pipe( gulp.dest('./dist/css/'));
    console.log("less css ends");
});

//run command- gulp compileless

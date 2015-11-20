var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function(){
  return gulp.src('./less/**/*.less')
    .pipe(less()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
});

gulp.task('watch', ['less'], function (){
  gulp.watch('less/**/*.less', ['less']); 
});
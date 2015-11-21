var gulp = require('gulp');
var less = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./sass/**/*.scss')
    .pipe(less()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
});

gulp.task('watch', ['sass'], function (){
  gulp.watch('sass/**/*.scss', ['sass']); 
});
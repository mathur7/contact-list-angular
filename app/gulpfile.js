var gulp = require('gulp');
var less = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
  return gulp.src('./sass/**/*.scss')
    .pipe(less()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
  })
})

gulp.task('watch', ['browserSync','sass'], function (){
  gulp.watch('sass/**/*.scss', ['sass']); 
});
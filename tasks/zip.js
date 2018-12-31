import gulp from 'gulp';
import zip from 'gulp-zip';

gulp.task('zip', function() {
  gulp.src("dist/**/*")
  .pipe(zip('template.zip'))
  .pipe(gulp.dest(''));
});

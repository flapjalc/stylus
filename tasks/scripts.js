import gulp from 'gulp';
import concat from 'gulp-concat';
import jsmin from 'gulp-uglify';
import rename from 'gulp-rename';

gulp.task('scripts', function () {
  return gulp.src('src/modules/**/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest("dist/assets/scripts"))
    .pipe(jsmin())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("dist/assets/scripts"))
});

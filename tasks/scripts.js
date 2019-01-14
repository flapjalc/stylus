import gulp from 'gulp';
import concat from 'gulp-concat';
import jsmin from 'gulp-uglify';
import rename from 'gulp-rename';

gulp.task('scripts', function () {
  gulp.src('src/components/**/*.js')
    .pipe(concat('script.js'))
    .pipe(jsmin())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("dist/assets/scripts"))
  gulp.src('src/scripts/*.js')
    .pipe(gulp.dest("dist/assets/scripts"))
});

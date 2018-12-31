import gulp from 'gulp';
import del from 'del';

gulp.task("clean", function () {
  return del("dist");
});

gulp.task("copy", function () {
  gulp.src("src/resources/*.*")
  .pipe(gulp.dest("dist"))
  gulp.src(["src/resources/**", "!src/resources/*.*"])
  .pipe(gulp.dest("dist/assets"))
});

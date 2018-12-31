import gulp from 'gulp';
import run from 'run-sequence';

gulp.task("build", function(done) {
  run("clean", "copy", "html", "styles", "img", "webp", "scripts", done);
});

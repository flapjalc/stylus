import gulp from 'gulp';
import run from 'run-sequence';

const src = "app";

gulp.task("build", function(done) {
  run("clean", "copy", "html", "styles", "img", "webp", "sprites", "scripts", done);
});

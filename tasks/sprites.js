import gulp from 'gulp';
import svgstore from 'gulp-svgstore';
import svgmin from 'gulp-svgmin';
import rename from 'gulp-rename';

gulp.task("sprite", function () {
	return gulp.src("src/modules/**/icon-*.svg")
  .pipe(svgmin({
    js2svg: {
      pretty: true
    }
  }))
	.pipe(svgstore({
		inlineSvg: true
	}))
	.pipe(rename("sprite.svg"))
	.pipe(gulp.dest("dist/assets/images/sprites/"));
});
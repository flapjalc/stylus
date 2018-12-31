import gulp from 'gulp';
import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import flatten from 'gulp-flatten';

gulp.task("img", function() {
	return gulp.src("src/modules/**/*.{png,jpg,jpeg}")
		.pipe(imagemin([
		imagemin.optipng({optimizationLevel: 3}),
		imagemin.jpegtran({progressive: true}),
		]))
  .pipe(flatten())
	.pipe(gulp.dest("dist/assets/images"));
});

gulp.task("webp", function () {
	return gulp.src("src/modules/**/*.{png,jpg,jpeg}")
		.pipe(webp({quality: 80}))
    .pipe(flatten())
		.pipe(gulp.dest("dist/assets/images"));
});

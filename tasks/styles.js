import gulp from 'gulp';
import stylus from 'gulp-stylus';
import plumber from 'gulp-plumber';
import cssmin from 'gulp-csso';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import rename from 'gulp-rename';
import server from 'browser-sync';

gulp.task("styles", function() {
	gulp.src("src/styles/style.styl")
    .pipe(plumber())
		.pipe(stylus())
    .pipe(postcss([
      autoprefixer({
        browsers: ["last 4 versions"],
        grid: 'autoplace',
      }),
    ]))
    .pipe(gulp.dest("dist/assets/styles"))
    .pipe(cssmin())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("dist/assets/styles"))
    .pipe(server.stream());
});

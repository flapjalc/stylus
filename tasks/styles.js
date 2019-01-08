import gulp from 'gulp';
import stylus from 'gulp-stylus';
import plumber from 'gulp-plumber';
import cssmin from 'gulp-csso';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import server from 'browser-sync';

gulp.task("styles", function() {
	gulp.src("src/styles/style.styl")
    .pipe(plumber())
		.pipe(stylus())
    .pipe(autoprefixer({
        browsers: ["last 2 versions"]
    }))
    .pipe(gulp.dest("dist/assets/styles"))
    .pipe(cssmin())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("dist/assets/styles"))
    .pipe(server.stream());
});

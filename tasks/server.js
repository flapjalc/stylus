import gulp from 'gulp';
import run from 'run-sequence';
import server from 'browser-sync';

gulp.task("serve", function() {
  server.init({
    server: "dist/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch("src/{styles,components}/**/*.styl", ["styles"]);
  gulp.watch("src/{pages,components,layouts}/**/*.pug", () => run('html', server.reload));
	gulp.watch('src/{scripts,components}/**/*.js', () => run('scripts', server.reload));
	gulp.watch('src/resources/**/*', () => run('copy', server.reload));
	gulp.watch('src/components/**/*.{png,jpg,jpeg}', () => run('img', 'webp', server.reload));
});

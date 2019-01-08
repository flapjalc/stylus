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
  gulp.watch("src/{styles,modules}/**/*.styl", ["styles"]);
  gulp.watch("src/{pages,modules,layouts}/**/*.pug", () => run('html', server.reload));
	gulp.watch('src/resources/**/*', () => run('copy', server.reload));
	gulp.watch('src/modules/**/*.{png,jpg,jpeg}', () => run('img', 'webp', server.reload));
});

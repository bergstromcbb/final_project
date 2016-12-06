
var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch('./*.html').on('change', browserSync.reload);
});
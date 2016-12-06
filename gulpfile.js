
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch('./views/*.html').on('change', browserSync.reload);
});



// kyle was here
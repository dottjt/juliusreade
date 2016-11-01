const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cssnano = require('gulp-cssnano');
const cssinline = require('gulp-inline-css');


/* This is split into two types of tasks:

- Tasks for Wercker, which is inline CSS for final optimisation.
- Tasks for 

*/

/* This is to minify images, not for wercker */

 gulp.task('default', () =>
    gulp.src('thumbnails/*')
        .pipe(imagemin())
        .pipe(gulp.dest('static/img/blog/'))
);


/* This is for Wercker */

gulp.task('minifycss', () =>
    gulp.src('themes/reade/static/css/skeleton.css')
        .pipe(cssnano())
        .pipe(gulp.dest('themes/reade/static/css/final.css'))
);


gulp.task('inlinecss', () =>
    return gulp.src('./*.html')
        .pipe(cssinline())
        .pipe(gulp.dest('public/'));
);



gulp.task('watch', function() {
	gulp.watch('thumbnails/*', ['default']);
});

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cssnano = require('gulp-cssnano');


 gulp.task('default', () =>
    gulp.src('thumbnails/*')
        .pipe(imagemin())
        .pipe(gulp.dest('static/img/blog/'))
);

gulp.task('minifycss', () =>
    gulp.src('themes/reade/static/css/skeleton.css')
        .pipe(cssnano())
        .pipe(gulp.dest('themes/reade/static/css/final.css'))
);

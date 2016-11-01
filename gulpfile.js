const gulp = require('gulp');
const imagemin = require('gulp-imagemin');


 gulp.task('default', () =>
    gulp.src('thumbnails/*')
        .pipe(imagemin())
        .pipe(gulp.dest('static/img/blog/'))
);

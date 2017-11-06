var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('default', function () {
    runSequence('clean', 'css', 'html', 'fonts', 'images');
})

gulp.task('css', function () {
    return gulp.src('app/css/*.css')
        .pipe(
            sass().on('error', sass.logError)
        )
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        pipe(gulp.dest('dist/'));
});

gulp.task('fonts', function () {
    return gulp.src('app/fonts/*.*')
        pipe(gulp.dest('dist/fonts/'));
});

gulp.task('images', function () {
    return gulp.src('app/images/*.*')
        pipe(gulp.dest('dist/images/'));
});

gulp.task('clean', function () {
    return gulp.src('dist/')
        .pipe(clean());
})
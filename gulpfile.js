var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');

gulp.task('default', function () {
    runSequence('clean', 'css', 'html', 'fonts', 'images');
})

gulp.task('css', function () {
console.log("=========== CSS start ===========");
    return gulp.src('app/css/*.css')
        .pipe(
            sass().on('error', sass.logError)
        )
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('html', function () {
console.log("=========== HTML start ===========");
return gulp.src('app/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('fonts', function () {
console.log("=========== Font start ===========");
return gulp.src('app/fonts/*.*')
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('images', function () {
console.log("=========== Image start ===========");
return gulp.src('app/images/*.*')
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('clean', function () {
console.log("=========== Clean start ===========");
return gulp.src('dist/')
        .pipe(clean());
});

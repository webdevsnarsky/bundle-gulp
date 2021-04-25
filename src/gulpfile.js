'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let csso = require('gulp-csso');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(csso())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./src/assets/css'))
    // .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    // browserSync.init({
    //     server: "./src"
    // });

    gulp.watch('./src/assets/scss/*.scss', gulp.series('sass'));
    // gulp.watch("app/*.html").on('change', browserSync.reload);
});


gulp.task('start', gulp.series('sass', 'serve'));
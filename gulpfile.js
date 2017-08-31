//SETUP
var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

//TASKS
gulp.task('sass', function () {
    return gulp.src('src/styles/main.sass')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('app/assets/styles'))
        .pipe(browserSync.stream());
});

gulp.task('pug', ['sass'], function buildHTML() {
    return gulp.src('src/templates/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/templates'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['pug'], function () {
    browserSync.init({
        server: {
            baseDir: "app"
        },
        port: 8080,
        logPrefix: "ngPug",
        browser: "opera"
    });
    gulp.watch("src/**/*.*", ['pug'])
    gulp.watch("app/*.*")
        .on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
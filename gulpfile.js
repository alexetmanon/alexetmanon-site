var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

var styles = {
    sources: ['./assets/scss/**/*.scss'],
    dest: './assets/css'
};

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src(styles.sources)
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(styles.dest))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch(styles.sources, ['sass']);
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './'
    });

    gulp.watch(styles.sources, ['sass']);
    gulp.watch(['./**/*.html', './app/**/*.js']).on('change', browserSync.reload);
});

gulp.task('build', ['sass']);

gulp.task('default', ['serve']);
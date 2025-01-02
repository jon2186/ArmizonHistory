const gulp = require('gulp');
const less = require('gulp-less');
const watch = require('gulp-watch');
const path = require('path');

function compileLess() {
    return gulp.src('src/styles/style.less')
        .pipe(less({
            paths: [
                path.join(__dirname, 'src', 'styles', 'global'),
                path.join(__dirname, 'src', 'styles', 'blocks') // Добавили путь к папке blocks
            ]
        }).on('error', function (err) {
            console.error(err.message);
            this.emit('end');
        }))
        .pipe(gulp.dest('dist/css/'));
}

gulp.task('less', compileLess);

gulp.task('watch', function () {
    gulp.watch('src/styles/**/*.less', gulp.parallel('less')); // Следим за всеми .less файлами в src/styles
});

gulp.task('default', gulp.parallel('watch'));
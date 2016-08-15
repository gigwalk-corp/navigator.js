import gulp from 'gulp';
import rename from 'gulp-rename';

gulp.task('flow', () =>
    gulp.src('./src/**/*.js', {
        base: './src'
    })
        .pipe(rename({
            extname: '.js.flow'
        }))
        .pipe(gulp.dest('./lib'))
);


gulp.task('default', ['flow']);

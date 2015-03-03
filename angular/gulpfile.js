var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass({
            includePaths: [
<<<<<<< HEAD
            'bower_components/bootstrap-sass/assets/stylesheets/'
          ],
=======
          'bower_components/bootstrap-sass/assets/stylesheets/'
        ],
>>>>>>> aaac49d9e60870433e099a5db6cca3f7be5e8a01
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(reload({
            stream: true
        }));
});


gulp.task('serve', ['sass'], function () {
    browserSync({
        server: {
            baseDir: "./src",
            directory: true,
            routes: {
                "/bower_components": "bower_components"
            }
        }
    });

    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch("src/*.html").on('change', reload);

});

gulp.task('default', ['serve']);
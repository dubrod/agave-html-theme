import gulp from 'gulp'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import sourcemaps from 'gulp-sourcemaps'
import sass from 'gulp-dart-sass'

const paths = {
  scripts: ['./js/*.js'],
  sass: ['./scss/**/*.scss']
};

const compileScript = () => {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('agave.min.js'))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('build/js'));
}

const compileSass = () => {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
}


const watchScript = () => {
  gulp.watch(paths.scripts, gulp.parallel(compileScript));
  gulp.watch(paths.sass, gulp.parallel(compileSass));
}

const watch = gulp.parallel(watchScript)
watch.description = 'watch for changes to all source'


const defaultTasks = gulp.parallel(watch)

export {
  compileScript,
  compileSass,
  watch,
  watchScript,
}

export default defaultTasks

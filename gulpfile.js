const {src, dest, watch , series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();
const tildeImporter = require('node-sass-tilde-importer');

//Sass
function scssTask(){
  return src('src/scss/style.scss', {sourcemap: true})
    .pipe(sass({importer: tildeImporter}))
    .pipe(postcss([cssnano()]))
    .pipe(dest('assets', {sourcemap: '.'}))
}


//Browser Sync Serve
function browseryncServe(cb){
  browserSync.init({
    server: {
      baseDir: '.'
    }
  });
  cb();
}

//Browser Sync Reload
function browseryncReload(cb){
  browserSync.reload();
  cb();
}

//Watch
function watchTask(cb){
  watch('*.html', browseryncReload);
  watch(['src/scss/**/*.scss'], series(scssTask, browseryncReload));
}

//Default
exports.default = series(
  scssTask,
  browseryncServe,
  watchTask
)
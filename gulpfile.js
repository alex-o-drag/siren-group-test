const {src, dest, watch , series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();
const tildeImporter = require('node-sass-tilde-importer');
const purgecss = require('gulp-purgecss')

//Sass
function scssTask(){
  return src('src/scss/style.scss', {sourcemaps: true})
    .pipe(sass({importer: tildeImporter}))
    .pipe(postcss([cssnano()]))
    .pipe(dest('assets'), {sourcemaps: '.'});
}

//JS
function jsTask(){
  return src('src/js/script.js', {sourcemaps: true})
    .pipe(terser())
    .pipe(dest('assets'), {sourcemaps: '.'});
}

//BrowserSync Serve
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
  watch(['src/scss/**/*.scss', 'src/js/script.js'], series(scssTask, jsTask, browseryncReload));
}

//Purge
function purge(){
  return src('assets/style.css')
      .pipe(purgecss({
          content: ['index.html']
      }))
      .pipe(dest('assets'))
}


//Tasks
exports.default = series(
  scssTask,
  jsTask,
  browseryncServe,
  watchTask
)

exports.purge = purge;
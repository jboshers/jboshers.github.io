var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    notify      = require('gulp-notify'),
    reload      = browserSync.reload,
    postcss     = require('gulp-postcss'),
    bs          = require("browser-sync").create(),
    Hexo        = require('hexo'),
    hexo        = new Hexo(process.cwd(), {}),
    clean       = require('gulp-clean'),
    sourcemaps = require('gulp-sourcemaps');

var src = {
    css:  './source/css',
    ejs: 'layout'
},
watchFiles = [
    './css/**/*.css',
    './layout/**/*.jade'
];


// Static Server + watching scss/html files
gulp.task('serve', ['css:watch'], function() {

    hexo.init().then(function(){
      return hexo.call('generate', {watch: true});
    }).catch(function(err){
      console.log(err);
    });

    // init starts the server
    bs.init(watchFiles, {
        server: {
            baseDir: "../../public"
        }
    });

});



gulp.task('build', ['clean', 'copy']);

gulp.task('copy', function (cb) {
    gulp.src(['../../public/**/*'])
        .pipe(gulp.dest('public'));

});

gulp.task('clean', function () {
    return gulp.src('public', {read: false})
            .pipe(clean({force: true}))
});


gulp.task('postcss', function () {
    var processors = [
      require('postcss-import')({ from: './source/css' }),
      require('postcss-url'),
      require('postcss-cssnext'),
      require('postcss-browser-reporter'),
      require('postcss-reporter')
    ];
    return gulp.src('./source/css/varg.css')
        .pipe( sourcemaps.init() )
        .pipe(postcss(processors))
        .pipe( sourcemaps.write('.') )
        .pipe(gulp.dest('../../source/css/'))
        .pipe(reload({stream: true}));
});

gulp.task('css:watch', function () {
  gulp.watch('./source/css/**/*.css', ['postcss']);
});

gulp.task('default', ['serve']);

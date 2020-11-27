let preprocessor = 'sass';

const { src, dest, parallel, series, watch } = require('gulp');
const browserSync  = require('browser-sync').create();
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify-es').default;
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss     = require('gulp-clean-css');
const imagemin     = require('gulp-imagemin');
const newer        = require('gulp-newer');
const del          = require('del');

function browsersync() {
    browserSync.init({
       server: { baseDir: 'app/' },
       notify: false,
       online: true
    })
}

function scripts() {
    return src([
        // jQuery v3.5.1
        'node_modules/jquery/dist/jquery.min.js',
        // Popper
        'node_modules/popper.js/dist/umd/popper.min.js',
        // Bootstrap v4.5.2
        'node_modules/bootstrap/js/dist/util.js',
        // 'node_modules/bootstrap/js/dist/alert.js',
        'node_modules/bootstrap/js/dist/button.js',
        'node_modules/bootstrap/js/dist/carousel.js',
        'node_modules/bootstrap/js/dist/collapse.js',
        'node_modules/bootstrap/js/dist/dropdown.js',
        'node_modules/bootstrap/js/dist/modal.js',
        // 'node_modules/bootstrap/js/dist/tooltip.js',
        // 'node_modules/bootstrap/js/dist/popover.js',
        // 'node_modules/bootstrap/js/dist/scrollspy.js',
        // 'node_modules/bootstrap/js/dist/tab.js',
        // 'node_modules/bootstrap/js/dist/toast.js',
        // Material Design for Bootstrap 4 Version: MDB FREE 4.19.1
        // 'node_modules/mdbootstrap/src/js/vendor/free/jquery.easing.js',
        // 'node_modules/mdbootstrap/src/js/vendor/free/bs-custom-file-input.js',
        // 'node_modules/mdbootstrap/src/js/vendor/free/velocity.js',
        // 'node_modules/mdbootstrap/src/js/vendor/free/chart.js',
        // 'node_modules/mdbootstrap/src/js/vendor/free/chartjs-datalabels.js',
        // 'node_modules/mdbootstrap/src/js/vendor/free/enhanced-modals.js',
        // 'node_modules/mdbootstrap/src/js/vendor/free/waves.js',
        // 'node_modules/mdbootstrap/src/js/free/forms-free.js',
        // 'node_modules/mdbootstrap/src/js/free/scrolling-navbar.js',
        // 'node_modules/mdbootstrap/src/js/free/treeview.js',
        // WOW
        'node_modules/wowjs/dist/wow.min.js',
        // FancyBox
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
        // html5shiv
        'node_modules/html5shiv/dist/html5shiv.min.js',
        'node_modules/html5shiv/dist/html5shiv-printshiv.min.js',
        'node_modules/respond.js/dest/respond.min.js',
        // jqBootstrapValidation
        'node_modules/bootstrap-validator/dist/validator.min.js',
        // jquery.maskedinput
        'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
        // FontAwesome
        'node_modules/@fortawesome/fontawesome-free/js/brands.min.js',
        // Owl Carousel 2
        'node_modules/owl.carousel/dist/owl.carousel.min.js',
        // Slick-Carousel
        // 'node_modules/slick-carousel/slick/slick.min.js',
        // Waypoints
        'node_modules/waypoints/src/waypoint.js',
        // Main JavaScript
        'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js/'))
    .pipe(browserSync.stream())
}

function styles() {
    return src('app/' + preprocessor + '/main.' + preprocessor + '')
    .pipe(eval(preprocessor)())
    .pipe(concat('main.min.css'))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(cleancss(( { level: { 1: { specialComments: 0 } }/*, format: 'beautify' */} )))
    .pipe(dest('app/css/'))
    .pipe(browserSync.stream())
}


function images() {
    return src('app/img/src/**/*')
    .pipe(newer('app/img/dest/'))
    .pipe(imagemin())
    .pipe(dest('app/img/dest/'))
}

function cleanimg() {
    return del('app/img/dest/**/*', { force: true })
}

function cleandist() {
    return del('dist/**/*', { force: true })
}


function buildcopy() {
    return src([
    'app/css/**/*.min.css',
    'app/js/**/*.js',
    'app/js/**/*.min.js',
    'app/img/dest/**/*',
    'app/**/*.html',
    ], { base: 'app' })
    .pipe(dest('dist'))
}


function startwatch() {
    watch('app/**/' + preprocessor + '/**/*', styles);
    watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
    watch('app/**/*.html').on('change', browserSync.reload);
    watch('app/img/src/**/*', images);
}

exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.styles      = styles;
exports.images      = images;
exports.cleanimg    = cleanimg;
exports.build       = series(cleandist, styles, scripts, images, buildcopy);

exports.default     = parallel(styles, scripts, browsersync, startwatch);
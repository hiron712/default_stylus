const gulp = require('gulp'); //タスクランナー

const stylus = require('gulp-stylus'); //Stylus変換用

const postcss = require("gulp-postcss");
const autoprefixer = require('autoprefixer');
const cssSorter = require('css-declaration-sorter');
const mqpacker = require("css-mqpacker");


const plugin = [
    autoprefixer({
        cascade: true
    }),
    cssSorter({
        order: 'smacss'
    }),
    mqpacker()
];

/*-------------------------------------------------
--------------------------------------------------*/
gulp.task('stylus', function() {
    return gulp.src(['htdocs/assets/stylus/**/*.styl','!htdocs/assets/stylus/**/_*.styl'])
        .pipe(stylus({
            compress: true
        }))
        .pipe(postcss(plugin))
        .pipe(gulp.dest('htdocs/assets/css/'));
});

/*-------------------------------------------------
--------------------------------------------------*/
gulp.task('watch', function(){
    gulp.watch( 'htdocs/assets/stylus/**/*.styl', gulp.task('stylus'));
});

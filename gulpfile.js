"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const server = require("browser-sync").create();

const less = require("gulp-less");
const sourcemap = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require('gulp-uglify-es').default;

const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const webp = require("gulp-webp");

const pug = require("gulp-pug");
const formatHTML = require('gulp-format-html')

// gulp.task("formatHTML", function() {
//   return gulp.src('source/*.html')
//     .pipe(formatHTML())
//     .pipe(gulp.dest("source/"))
// });

// gulp.task("pug", function() {
//   return gulp.src("source/pug/pages/**/*.pug")
//     .pipe(plumber())
//     .pipe(pug({
//       pretty: true
//     }))
//     .pipe(formatHTML())
//     .pipe(gulp.dest("source/"))
//     .pipe(server.stream());
// });

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    // .pipe(sourcemap.init())             //*min
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    // .pipe(gulp.dest("source/css"))      //*source
    // .pipe(cleanCSS({level: 2}))         //*min
    // .pipe(rename("style.min.css"))      //*min
    // .pipe(sourcemap.write("."))         //*min
    .pipe(gulp.dest("source/css"))      //*source
    // .pipe(gulp.dest("build/css"))       //*build
    .pipe(server.stream());
});

gulp.task("js", function () {
  return gulp.src("source/js/main.js")
    .pipe(uglify({
      toplevel: true
    }))
    // .pipe(gulp.dest('./build/js'))
    .pipe(server.stream());
});

gulp.task("img", function () {
  return gulp.src("source/img/z/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/z/*")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img/webp"));
});

gulp.task("sprite", function () {
  return gulp.src("source/img/**/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("source/img"));
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  // gulp.watch("source/pug/**/*.pug", gulp.series("pug"));
  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/js/**/*.js", gulp.series("js"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("default", gulp.series("css", "server"));

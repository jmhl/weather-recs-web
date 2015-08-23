'use strict';

var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js')
var webpackDevServer = require('webpack-dev-server');
var sass = require('gulp-sass');
// var imagemin = require('gulp-imagemin');

gulp.task('webpack', function() {
  webpack(webpackConfig)
    .pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
  gulp.src('./src/scss/app.scss')
    .pipe(gulp.dest('./build'));
});

gulp.task('img', function() {
  gulp.src('./src/img/**/*')
    // .pipe(imagemin({
    //   progressive: true,
    // }))
    .pipe(gulp.dest('build/img'));
});

gulp.task('default', ['webpack', 'sass', 'img']);

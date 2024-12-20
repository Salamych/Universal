import gulp from 'gulp';
import {path} from '../config/path.js';
import {app} from '../config/app.js';

import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import size from 'gulp-size';
import plumber from 'gulp-plumber';
import webpHtml from 'gulp-webp-html';
import rename from 'gulp-rename';


const html = () => {
  return gulp.src(path.html.src)
    .pipe(plumber())
    .pipe(fileInclude())
    //.pipe(gulp.dest(path.html.dest))
    .pipe(webpHtml())
    .pipe(size({title: "HTML до сжатия"}))
    .pipe(htmlmin(app.htmlmin))
    //.pipe(rename({suffix: '.min'}))
    .pipe(size({title: "HTML после сжатия"}))
    .pipe(gulp.dest(path.html.dest))
}

export {html}
import gulp from 'gulp';
import {path} from '../config/path.js';
import {app} from '../config/app.js';

import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import fonter from 'gulp-fonter-unx';
import ttf2woff2 from 'gulp-ttf2woff2';




const font = () => {
  return gulp.src(path.font.src, {encoding: false})
    .pipe(plumber())
    .pipe(newer(path.font.dest))
    .pipe(fonter(app.fonter))
    .pipe(gulp.dest(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.font.dest))
}

export {font}
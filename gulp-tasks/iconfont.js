"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import iconfont from "gulp-iconfont";
import iconfontcss from "gulp-iconfont-css";
import debug from "gulp-debug";

gulp.task("iconfont", () => {
    return gulp.src(paths.iconfonts.src)
        .pipe(iconfontcss({
            fontName: "icons",
            targetPath: "../../src/styles/base/_icons.scss",
        }))
        .pipe(iconfont({
            fontName: "icons",
            prependUnicode: true,
            formats: ["woff", "woff2", "eot", "ttf"],
            normalize: true,
            fontHeight: 1001
        }))
        .pipe(gulp.dest(paths.iconfonts.dist))
        .pipe(debug({
            "title": "Icon fonts"
        }));
});
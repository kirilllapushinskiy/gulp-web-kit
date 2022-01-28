const webpack = require("webpack-stream")


const js = () => {
    return $.gulp.src($.path.js.src, { sourcemaps: $.settings.dev })
    .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
            title: "| js task |",
            message: error.message
        }))
    }))
    //.pipe(dest(path.js.dest, { sourcemaps: true }))
    .pipe($.gp.size({ title: "main.js" }))
    .pipe($.gp.babel())
    .pipe(webpack($.settings.webpack))
    .pipe($.gp.size({ title: "main.min.js" }))
    .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.settings.dev }))
    .pipe($.browserSync.stream())
}

module.exports = js

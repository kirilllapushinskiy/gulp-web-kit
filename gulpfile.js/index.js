global.$ = {
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    browserSync: require("browser-sync").create(),

    path: require("./config/path.js"),
    settings: require("./config/settings.js")
}

// Tasks
const requireDir = require("require-dir")
const task = requireDir("./tasks", { recurse: true })


const watcher = () => {
    $.gulp.watch($.path.html.watch, task.html)
    /* watch($.path.css.watch, task.css) */
    $.gulp.watch($.path.scss.watch, task.scss)
    $.gulp.watch($.path.js.watch, task.js)
    $.gulp.watch($.path.img.watch, task.img)
    $.gulp.watch($.path.font.watch, task.img)
}

exports.css = task.css
exports.html = task.html
exports.clear = task.clear
exports.scss = task.scss
exports.js = task.js
exports.img = task.img
exports.purge = task.purge
exports.font = task.font
exports.serv = $.gulp.parallel(watcher, task.syncserver)

exports.repack = $.gulp.series(
    task.clear,
    $.gulp.parallel(task.html, task.scss /* task.css */, task.js, task.img, task.font)
);

const build = $.gulp.series(
    task.purge,
    $.gulp.parallel(task.html, task.scss /* task.css */, task.js, task.img, task.font),
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, task.syncserver)
); 

exports.default = $.settings.dev ? dev : build
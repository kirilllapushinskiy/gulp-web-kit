const html = () => {
    return $.gulp.src($.path.html.src)
    .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
            title: "| html task |",
            message: error.message
        }))
    }))
    .pipe($.gp.webpHtml())
    .pipe($.gp.if($.settings.production, $.gp.htmlmin($.settings.htmlmin)))
    .pipe($.gulp.dest($.path.html.dest))
    .pipe($.browserSync.stream())
    // callback()
}

module.exports = html
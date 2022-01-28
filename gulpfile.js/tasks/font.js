const font = () => {
    return $.gulp.src($.path.font.src)
    .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
            title: "| font task |",
            message: error.message
        }))
    }))
    .pipe($.gp.newer($.path.font.dest))
    .pipe($.gp.fonterUnx($.settings.fonter))
    .pipe($.gulp.dest($.path.font.dest))
    .pipe($.gp.if($.settings.production, $.gp.ttf2woff2()))
    .pipe($.gp.if($.settings.production, $.gulp.dest($.path.font.dest)))
    .pipe($.browserSync.stream())
}

module.exports = font

const css = () => {
    return $.gulp.src($.path.css.src, { sourcemaps: $.settings.dev })
    .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
            title: "| css task |",
            message: error.message
        }))
    }))
    .pipe($.gp.concat("main.css"))
    .pipe($.gp.cssimport())
    .pipe($.gp.webpCss())
    .pipe($.gp.autoprefixer())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.settings.dev }))
    .pipe($.gp.if($.settings.production, $.gp.rename({suffix: ".min"})))
    .pipe($.gp.size({ title: "main.css" }))
    .pipe($.gp.if($.settings.production, $.gp.shorthand()))
    .pipe($.gp.if($.settings.production, $.gp.csso()))
    .pipe($.gp.if($.settings.production, $.gp.size({ title: "main.min.css" })))
    .pipe($.gp.if($.settings.production, $.gulp.dest($.path.css.dest, { sourcemaps: $.settings.dev })))
    .pipe($.browserSync.stream())
}

module.exports = css

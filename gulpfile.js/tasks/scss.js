const sass = require('gulp-sass')(require('sass'));


const scss = () => {
    return $.gulp.src($.path.scss.src, { sourcemaps: true })
    .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
            title: "| scss task |",
            message: error.message
        }))
    }))
    .pipe($.gp.sassGlob())
    .pipe(sass())
    .pipe($.gp.webpCss())
    .pipe($.gp.autoprefixer())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gp.size({ title: "main.css" }))
    .pipe($.gp.if($.settings.production, $.gp.shorthand()))
    .pipe($.gp.if($.settings.production, $.gp.csso()))
    .pipe($.gp.size({ title: "main.min.css" }))
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.settings.dev }))
    .pipe($.browserSync.stream())
}

module.exports = scss

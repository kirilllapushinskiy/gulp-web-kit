const del = require("del")

const clear = () => {
    return del([$.path.html.dest + "/*.*", $.path.html.dest + "/{js,css,font}/"])
}

const purge = () => {
    return del($.path.html.dest)
}

module.exports = clear

const del = require("del")

const path = require("../config/path.js")

const purge = () => {
    return del(path.html.dest)
}

module.exports = purge

const path = require("./path.js")

const production = process.argv.includes("--production")
const dev = !production

module.exports = {
    production: production,
    dev: dev,

    htmlmin: {
        collapseWhitespace: production
    },
    browser: {
        server: {
            baseDir: path.root
        }
    },
    webpack: {
        mode: dev ? "development" : "production"
    },
    imagemin: {
        verbose: true
    },
    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    }
}
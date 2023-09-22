const siteRouter = require('./site')
const trackRouter = require('./track')


function route(app) {
    app.get("/track", trackRouter)
    app.get("/", siteRouter)
}

module.exports = route
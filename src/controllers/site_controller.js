
class SiteController {
    //localhost:3000/
    index(req, res) {
        res.render('home')
    }
}

module.exports = new SiteController
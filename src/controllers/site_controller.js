class SiteController {
    //localhost:3000/
    index(req, res) {
     res.send("hahaha")
    }
}

module.exports = new SiteController
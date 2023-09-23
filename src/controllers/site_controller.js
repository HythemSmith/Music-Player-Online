const path = require('path');



class SiteController {
    //localhost:3000/
    index(req, res) {
        res.sendFile('D:\\Desktop\\Web\\src\\pages\\index.html')
    }
}

module.exports = new SiteController
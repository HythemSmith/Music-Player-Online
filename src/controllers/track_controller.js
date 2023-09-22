const track_info = require('../database/model/track')

class TrackController {
    // []track/:slug
    async show(req, res){
        // await track_info.find({slug: req.params.slug})
        // .then(track => {
        //     res.json(track)
        // })
        // .catch(error => {
        //     res.send("error")
        //     console.log("Can't find that")
        // })
        res.send('hahah')
    }
    // []track/
    index(req, res){
        res.send('clmmm')
    }
}

module.exports = new TrackController
class apiController{

    // [GET] /api/:date
    dateInput(req, res, next){
        let unix;
        let date;
        let slug = Date.parse(req.params.slug);
        if (isNaN(slug)) {
            if (/\D/.test(req.params.slug)){
                res.json({"error": "Invalid Date"})
            } else {
                unix = req.params.slug;
                date = new Date(parseInt(unix));
            }
        } else {
            unix = Date.parse(req.params.slug);
            date = new Date(req.params.slug);
        }
        
        res.json({
            'unix': unix,
            'utc': date.toUTCString()
        })
    }

    currentTime(req, res){
        let current = Date.now()
        res.json({
            unix: current,
            utc: new Date(parseInt(current)).toUTCString()
        })
    }

    greeting (req, res) {
        res.json({greeting: 'hello API'});
    }

}


module.exports = new apiController();
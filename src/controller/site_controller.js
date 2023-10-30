const path = require('path')
class siteController {
    renderHome(req, res){
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'views', 'index.html'))  
    }
}

module.exports = new siteController();
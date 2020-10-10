const Blog = require('../models/Blog');
const { listToObj } = require('../../tools/mongo');
class SiteController {
    index(req,res,next){
        Blog.find({})
        .then(
            v=>{
                // res.render('home',{v:listToObj(v)})
                res.send(v);
            }
            )
        .catch(next)
        // res.render('home');
    }
    search(req,res){
        res.render('search')
    }
}
module.exports = new SiteController;
const Blog = require('../models/Blog');
const { ItemtoObj } = require('../../tools/mongo');
class NewController {
    index(req,res){
        res.render('news');
    }
    detail(req,res,next){
       Blog.findOne({ slug: req.params.slug })
       .then((v)=>{
        // res.render('detail',{v:ItemtoObj(v)});
        res.send(v);
       }
       )
       .catch(next)
    }
    create(req,res,next){
        res.render('create');
    }
    insert(req,res,next){
        const create = new Blog(req.body);
        create.save(function (err) {
  if (err) return handleError(err);
  // saved!
  res.redirect('/');
});
    }
}
module.exports = new NewController;
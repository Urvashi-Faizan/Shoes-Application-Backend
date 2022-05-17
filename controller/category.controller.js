

const CategoryModel = require('../model/category.model');
exports.AddCategory = (request,response)=>{
    const catname = request.body.catname;
    const catimage = request.file.filename;
    
    CategoryModel.create({catimage:catimage,catname:catname}).then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({err:"invalide"});
    })
}
exports.getCategory = (request, response) => {
    CategoryModel.find().
        then(results => {
            console.log(results)
            return response.status(200).json(results);
        })
        .catch(err => {
            return response.status(500).json({ message: 'Sever Error' });
        });
}
exports.updateCategory=(request,response) =>{
    CategoryModel.updateOne({_id:request.body.catid},{
        $set:{
            catname: request.body.catname,
            catimage:request.file.filename
        }
    }).then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        return response.status(500).json({err:'error '})
    })
}
exports.deleteCategory=(request,response)=>{
    CategoryModel.deleteOne({_id:request.body.catid}).then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        return response.status(500).json({err:'error '})
    })
}

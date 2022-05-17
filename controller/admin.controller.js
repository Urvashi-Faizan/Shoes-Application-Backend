
const AdminModel = require('../model/admin.model');
exports.signup=(request,response)=>{
    const {name ,email,password } = request.body;
    const adminimage = request.file.filename;
    AdminModel.create({name:name,email:email,adminimage:adminimage,password:password}).then(result=>{
        return response.status(201).json(result)
    }).catch(err=>{
        console.log(err)
        return response.status(500).json({err:'opss! something want wrong'})
    })
}
exports.signin = (request, response) => {
    const { email, password } = request.body;
    AdminModel.findOne({ email: email, password: password }).then(result => {
        console.log(result);
        return response.status(201).json(result);
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ err: "invalied" })
    })

}
exports.updateAccount =(request,response)=>{
     AdminModel.updateOne({_id:request.body.aid},{
        $set:{
            name:request.body.name,
            email:request.body.email,
            password:request.body.password,
            image:request.file.filename
        }
    }).then(result=>{
        return response.status(201).json(result)
    }).catch(err=>{
        return response.status(500).json({err:'invalid'})
    })
}
exports.deleteAccount=(request,response)=>{
    AdminModel.deleteOne({_id:request.body.aid}).then(result=>{
        return response.status(201).json(result)
    }).catch(err=>{
        return response.status(500).json({err:'invalid'})
    })
}
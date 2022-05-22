
const { response } = require('express');
const { request } = require('express');
const userModel = require('../model/user.model');
const UserModel = require('../model/user.model');
exports.Signup = (request, response) => {
    let name = request.body.name;
    let email = request.body.email;
    let image = "http://localhost:3000/images/"+request.file.filename;
    let password = request.body.password;
    UserModel.create({ name: name, email: email, image: image, password: password }).then(result => {
        console.log(result);
        return response.status(201).json(result);
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ err: "invalied" })
    })
}
// exports.Signin = (request, response) => {
//     const { email, password } = request.body;
//     UserModel.findOne({ email: email, password: password }).then(result => {
//         console.log(result);
//         return response.status(201).json(result);
//     }).catch(err => {
//         console.log(err);
//         return response.status(500).json({ err: "invalied" })
//     })
// }



exports.SignIn =(request,response)=>{

    let b= request.body.email;
    let c = request.body.password;
    UserModel.findOne({email:b,password:c}).then(result=>
        {
            if(result){
                return response.status(201).json(result)
            }
            else
            {
                return response.status(500).json({error:'not gatting result'});
            }
        }).catch(err => {
                    console.log(err);
                    return response.status(500).json({ error: 'Not Getting result' });
                })
}
exports.UpdateACC = (request, response) => {
    UserModel.updateOne( { _id: request.body.sid}, {
            $set: {
                password: request.body.password,
                name: request.body.name, //[req.body._____]postman me jo rhata ha 
                email: request.body.email,
                 image: "http://localhost:3000/images/"+request.body.image,

            }
        }).then(result => {
            console.log(result);
            return response.status(201).json(result);
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ err: "invalied" })
        })
}

exports.DeleteAccount=(request,response)=>{
    UserModel.deleteOne({ _id: request.body.fid }).then(result => {
        return response.status(201).json(result)
    }).catch(err => {
        return response.status(500).json({ err: "invalid" });
    })
}


const { response } = require('express');
const { request } = require('express');
const UserModel = require('../model/user.model');
exports.Signup = (request, response) => {
    let name = request.body.name;
    let email = request.body.email;
    let image = request.file.filename;
    let password = request.body.password;
    UserModel.create({ name: name, email: email, image: image, password: password }).then(result => {
        console.log(result);
        return response.status(201).json(result);
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ err: "invalied" })
    })
}
exports.Signin = (request, response) => {
    const { email, password } = request.body;
    UserModel.findOne({ email: email, password: password }).then(result => {
        console.log(result);
        return response.status(201).json(result);
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ err: "invalied" })
    })

}
exports.UpdateACC = (request, response) => {
    UserModel.updateOne( { _id: request.body.sid}, {
            $set: {
                password: request.body.password,
                name: request.body.name, //[req.body._____]postman me jo rhata ha 
                email: request.body.email,
                 image: request.body.image,
                  password:request.body.password

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
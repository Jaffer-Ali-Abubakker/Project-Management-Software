const User = require("../models/user")
const bcrypt = require("bcrypt");   


module.exports ={
    doRegister : (userData) =>{
        return new Promise(async(res,rej)=>{
           userData.password = await bcrypt.hash(userData.password, 10)
           .then(hash =>{
            const user = new User({
                FullName: userData.FullName,
                email: userData.email,
                mobile: userData.mobile,
                password: hash
              });
              user.save()
              .then(result =>{
                 res(result)
              })
              .catch(err =>{
                 res(err)
              });
          });
        })
    },
    emailcheck: (email,mobile) =>{
        return new Promise(async (res, rej) =>{
            let user =  User.findOne({ $or: [{ Email: email }, { mobile: mobile }] });
            res(user)
        })
    }
}


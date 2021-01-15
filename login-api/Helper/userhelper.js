var db=require('../config/connection')
const { response } = require('express')
var objectId = require('mongodb').ObjectID

module.exports = {
    addUser: (details) => {
        return new Promise(async (resolve, reject) => {

            data = await db.get().collection("user_details").findOne({ mail: details.mail })
            if (data) {
                resolve({ status: false })
            }
            else {

                db.get().collection("user_details").insertOne(details).then((data) => {
                    resolve({ status: true })
                })
                    .catch((err) => {
                        // console.log(err)
                        reject(err)
                    })
            }

        })
    },
    getUser:(details)=>{
        return new Promise(async(resolve,reject)=>{
            data=await db.get().collection("user_details").aggregate(
                [
                    {
                        $match:
                        {
                            $and:
                                [
                                    { mail: details.username }, 
                                    { password: details.password }
                                ]
                        }
                    }
                ]
            ).toArray()
            if(data[0]){
                resolve({status:true})
            }else{
                resolve({status:false})
            }
        })
    }
}
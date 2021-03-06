/*created by Pranav Gupta (pg07codes) on 10-08-2018 */

const item=require("../db/models.js").item
const college=require("../db/models.js").college
const Op = require('sequelize').Op

module.exports={
    randomGen:()=>{
        let randomString = "";
        let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++)
            randomString += charSet.charAt(Math.floor(Math.random() * charSet.length));
        // generates random string of 10 characters
        return randomString;
    },
    getAllItems:(r,s,cb)=>{
        item.findAll().then((data)=>{
            cb(data)
        })
    },
    getParticularItem:(id,cb)=>{
        item.find({
            where:{
                id:id
            }
        }).then((data)=>{
            cb(data)
        })
    },
    getItemsWithIds:(pIds,cb)=>{
        console.log(pIds)
        item.findAll({
            where:{
                id:id
            }
        }).then((data)=>{
            cb(data)
        })
    },
    getItemByCollege:(cId,cb)=>{
        item.findAll({
            where:{
                collegeCId:cId
            }
        }).then((data)=>{
            cb(data)
        })
    },
    getInfoOfItemsExceptOne:(cId,pId,cb)=>{
        item.findAll({
            where:{
                collegeCId:cId,
                id:{
                    [Op.notIn]:[pId]
                }
            }
        }).then((data)=>{
            cb(data)
        })

    },
    insertNewItem:(r,s)=>{
        item.create({
            name:r.body.name,
            desc:r.body.desc,
            price:r.body.dPrice,
            mrp:r.body.mrp,
            fImage:r.body.fImage,
            bImage:r.body.bImage,
            collegeCId:r.body.college
        })
    },
    UpdateItem:()=>{

    },
    deleteItem:()=>{

    }

}

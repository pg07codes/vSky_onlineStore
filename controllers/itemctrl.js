/*created by Pranav Gupta (pg07codes) on 10-08-2018 */

const item=require("../db/models.js").item

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
    getItemByCollege:(cId,cb)=>{
        console.log(cId)
        item.findAll({
            where:{
                collegecId:cId
            }
        }).then((data)=>{
            console.log(data);
            cb(data)
        })

    },
    insertNewItem:(r,s)=>{
        item.create({
            name:r.body.name,
            price:r.body.dPrice,
            mrp:r.body.mrp,
            collegeCId:r.body.college
        })
    },
    UpdateItem:()=>{

    },
    deleteItem:()=>{

    }

}

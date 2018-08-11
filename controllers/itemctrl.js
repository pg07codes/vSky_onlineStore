/*created by Pranav Gupta (pg07codes) on 10-08-2018 */

const item=require("../db/models.js").item

module.exports={
    getAllItems:(r,s,cb)=>{
        item.findAll().then((data)=>{
            cb(data)
        })
    },
    getItemByCollege:()=>{

    },
    insertNewItem:(r,s)=>{
        item.create({
            name:r.body.name,
            price:r.body.dPrice,
            mrp:r.body.mrp,
            college:r.body.college
        })
    },
    UpdateItem:()=>{

    },
    deleteItem:()=>{

    }

}

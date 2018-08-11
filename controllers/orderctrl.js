/*created by Pranav Gupta (pg07codes) on 11-08-2018 */


const order=require("../db/models.js").order
const ctrl=require("../controllers/itemctrl")

module.exports={
    getAllOrders:(r,s,cb)=>{
        order.findAll().then((data)=>{
            cb(data)
        })
    },
    getParticularOrder:(id,cb)=>{
        order.find({
            where:{
                id:id
            }
        }).then((data)=>{
            cb(data)
        })
    },
    getOrderByRefNumber:( refNumber,cb)=>{
        order.findAll({
            where:{
                refNumber: refNumber
            }
        }).then((data)=>{
            cb(data)
        })

    },
    insertNewOrder:(r,s,cb)=>{
        let refNumber=ctrl.randomGen()
        order.create({
            phnNumber:r.body.phnNumber,
            address:r.body.address,
            size:r.body.size,
            refNumber:refNumber
        }).then((data)=>{
            cb(data)
        })
    },
    UpdateItem:()=>{

    },
    deleteItem:()=>{

    }

}

/*created by Pranav Gupta (pg07codes) on 10-08-2018 */

const college=require("../db/models.js").college

module.exports={
    getAllColleges:(r,s,cb)=>{
        college.findAll().then((data)=>{
            cb(data)
        })
    },
    getParticularCollege:(id,cb)=>{
        college.find({
            where:{
                id:id
            }
        }).then((data)=>{
            cb(data)
        })
    },
    insertNewCollege:(r,s)=>{
        college.create({
            cName:r.body.newCollege
        })
    }
}

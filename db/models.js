/*created by Pranav Gupta (pg07codes) on 09-08-2018 */

const Sequelize=require('sequelize')
const dt=Sequelize.DataTypes

const dbconfig=require('../config').DB

const db=new Sequelize(dbconfig.NAME,dbconfig.USER,dbconfig.PASSWORD,{
    dialect:'mysql'
})

// all the model definition goes in here ---

const item=db.define("item",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:dt.INTEGER
    },
    name:{
        allowNull:false,
        type:dt.STRING
    },
    email:{
        allowNull:false,
        unique:true,
        type:dt.STRING
    },
    password:{
        //allowNull:false,
        type:dt.STRING
    },
    location:{
        //allowNull:false,
        type:dt.STRING
    },
    state:{
        //allowNull:false,
        type:dt.STRING
    },
    phn:{
        //allowNull:false,
        type:dt.STRING(12)
    },
    googleId:{
        type:dt.STRING
    }

})



db.sync({
    //alter:true
    //force:true
}).then(()=>console.log("db is synced"))


module.exports={db}
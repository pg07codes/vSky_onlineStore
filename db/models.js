/*created by Pranav Gupta (pg07codes) on 09-08-2018 */

const Sequelize=require('sequelize')
const dt=Sequelize.DataTypes
//const dbconfig=require('../config').DB

// const db=new Sequelize(dbconfig.NAME,dbconfig.USER,dbconfig.PASSWORD,{
//     dialect:'postgres',
//     host:'localhost'
// })

const db = new Sequelize(process.env.DATABASE_URL);

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
    desc:{
        allowNull:false,
        type:dt.STRING
    },
    price:{
        allowNull:false,
        type:dt.INTEGER
    },
    mrp:{
        allowNull:false,
        type:dt.INTEGER
    },
    fImage:{
        allowNull:false,
        type:dt.STRING
    },
    bImage:{
        allowNull:false,
        type:dt.STRING
    }

})

const college=db.define("college",{
    cId:{
        autoIncrement:true,
        primaryKey:true,
        type:dt.INTEGER
    },
    cName:{
        allowNull:false,
        type:dt.STRING,
        unique:true
    }
})

const order=db.define("order",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:dt.INTEGER
    },
   name:{
        allowNull:false,
        type:dt.STRING
    },
    phnNumber:{
        allowNull:false,
        type:dt.STRING
    },
    address:{
        allowNull:false,
        type:dt.TEXT
    },
    size:{
        allowNull:false,
        type:dt.STRING
    },
    landmark:{
        allowNull:false,
        type:dt.STRING
    },
    pin:{
        allowNull:false,
        type:dt.INTEGER
    },
    refNumber:{
        allowNull:false,
        unique:true,
        type:dt.STRING
    },
    delivered:{
        defaultValue:false,
        type:dt.BOOLEAN
    },
    quantity:{
        allowNull:false,
        type:dt.INTEGER
    }
})


item.belongsTo(college)
college.hasMany(item)

db.sync({
    //alter:true
    //force:true
}).then(()=>console.log("db is synced"))


module.exports={db,item,college,order}
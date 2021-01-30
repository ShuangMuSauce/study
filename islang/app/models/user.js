const {sequelize} = require('../../core/db')

const {Sequelize,Model} = require('sequelize')

class User extends Model {

}


User.init({
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    nickname:Sequelize.STRING,
    email:{
        type:Sequelize.STRING(128),
        unique:true
    },
    password:Sequelize.STRING,
    openid:{
        type:Sequelize.STRING(64),
        unique:true
    }
},{
    sequelize:sequelize,
    tableName:'user'
})


module.exports = {
    User
}

//数据迁移 SQL 更新 风险
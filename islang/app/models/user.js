const bcrypt = require('bcryptjs')
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
    password:{
        type:Sequelize.STRING,
        set(val) {
            const salt = bcrypt.genSaltSync(10)
            const psw = bcrypt.hashSync(val,salt)
            this.setDataValue('password',psw)
        }
    },
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
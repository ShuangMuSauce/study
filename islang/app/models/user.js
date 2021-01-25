const {db} = require('../../core/db')

const {Sequelize,Model} = require('sequelize')

class User extends Model {

}
User.init({
    //主键 关系型数据库
    //主键： 不能重复 不能为空
    //注册 User id 设计 id编号系统600001  600002
    //自动增长id编号 1 2 3
    //主键：数字最好 不建议：字符串，随机字符串 GUID
    //并发， 1000 注册
    // 暴露 用户编号 1，2，3，4，5
    //即使别人知道用户编号，也无法做坏事

    //接口保护 权限 访问接口 Token
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    nickname:Sequelize.STRING,
    email:Sequelize.STRING,
    password:Sequelize.STRING,
    openid:{
        type:Sequelize.STRING(64),
        unique:true
    }

    //跨平台的 unionID
})
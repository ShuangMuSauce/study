const bcrypt = require('bcryptjs')
const Router=require('koa-router')
const {success} = require('../../lib/helper')

const { RegisterValidator } = require('../../validators/validator')
const { User } = require('../../models/user')
const router = new Router({
    prefix: '/v1/user',
})

router.post('/register',async (ctx)=>{
    const v = await new RegisterValidator().validate(ctx)
    //session 考虑状态 无状态
    //rest ,webservice ,有状态
    //open
    //取数据
    //close
    //TP REST ,SOAP,ASP JSP 动态网页技术

    //email password
    //token jwt
    //token 无意义的随机字符串
    //携带数据
    //uid jwt

    //令牌获取 颁布令牌
    const user = {
        email: v.get('body.email'),
        password: v.get('body.password2'),
        nickname: v.get('body.nickname')
    }
        await User.create(user)
        success()
})

module.exports = router
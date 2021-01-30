const bcrypt = require('bcryptjs')
const Router=require('koa-router')

const { RegisterValidator } = require('../../validators/validator')
const { User } = require('../../models/user')
const router = new Router({
    prefix: '/v1/user',
})

router.post('/register',async (ctx)=>{
    const v = await new RegisterValidator().validate(ctx)
    const salt = bcrypt.genSaltSync(10)
    //位数，成本
    //明文，加密 不同， 彩虹攻击
    const psw = bcrypt.hashSync(v.get('body.password2'),salt)
    const user = {
        email: v.get('body.email'),
        password: psw,
        nickname: v.get('body.nickname')
    }
        const r = await User.create(user)
})

module.exports = router
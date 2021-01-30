const Router=require('koa-router')

const { RegisterValidator } = require('../../validators/validator')
const { User } = require('../../models/user')
const router = new Router({
    prefix: '/v1/user',
})

router.post('/register',async (ctx)=>{

    //router.post('/register', new RegisterValidator,async(ctx))
    //-> 全局的中间件只执行一次，每一次执行都会改变上一次的值，要避免这样写

    //router.post('/register', function,async(ctx))
    //校验器不适合用函数组织，适合用类。

    const v = await new RegisterValidator().validate(ctx)
    const user = {
        email: v.get('body.email'),
        password: v.get('body.password2'),
        nickname: v.get('body.nickname')
    }
        const r = await User.create(user)
   


})

module.exports = router
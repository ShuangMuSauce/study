const Router=require('koa-router')
const router=new Router()

const {HttpException} = require('../../../core/http-exception')
// /v1/:id/classic/latest
router.get('/v1/:id/classic/latest',(ctx,next)=>{
    const path=ctx.params
    const query=ctx.request.query
    const headers=ctx.request.header
    const body=ctx.request.body

    if(true) {
        //动态
        const error = new HttpException('为什么错误',10001,400)
        throw error
    }
    ctx.body={
        key: 'classic'
    }
})

module.exports=router
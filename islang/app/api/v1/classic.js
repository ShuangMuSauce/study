const Router=require('koa-router')
const router=new Router()
const {PositiveIntegerValidator} = require ('../../validators/validator')
// /v1/:id/classic/latest
router.get('/v1/:id/classic/latest',(ctx,next)=>{
    const path=ctx.params
    const query=ctx.request.query
    const headers=ctx.request.header
    const body=ctx.request.body
    const v=new PositiveIntegerValidator().validate(ctx)

    const c = {
        a:1,
        b:{
            f:2,
            e:{
                
            }
        }
    }

    const id=v.get('body.b.e',parsed=false)
    ctx.body='classic'
})

module.exports=router
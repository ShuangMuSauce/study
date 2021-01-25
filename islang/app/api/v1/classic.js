const Router=require('koa-router')
const router=new Router()

// /v1/:id/classic/latest
router.get('/v1/:id/classic/latest',(ctx,next)=>{
    const path=ctx.params
    const query=ctx.request.query
    const headers=ctx.request.header
    const body=ctx.request.body

    if(true) {
        //动态
        const error = new global.errs.ParameterException()
        //global
        throw error
    }
    ctx.body={
        key: 'classic'
    }
})

module.exports=router
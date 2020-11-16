const Router=require('koa-router')
const router=new Router()

router.get('/v1/book/latest',(ctx,next)=>{
    ctx.book={
        key: 'book'
    }
})

module.exports=router
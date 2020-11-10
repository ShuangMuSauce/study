const Koa=require('koa')
const Router=require('koa-router')

const app=new Koa()
const router =new Router()

router.get('/classic/latest',(ctx,next)=>{
    ctx.body={key:'calssic'}
})

app.use(router.routes())
//在Koa框架里面ctx等效Request
// app.use(async (ctx,next)=>{
//     console.log(ctx.path)
//     console.log(ctx.method)
//     if (ctx.path==="/classic/latest" && ctx.method === "GET") {
//         ctx.body={key:'classic'}
//     }
// })

app.listen(3000)
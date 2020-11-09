const Koa=require('koa')
const app=new Koa()

app.use(async (ctx,next)=>{
    await next()
    const r=ctx.r //获得第二个中间件的res
    console.log(r)
})

app.use(async (ctx,next)=>{
    const axios=require('axios')
    const res=await axios.get('http://baidu.com')
    ctx.r=res
    await next()
})

app.listen(3000)
const Koa=require('koa')

const app=new Koa()

//应用程序对象  中间件

//发送HTTP KOA 接受HTTP


//注册   next下一个中间件函数
app.use(async (ctx,next)=>{
    //ctx 上下文   next下一个中间件函数
    console.log(1)
    await next()
    console.log(2)
})

app.use(async (ctx,next)=>{
    console.log(3)
    await next()
    console.log(4)
})

//不加async，await依次输出，1，3，4，2，加上async，await可以保证万无一失


app.listen(3000)
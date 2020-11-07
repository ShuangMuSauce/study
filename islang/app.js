const Koa=require('koa')

const app=new Koa()

//应用程序对象  中间件

//发送HTTP KOA 接受HTTP


//注册   next下一个中间件函数
app.use((ctx,next)=>{
    //ctx 上下文   next下一个中间件函数
    console.log('我是第一个中间件')
    next()
})

app.use((ctx,next)=>{
    console.log('我是上一个中间件的next方法调用的中间件')
})
app.listen(3000)
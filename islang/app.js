const Koa=require('koa')

const app=new Koa()

//应用程序对象  中间件

//发送HTTP KOA 接受HTTP


//注册   next下一个中间件函数
// app.use((ctx,next)=>{
//     //ctx 上下文   next下一个中间件函数
//     console.log(1)
//     const a=next()
//     console.log(a) 
//     console.log(2)
// })

// app.use(async (ctx,next)=>{
//     //await==>阻塞当前线程 
//     const axios=require('axios')
//     const start=Date.now()
//     const res=await axios.get('http://baidu.com')
//     const end=Date.now()
//     console.log(end-start) 
// })

app.use(async (ctx,next)=>{
    //await==>阻塞当前线程 
    const axios=require('axios')
    const res=await axios.get('http://baidu.com')
    console.log(res) 
})

app.listen(3000)
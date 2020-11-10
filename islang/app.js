const Koa=require('koa')
const Router=require('koa-router')

const app=new Koa()
const router =new Router()

router.get('v1/classic/latest?version=v1',(ctx,next)=>{
    ctx.body={key:'music'}
})

if(v1){

}

if(v2){

}

//客户端兼容性 老版本classic 新版本 music
//v1 v2 v3 支持3个版本
//api 携带版本号
//1 路径
//2 查询参数
//3 header
//api 版本 业务变动
app.use(router.routes())

app.listen(3000)
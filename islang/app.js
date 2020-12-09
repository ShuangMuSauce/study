const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManager=require('./core/init')

const app=new Koa()

app.use(parser())

process.cwd()
InitManager.initCore(app)


app.listen(3000)
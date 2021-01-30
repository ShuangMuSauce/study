const Koa = require('koa')
const Parser = require('koa-bodyparser')
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')
const app = new Koa()


app.use(catchError)
app.use(Parser())
process.cwd()
InitManager.initCore(app)

app.listen(3000)
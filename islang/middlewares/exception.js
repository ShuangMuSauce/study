const catchError=(ctx,next)=>{
    try {
        await next()
    }catch(error) {
        ctx.body='服务器有点问题，你等一下'
    }
}

module.exports = catchError
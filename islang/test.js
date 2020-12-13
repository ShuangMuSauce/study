//机制 监听任何异常

function func1() {
    try {
        func2()
    } catch (error) {
        throw error
    }
}

async function func2() {
    try {
       await func3()
    } catch (error) {
       console.log('error')
    }
}

//Promise async await 

//全局异常处理 异常 promise Async  回调
async function func3() {
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            const r=Math.random()
            if(r<0.5) {
                reject ('error')
            }
        })
    })

//   await setTimeout(function () {
//       throw new Error ('error')
//   },1000)
}

func1()
//没有发生异常  正确返回结果
// 发生了异常

// 函数设计
// 判断出异常 return false null
// throw new Error 编程规范 throw
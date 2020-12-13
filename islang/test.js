//机制 监听任何异常

function func1() {
    try {
        func2()
    } catch (error) {
        throw error
    }
}

function func2() {
    try {
        func3()
    } catch (error) {
        throw error
    }
}

function func3() {
    try {
        1/0
    } catch (error) {
        throw error
    }
    return 'success'
}

//没有发生异常  正确返回结果
// 发生了异常

// 函数设计
// 判断出异常 return false null
// throw new Error 编程规范 throw
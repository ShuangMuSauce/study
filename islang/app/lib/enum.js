function isThisType(val){
    for(let key in this) {
        if(this[key] == val){
            return true
        }
    }
    return false
}

const LoginType = {
    USER_MINI_PROGRAM:100, //小程序的登陆方式
    USER_EMAIL:101,
    USER_MOBILE:102, //手机号的登陆方式
    ADMIN_EMAIL:200,//管理员的email登陆方式
    isThisType
}

module.exports = {
    LoginType
}

//node的模块化
// 1. 没有defined
// 2. exports、require、module
// 3. 引用自定义模块
//    放到node_modules里
//    前面加./


//引入2.js和3.js
let mod2=require('./2')
let mod3=require('./3')

console.log(mod2.a+mod3.b)
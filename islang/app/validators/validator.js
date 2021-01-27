const {LinValidator,Rule} = require('../../core/lin-validator')

class PositiveIntegerValidator extends LinValidator {
    constructor() {
        super()
        this.id=[
            new Rule('isInt','需要是正整数',{min:1})
        ]
    }
}

// 注册验证
class RegisterValidator extends LinValidator {
    constructor() {
      super()
      this.email = [new Rule('isEmail', '不符合Email规范')]
      this.password1 = [
        new Rule('isLength', '密码至少6个字符，最多32个字符', {
          min: 6,
          max: 32,
        }),
        new Rule(
          'matches',
          '密码不符合规范，请包含特殊字符',
          '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]',
        ),
      ]
      this.password2 = this.password1
      this.nickname = [new Rule('isLength', '昵称长度不符合规范', {
        min: 4,
        max: 32,
      })]
    }
  
    // 验证两个密码相同
    validatePassword(vals) {
      const psw1 = vals.body.password1
      const psw2 = vals.body.password2
      if (psw1 !== psw2) {
        throw new Error('前后密码必须相同')
      }
    }
  }
module.exports={
    PositiveIntegerValidator,
    RegisterValidator
}
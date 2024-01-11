module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'arrow-body-style': [2, 'as-needed'], // 要求箭头函数体使用大括号,当大括号是可以省略的，强制不使用它们 (默认) 【不使用大括号会使代码看起来简便，但也使得看懂逻辑更加困难。代码简洁与代码清晰有时不可兼得】
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }], // 在可以省略括号的地方强制不使用括号 【有时候括号会让逻辑更加清晰，但是多余的括号也往往是没有必要的】
    'arrow-spacing': [2, { before: true, after: true }], // 要求箭头函数的箭头之前或之后有空格
    'block-spacing': [2, 'always'], // 禁止或强制在代码块中开括号前和闭括号后有空格
    'brace-style': 2, // 大括号风格要求 【大括号和控制语句放在同一行】
    'comma-dangle': [2, 'always-multiline'], // 要求或禁止使用拖尾逗号 【同一行时禁止，多行时必须】
    'comma-spacing': [2, { before: false, after: true }], // 强制在逗号周围使用空格
    curly: [2, 'all'], // 要求遵循大括号约定 【即便单行if语句也要求有大括号，这样会使代码更加清晰】
    'eol-last': [2, 'always'], // 禁止文件末尾存在空行 【实际上有空行会更好，为了兼容部分老系统，但是目前来看没遇到什么问题，所以看个人习惯】
    eqeqeq: [2], // 要求使用 === 和 !== 【使用严格等于可以避免隐式类型转换，增强代码健壮性】
    'func-style': [2, 'declaration', { allowArrowFunctions: true }], // 强制 function 声明或表达式的一致性 【个人习惯使用声明式，因为声明式函数会被提前】
    'handle-callback-err:': [0, '^(e|err|error)$'], // 强制回调错误处理 【实际上是建议执行这条规则的，但是有时候会产生误判，就关闭了】
    'implicit-arrow-linebreak': [2, 'beside'], // 禁止在箭头函数体之前出现换行 【如果出现换行会导致逻辑不清晰】
    indent: [2, 2, { SwitchCase: 1 }], // 强制使用一致的缩进// case 子句将相对于 switch 语句缩进 4 个空格，即一个tab  【缩进tab 2个空格】
    'key-spacing': [2, { beforeColon: false, afterColon: true }], // 强制在对象字面量的键和值之间使用一致的空格
    'keyword-spacing': [2, { before: true, after: true }], // 强制关键字周围空格的一致性
    'linebreak-style': [2, 'unix'], // 强制使用一致的换行风格
    'new-cap': [0], // 要求构造函数首字母大写
    'no-buffer-constructor': [2], // 禁用 Buffer() 构造函数 【Buffer()构造函数对于内存的操作权限比较大，因此禁用】
    'no-confusing-arrow': [2, { allowParens: true }], // 禁止在可能与比较操作符相混淆的地方使用箭头函数 【为了代码清晰】
    'no-console': [2, { allow: ['warn', 'error'] }], // 禁止console 【开发环境下会有很多 console.log，但是生产环境下没必要；如果是后端项目建议关闭本规则】
    'no-debugger': [2], // 禁止debugger 【开发环境下可以debug，但是生产环境下debug就是灾难了】
    'no-duplicate-imports': [2], // 禁止模块重复导入
    'no-else-return': [2, { // 【可以简化代码】
      allowElseIf: false, // 禁止在 return 之后有 else if 块
    }], // 禁止在 else 前有 return
    'no-empty': [1], // 禁止有空代码块 【如果有空代码块建议删了】
    'no-eval': [2], // 禁用 eval() 【也是存在安全风险，因此 ban 了】
    'no-extend-native': [2, { exceptions: [] }], // 禁止扩展原生对象【扩展原生对象会导致很多 bug，所以禁止】
    'no-extra-boolean-cast': [2], // 禁止不必要的布尔类型转换 【精简代码】
    'no-extra-parens': [2], // 禁止冗余的括号 【精简代码】
    'no-lonely-if': [2], // 禁止 if 语句作为唯一语句出现在 else 语句块中 【精简代码】
    'no-magic-numbers': [0, { // 【魔术数字会让人难以理解，建议使用常量来替代】
      ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 指定检测中可以忽略的数字
      ignoreArrayIndexes: true, // 指定数字用作数组的索引是否是可以的
      enforceConst: false, // 指定是否应该在数字变量的声明中检测 const 关键
      detectObjects: false, // 指定是否应该在设置对象属性时检测数字
    }], // 禁用魔术数字
    'no-mixed-requires': [2], // 禁止混合常规变量声明和 require 调用 【混合常规变量声明和 require 调用会导致代码难以理解】
    'no-multi-spaces': [2, { ignoreEOLComments: true }], // 禁止出现多个空格
    'no-multiple-empty-lines': [2, { max: 1 }], // 不允许多个空行
    'no-nested-ternary': [2], // 禁止使用嵌套的三元表达式 【使用嵌套的三元表达式会让代码逻辑难以理解】
    'no-new-require': [2], // 禁止调用 require 时使用 new 操作符 【调用 require 时使用 new 操作符会让代码逻辑难以理解】
    'no-new-wrappers': [2], // 禁止原始包装实例
    'no-path-concat': [2], // 禁止对 __dirname 和 __filename 进行字符串连接 【进行路径处理时最好采用官方提供的 path 包，可以正确的处理 Windows 和 Linux 的路径分隔符】
    'no-redeclare': [2, { builtinGlobals: true }], // 禁止重新声明变量
    'no-return-assign': [2], // 禁止在返回语句中赋值
    'no-return-await': [2], // 禁用不必要的 return await 【在 async 函数中使用 return await 是没有意义的，因为 async 函数还是会把返回值包裹在 Promise 中】
    'no-shadow': [2], // 禁止变量声明与外层作用域的变量同名 【虽然有作用域上的区别，但这也容易让人搞不清当前变量是哪个】
    'no-sync': [1], // 禁止使用同步方法 【在后端项目中使用同步方法会大大降低代码的执行效率】
    'no-trailing-spaces': [0], // 禁用行尾空格
    'no-unneeded-ternary': [2], // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unused-vars': [1], // 禁止出现未使用过的变量 【虽然说最好不要出现未使用过的变量，但是，如果能够自动摇树优化的话那么有时候这条规则也是没有必要的】
    'no-use-before-define': [0], // 禁止在变量定义之前使用它们
    'no-useless-constructor': [2], // 禁用不必要的构造函数
    'no-useless-return': [2], // 禁止多余的 return 语句
    'no-var': [2], // 要求使用 let 或 const 而不是 var 【使用 var 会导致变量作用域问题】
    'max-params': [2, { max: 5 }], // 强制函数定义中最大参数个数 【函数中的参数过多会导致函数难以使用，如果真的有太多配置项要传，建议使用对象字面量】
    'object-curly-spacing': [2, 'always'], // 强制在花括号中使用一致的空格
    'object-shorthand': [2], // 要求或禁止对象字面量中方法和属性使用简写语法 【精简代码】
    'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }], // 强制将对象的属性放在不同的行上【这样会让对象字面量看起来清晰些】
    'operator-assignment': [2], // 要求或禁止尽可能地简化赋值操作 【精简代码】
    'padded-blocks': [0], // 要求或禁止块内填充
    'prefer-arrow-callback': [2], // 要求回调函数使用箭头函数 【精简代码】
    'prefer-const': [2], // 建议使用const 【代码编写完毕后将未修改过的变量转为 const 有助于日后修改时不小心修改了常量】
    'prefer-rest-params': [2], // 要求使用剩余参数而不是 arguments 【arguments这个用法已经被淘汰了】
    'prefer-template': [2], // 建议使用模板字面量而非字符串连接 (prefer-template) 【看上去更加简洁】
    'quote-props': [2, 'as-needed', { keywords: false, numbers: true }], // 当没有严格要求时，禁止对象字面量属性名称使用引号【精简代码】
    quotes: [2, 'single'], // 强制使用一致的反勾号、双引号或单引号double 【关于单双引号之争，我只是觉得单引号输入起来不需要按住 shift 键而已】
    'require-await': [0], // 不允许没有异步函数的异步函数await表达
    semi: [2, 'never'], // 要求或禁止使用分号代替 ASI 【以我多年的JavaScript/TypeScript编写经验来看，只有在使用自执行函数时会有这样的困扰，由于这个用的比较少，因此可以只在需要时添加分号即可。少些几个分号并不会对代码造成太大影响，而多写分号也没有太大收益，所以不写分号！】
    'semi-style': [2, 'last'], // 强制分号出现在句子末尾
    'space-before-function-paren': [2, {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }], // 要求或禁止函数圆括号之前有一个空格
    'space-infix-ops': [2], // 要求操作符周围有空格 【为了更加清晰】
    'spaced-comment': [2, 'always'], // 要求或禁止在注释前有空白 【为了更加清晰】
    'template-curly-spacing': [2, 'never'], // 强制模板字符串中空格的使用 【精简代码】
  },
}

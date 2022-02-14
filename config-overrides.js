const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    // 检测项目中是否使用了 import 语句
    fixBabelImports('import', {
        libraryName: 'antd', // 检测通过 import 引入的文件是否是 antd
        libraryDirectory: 'es', // 检测是否使用了 es 文件
        style: true  // 自动打包引入样式
    }),
    addLessLoader({
        modifyVars: {
            "@primary-color": '#1D1F21',  // 更改主题颜色
        },
        javascriptEnabled: true
    })
)
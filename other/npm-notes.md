## npm notes

### npm install 和 npm i 

```
npm i 是 npm install 的缩写
但实际使用会有区别点
1.npm i 安装的模块无法用 npm unstall 删除，需要用 npm uninstall i
2.npm i 会帮助检测与当前 node 版本最匹配的 npm 包版本号，并匹配出来相互依赖的 npm 包应该提升的版本号
3.npm install 安装报错时 debug.log ，npm i不一定出现
```

### npm install webpack --global                // 安装全局webpack命令
### npm install webpack webpack-cli --save-dev  // 安装本地项目模块

```
install    可简写为i,
--global   可简写为-g
--save     可简写为-S
--save-dev 可简写为-D

-D 安装的包的名称和版本号会存在 package.json 的 devDenpendenies 对象
-S 安装的包的名称和版本号放在 dependencies 对象

放在package.json 的 devDenpendenies 对象 和 放在 dependencies 对象区别
devDenpendenies 里面的插件只用于开发环境，不用于生产环境
dependencies 石旭耀发布到生产环境
```
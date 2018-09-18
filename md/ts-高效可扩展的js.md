## 为什么ts？
Developers should be able to focus on creating amazing things.
- 开发时最高兴的事情是写新的应用，写新的功能
- 少做些其他乱七八糟的事情，没人喜欢修复bug，看别人写的代码，重构

js的缺点
- js动态类型语言，number下一秒可以变成string
- 难以作类型推断和类型检验，所以ide不能像C++和java一样，不能提供非常多的帮助
- 写小应用问题不大，企业级应用时会有问题，antd

js程序员的工作
- 微软现状，70%理解，25%维护，5%新功能
- 梦想，65%理解，20%维护，15%新功能，能有三倍的时间来做自己想做的事情

ts带静态类型的js的超集，可编译成纯js

## 快速上手
程序员的交流方式，看代码去理解ts是什么东西
- 可以用ts来检测一个现有的js文件中存在什么问题，使用ts-check的语法就可以了
这么短短一句，就可以说自己是一个ts开发者
- 修改文件后缀名为ts

js推出新的版本es6，es2018，es2019，有Promise, async, await特性
- ts致力于支持最新的es规范

总结：
- 可以静态检查js中的一些错误
- @ts-check，JSDoc添加类型
- .ts在行内添加类型
- 编译成早期的ES版本

## ts真的有用吗
To Type or Not to Type:
Quantifying Detectable Bugs in JavaScript论文

ts和flow能不能帮助我们找到bug？
在github上找到四百个不同的js bug，在修好的代码中添加ts和flow看能不能找到这些bug
最后在ts 2.0 和 flow 0.3 能够成功地找到其中15%的bug，能够在开发环境就找到，而不是测试环境和生产环境

## ts实战
- 可以方便地进行代码重构，ts只会修改需要修改的地方，并非原始的查找和替换
- 对返回的响应数据，可以as告诉ts其类型
- 同时返回的响应数据很多都不需要，只要定义我们想要的部分即可
- 不用担心webpack兼容问题，添加ts-loader和source-map-loader

总结：
- @ts-check可以快速上手
- 任何现有流程中添加ts
- ts让开发更高效
- 有学习成本，使用@ts-check逐步进行尝试

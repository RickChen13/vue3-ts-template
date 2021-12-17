# vue3-ts-template

## 基于`vue3`和`typescript`的整合(架构)

### 安装与运行

#### 安装依赖

```bash
yarn
```

#### 运行

```bash
yarn serve
```

#### 编译

```bash
yarn build
```

#### 整理和修复文件

```bash
yarn lint
```

### 说明

本项目志在快速搭建一个`vue3`+`typescript`的拥有基础组件的框架  
目前已经集成有：

* `sass`和`scss`
* `element-plus`
* `axios`请求服务

#### 目录结构

```tree
.
└─src
    ├─assets                图片资源
    ├─base                  基类
    ├─bll                   业务逻辑层    
    |    ├─components       组件业务逻辑层
    |    ├─controller       控制器业务逻辑层
    |    └─view             视图业务逻辑层
    ├─common                js内部函数功能重写
    ├─components            组件
    ├─config                配置信息
    ├─controller            控制器
    ├─extend                外部包、函数功能重写
    ├─helper                工具助手
    ├─interface             自定义结构体
    |    ├─base             基类结构体
    |    ├─bll              业务逻辑结构体
    |    └─controller       控制器结构体
    ├─library               应用库、类
    ├─router                路由
    |    └─node             根据节点存放路由信息
    ├─style                 样式存放
    |    ├─components       组件样式
    |    └─view             视图样式
    ├─view                  节点页面
    ├─App.vue               主页面
    └─main.ts               主进程入口文件
```

# 1. 什么是微信小程序
1. 不需要下载安装即可使用, 是因为微信小程序体积很小,刚开始下载就下完了, 用户根本感觉不到。
2. 用户 “用完即走” , 不用关心是否安装太多应用
3. 应用无处不在,随时可用

# 2. 小程序适合做什么样的应用
1. 小程序适合做简单的, 用完即走的应用
2. 小程序适合做低频的应用
3. 小程序适合性能要求不高的应用

# 3.小程序登陆地址
```angular2html
mp.weixin.qq.com
```

# 4. 小程序注意事项

1. 根目录种app.json 定义了默认路由, 第一个数组
2. page种的 json文件 要么没有, 有的话一定要{}
3. 小程序支持 行间样式
4. 下载微信开发这工具

## 4.1 rpx
rpx 是响应式单位
一张图片 如果在 小程序里面用 使用rpx单位即可, 或者用0.5倍的 px(iphone6上) 10px = 20rpx

# 5.0 小程序头部配置
app.json中的window属性

# 6.0 wx:for
核心代码就是 wx:for，对应一个数组。
而 wx:for-index 指明后面如果要用数组索引的话，用什么名字，如果名字是 index，则可省略，直接使用。
而 wx:for-item 指明后面如果要用数组索引对应的项的话，用什么名字，如果名字是 item，则可省略，直接使用。

# 7.0 数据传递
小程序中不能操作dom,数据绑定和vue类似
```angular2html
this.setData(data)
this.setData({options})
```

# 8.0 wx:if
```angular2html
wx:if="{{flag}}"
```

# 9.0 block
可用于循环

#10.0 navigateTo 和  redirectTo
navigateTo 调用的是onHide,redirectTo调用的是unUnload
wx的 api 一般都有 success, fail, complete 回调

# 11.0 事件绑定
bind:tap = "fn"  bind:longTap = 'fn'

catch:tap = 'fn1' 阻止冒泡, 用于外层

```angular2html
<view catch:tap="fn1">
    <text bind:tap="fn"></text>
</view>
```
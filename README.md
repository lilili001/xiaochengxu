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
一张图片 如果在 小程序里面用 使用rpx单位即可, 或者用0.5倍的 px(iphone6上)

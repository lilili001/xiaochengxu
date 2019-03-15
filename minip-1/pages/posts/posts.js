// pages/posts/posts.js
var postData = require('../../data/posts-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrls:[
        "/images/post/bl.png",
        "/images/post/cat.png",
        "/images/post/vr.png"
      ],
    indicatorDots:true,
    indicatorColor:"ffb3b3",
    indicatorActiveColor:'#cc0000',
    autoplay:true,
    circular:true,
    previousMargin:"0px"
  },
  onLoad(){
    this.setData({ 'postList': postData.postList})
  },
  bindchange(event){
    //console.log(event.detail)
  },
  bindtransition(event){
    //console.log('bindtransition:',event.detail)
  },
  bindanimationfinish(event){
    //console.log('bindanimationfinish:',event.detail)
  }
})
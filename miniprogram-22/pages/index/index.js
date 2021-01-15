//index.js
//获取应用实例
const app = getApp()
  
Page({
  data: {
    swiper:{
      // 轮播图图片路径
    imgUrl: [],
    //  是否显示面板指示点
    indicatorDots: true,
    //指示点颜色
    dotsColor:"rgb(128,128,136)",
    // 被选中的指示点颜色
    dotsActivedColor:"#000",
    //滑动方向是否为纵向
    vertical: false,
    // 自动轮播
    autoplay: true,
    // 自动切换时间间隔
    interval: 5000,
    // 滑动动画时长
    duration: 500
    },
    // 轮播图盒子里的图片
    swiperImg:[],
    // 分类导航盒子里的图片
    navImgUrl:[],
  },
  // 获取轮播图盒子里的图片
  getSwiperImg(){
    let that=this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/swiperdata',
      method:"GET",
      success:function(res){

            let data=[]
            res.data.message.forEach(element => {
                data.push(element.image_src)
            });
        that.setData({
            imgUrl:data
        })
      }
    })
  },
  // 获取分类盒子里的图片
  getNavListImg(){
    let that=this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/catitems',
      method:"GET",
      success:function(res){
            let data=[]
            res.data.message.forEach(element => {
                data.push(element.image_src)
            });
        that.setData({
          navImgUrl:data
        })
      }
    })
  },
  // 获取商品分类盒子里需要的数据
  getFloorData(){
    let that=this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/floordata',
      method:"GET",
      success:function(res){
        that.setData({
          floorData:res.data.message
        })
      }
    })
  },
  //监听页面加载
  onLoad:function(){
    this.getSwiperImg()
    this.getNavListImg()
    this.getFloorData()
  }

 
})

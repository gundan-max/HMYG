Page({
  data: {
    tabs: [
      {
        id: 0,
        value: "综合",
        isActive: true
      },
      {
        id: 1,
        value: "销量",
        isActive: false
      },
      {
        id: 2,
        value: "价格",
        isActive: false
      }
    ],
    goodsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.GetGoodsList();
  },

  // 标题切换
  handleTabsItemChange(e){
    const {index} = e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i) => i === index ? v.isActive = true : v.isActive = false );
    this.setData({
      tabs
    })
  },

  // 获取数据
  GetGoodsList:function(){
    let _this = this;
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/goods/detail',
      method:"GET",
      success: function(){},
      fail: function(){},
      complete: function(){}
    })
  }
})
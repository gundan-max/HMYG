// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 竖向滚动条的位置
    scrollTop:"",
    //视图滚动区域的所有数据
    scrollAllData:[],
    // 视图滚动区域当前选中的数据
    scrollActivedData:[],
    // 左侧滚动区域当前选中的商品分类索引
    activedIndex:0
  },

  // 向后台发送请求获取滚动视图区域需要的数据
  getScrollData(index){
    const _this=this
      wx.request({
        url: 'https://www.uinav.com/api/public/v1/categories',
        method:"GET",
        success:function(res){
          console.log(res)
            let {message,meta}=res.data
            // 如果获取成功
            if(meta.status==200){
              //  把后台获取到的所有数据放入 data里的scrollAllData里
              _this.setData({
                  scrollAllData:message,
                  scrollActivedData:message[index].children
              })
              console.log(_this.data.scrollActivedData)
            }
           
        },
        fail:function(err){
           console.log(err)
        }
      })
  },
  // 点击左侧滚动区域里的每个盒子的回调
  handleCateClick(e){
      console.log(e)
      // 当前点击的左侧滚动区域里的商品大分类的index值
      let index=e.currentTarget.dataset.index
    // 调用重新获取scrollActivedData的方法
     this.getScrollData(index)
      this.setData({
        scrollTop:0,
        activedIndex:index
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      this.getScrollData(0)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/user-jinyan/user-jinyan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    guanzhurenList: [],
    jyQuxiao:[]

  },
  // 关注
  focusTap(e) {
    var index = e.currentTarget.dataset.index
    console.log(index)
    var guanzhurenList = this.data.guanzhurenList
    if (guanzhurenList[index].str == '0') {
      guanzhurenList[index].str = '1'
    } else {
      guanzhurenList[index].str = '0'
    }
    console.log(guanzhurenList)
    this.setData({
      guanzhurenList: guanzhurenList
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.userForbidden()
  },
  userForbidden() {
    var that = this;
    wx.request({
      url: `http://192.168.1.168/User/user_forbidden`,
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      success: res => {
        that.setData({
          guanzhurenList: res.data.data,
        })
        console.log(res.data.data);
      }
    })
  },
  // 取消禁言
  jyQuxiaos: function (options){
    var that = this;
    wx.request({
      url:`http://192.168.1.168/User/cancel_forbidden`,
      headers:{
        'Content-Type':'application/json'
      },
      method:"POST",
      success : res => {
        that.setData({
          jyQuxiao:res.data,
        })
        console.log(res.data); 
        this.userForbidden()
      } 
        
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
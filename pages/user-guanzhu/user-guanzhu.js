// pages/guanzhu/guanzhu.js

var app = getApp()
Page({


  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['关注的人', '关注的帖子', '粉丝'],
    currentTab: 0

  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  //选择用途后加样式
  select_use: function (e) {
    this.setData({
      state: e.currentTarget.dataset.key,
    });
  },
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

  },


  focusTap: function (e) {
    var that = this;
    var opacity = this.data.opacity;
    var n = 0.08;
    var opacity = 1;
    that.setData({
      type: false
    })
    for (var i = 0; i < 15; i++) {
      opacity += n;
      console.log(opacity);
      if (opacity >= 1) {
        that.setData({
          opacity: 1,
        })
      }
      that.setData({
        opacity: opacity,
      })
    }
  },

  /**
      * 取消关注动画
      */
  cancelTap: function (e) {
    var that = this;
    var opacity = this.data.opacity;
    var n = 0.08;
    var opacity = 1;
    that.setData({
      type: true
    })
    for (var i = 0; i < 15; i++) {
      opacity -= n;
      console.log(opacity);
      if (opacity <= 0) {
        that.setData({
          opacity: 0,
        })
      }
      that.setData({
        opacity: opacity,
      })
    }
  },

  
})
// pages/user-zhiding/user-zhiding.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhidingList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: `http://192.168.1.168/User/user_top`,
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      success: res => {
        // res = app.null2str(res.data)
        if (res.code == '1') {
          let zhidingList = res.data
            let i = 0
          for (i in zhidingList) {
            zhidingList[i]["str"] = "0"
          }
        that.setData({
          zhidingList: res.data,
        })
        }else{
          wx.showModal({
            title: '暂无置顶记录',
            // content: res.msg,
            showCancel: false
          })
        }
        console.log(res.data);
      }
    })
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
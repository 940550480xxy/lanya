// pages/delete-jilu/delete-jilu.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(opt) {
    console.log('0000000000000000000000000000000')
    console.log(app.globalData.userInfo)
    this.setData({
      userInfo: app.globalData.userInfo
    })
    // console.log(this.data.userInfo)
  },
  newGroup() {
    if (this.data.floatingStr) {
      this.setData({
        floatingStr: false
      })
    } else {
      this.setData({
        floatingStr: true
      })
    }
  },
  newGroupName(e) {
    console.log(e.detail.value)
    this.setData({
      newGroupNameData: e.detail.value
    })
  },
  submitData() {
    console.log(this.data.newGroupNameData)
    return ''
    wx.request({
      url: `${this.$parent.globalData.requestUrl}/login`,
      method: 'POST',
      data: {
        newGroupNameData: this.data.newGroupNameData
      },
      success: data => {
        if (data.data.code == 1) {

        } else {
          wx.showModal({
            title: '',
            content: data.data.msg
          })
        }
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

  },
  lanya: function() {
    debugger
    
  },
  
})
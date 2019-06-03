// pages/quanxian/quanxian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  chooseImageTap:function(){
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data
            //do something
          }
        })
      }
    })
  }
  
})


//  deleteImage: function (e) {
//   var that = this;
//   var images = that.data.images;
//   var index = e.currentTarget.dataset.index;//获取当前长按图片下标
//   wx.showModal({
//    title: '提示',
//    content: '确定要删除此图片吗？',
//    success: function (res) {
//     if (res.confirm) {
//      console.log('点击确定了');
//      images.splice(index, 1);
//     } else if (res.cancel) {
//       console.log('点击取消了');
//       return false;    
//      }
//     that.setData({
//      images
//     });
//    }
//   })
//  }
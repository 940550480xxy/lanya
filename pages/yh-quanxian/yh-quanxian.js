// pages/quanxian/quanxian.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    luntanTxt: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.id
    })
    var that = this;
    wx.request({
      url: `${app.globalData.requestUrl}/Forum/forum`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        post_id: id
      },
      method: "POST",
      success: res => {
        console.log(res);
        res = app.null2str(res.data)
        if (res.code == '1') {
          this.setData({
            luntanTxt: res.data,
          })
        } else {
          // wx.showModal({
          //   title: '',
          //   content: res.msg,
          //   showCancel: false
          // })
        }

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

  },
  // 删除
  adminDelete:function(){
    var that = this;
    wx.request({
      url: 'http://192.168.1.168/Forum/del_post',
      headers:{
        'Content-Type':'application/json'
      },
      data:{
        post_id:that.data.id
      },
      method:"POST",
      success: res =>{
        console.log(res.data);
        wx.navigateBack({
          delta: 1,
        })
        // this.userForhidden()
      }
    })
  },
  // 置顶
  adminTop:function(){
    var that = this;
    wx.request({
      url: 'http://192.168.1.168/Forum/top',
      headers:{
        'Content-Type':'application/json'
      },
      data:{
        post_id:that.data.id
      },
      method:"POST",
      success: res =>{
        if(res.code == "1"){
          that.setData({
            adminTops:res.data
          })
        }
        console.log(res.data);
        // this.userForhidden()
      }
    })
  },
  // adminTop:function(e){
  //   wx.setTopBarText({
  //     luntanTxt()
  //   })
  // }
})
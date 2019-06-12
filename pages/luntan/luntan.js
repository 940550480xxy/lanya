//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    luntanTxt:[
      {
        luntanLaiziImg:"/image/luntan1.jpg",
        luntanFromcon:"你的我的",
        luntanData:"2019-12-21",
        luntanDay:"12:00",
        luntanTit: "双马尾成为了最佳减龄神器？",
        luntanLeibie:"时尚",
        luntanTxtCon: "除了小朋友，为什么日常生活中很少有人扎双马尾？很村？装嫩？有病？请抛开你对他的偏见吧！",
        luntanTxtCon1:"低双马尾",
        luntanTxtCon2:"高双马尾",
        luntanTxtCon3:"编发双马尾",
        luntanTxtCon4:" ...",
        luntanImg1: "/image/luntan1.jpg",
        luntanImg2: "/image/luntan2.jpg",
        luntanImg3: "/image/luntan3.jpg",
        luntanImg4: "/image/luntan4.jpg",
        luntanLiulan:"200",
        luntanPingLun:"20",
        shoucang:"20",
      },
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1
    page = page + 1;
    wx.request({
      url: '.......' + page,
      method: "GET",
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        // 回调函数
        var moment_list = that.data.moment;
        const oldData = that.data.moment;
        that.setData({
          moment: oldData.concat(res.data.data)
        })
        // 隐藏加载框
        wx.hideLoading();
      },
      
    })

  }
})

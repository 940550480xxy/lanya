//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    topNav:false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showDialog: false,
    testShowStr: false
  },
  Navigation: function (event) {
    var that = this;
    app.Navigation(event, that);
  },

  // showtip: function(){
  //   wx.showModel({
  //     title: "是否打开蓝牙？",
  //     content: "永久关闭",
  //     confirmText: "是",
  //     cancelText: "否",
  //   })
  // },
  // 底部导航
  chooseImg: function (e) {
    this.setData({
      curIdx: e.currentTarget.dataset.current
    })
  },
  //事件处理函数
  bindViewTap: function(e) {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

 toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });

  },
  clickTest(e) {
    let index = e.currentTarget.dataset.index
    let str = e.currentTarget.dataset.str
    // let arrayData = [1,1,0]
    
    if (str == '0') {
      // 由未选中=》选中
      // arrayData[index]["str"] = "1"
      this.setData({
        testShowStr: true
      })
    } else {
      // 由选中=》未选中
      // arrayData[index]["str"] = "0"
      this.setData({
        testShowStr: false

      })
    }
  }

})
// wx.showModal({
//   title: '提是否打开蓝牙？',
//   content: '永久关闭',
//   success(res) {
//     if (res.confirm) {
//       console.log('否')
//     } else if (res.cancel) {
//       console.log('是')
//     }
//   }
// })
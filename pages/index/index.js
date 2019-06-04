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
    testShowStr: false,
    flieList: [],
    hidden:true,
    flag:false,
    x:0,
    y:0,
    disabled: true,
    elements: []
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

    var query = wx.createSelectorQuery();
    var nodesRef = query.selectAll(".item");
    nodesRef.fields({
      dataset: true,
      rect: true

    }, (result) => {
      this.setData({
        elements: result
      })
    }).exec()

    // 上传图片
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
    this.getFlieList()
  },
  getFlieList() {
    var listData = [
      {"name": "小程序.bat", "max": "2.0M","time": "2019-06-11 12:00", "type": "1", "id": "1"},
      {"name": "大程序，bat", "max": "2.0M","time": "2019-06-11 12:00", "type": "1", "id": "1"},
      {"name": "小程序小程序", "max": "2.0M","time": "2019-06-11 12:00", "type": "1", "id": "1"},
      {"name": "小程序小程序小程序", "max": "2.0M","time": "2019-06-11 12:00", "type": "1", "id": "1"},
      {"name": "小程序小程序", "max": "2.0M","time": "2019-06-11 12:00", "type": "1", "id": "1"}
    ]
    this.setData({
      flieList: listData
    })
  },
  // groupList(){
  //   var group = [
  //     {"name":"图片"},
  //   ]
  // },
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
  },
  // 添加组弹框
  showtip:function(){
    wx.showModal({
  title: '新建组',
  content: '永久关闭',
  success(res) {
    if (res.confirm) {
      console.log('否')
    } else if (res.cancel) {
      console.log('是')
    }
  }
})
  },
  // 长按拖拽排序
  //长按
  //长按
  _longtap: function (e) {
    const detail = e.detail;
    this.setData({
      x: e.currentTarget.offsetLeft,
      y: e.currentTarget.offsetTop
    })
    this.setData({
      hidden: false,
      flag: true
    })

  },
  //触摸开始
  touchs: function (e) {
    this.setData({
      beginIndex: e.currentTarget.dataset.index
    })
  },
  //触摸结束
  touchend: function (e) {
    if (!this.data.flag) {
      return;
    }
    const x = e.changedTouches[0].pageX
    const y = e.changedTouches[0].pageY
    const list = this.data.elements;
    let data = this.data.data
    for (var j = 0; j < list.length; j++) {
      const item = list[j];
      if (x > item.left && x < item.right && y > item.top && y < item.bottom) {
        const endIndex = item.dataset.index;
        const beginIndex = this.data.beginIndex;
        //向后移动
        if (beginIndex < endIndex) {
          let tem = data[beginIndex];
          for (let i = beginIndex; i < endIndex; i++) {
            data[i] = data[i + 1]
          }
          data[endIndex] = tem;
        }
        //向前移动
        if (beginIndex > endIndex) {
          let tem = data[beginIndex];
          for (let i = beginIndex; i > endIndex; i--) {
            data[i] = data[i - 1]
          }
          data[endIndex] = tem;
        }

        this.setData({
          data: data
        })
      }
    }
    this.setData({
      hidden: true,
      flag: false
    })
  },
  //滑动
  touchm: function (e) {
    if (this.data.flag) {
      const x = e.touches[0].pageX
      const y = e.touches[0].pageY
      this.setData({
        x: x - 75,
        y: y - 45
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
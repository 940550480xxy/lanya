// pages/quanxian/quanxian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '', //标题内容
    content: '',//正文内容
    images: [],
    tempFilePaths: [],
    lableLists: [
      {
        id:1,
        lable: "健康"
      },
      {
        id:2,
        lable: "游戏"
      },
      {
        id:3,
        lable: "健康"
      }
    ],
    form:{
      state:"",
      title:"",
      content:"",
      img:"",
      file:""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  chooseImage: function () {
    let that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        })  
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;

        that.setData({
          tempFilePaths: tempFilePaths
        })
        /**
         * 上传完成后把文件上传到服务器
         */
        var count = 0;
        for (var i = 0, h = tempFilePaths.length; i < h; i++) {
          //上传文件
          wx.uploadFile({
            url: "http://192.168.1.168/Forum/upload_img",
            filePath: tempFilePaths[i],
            name: 'uploadfile_ant',
            header: {
              "Content-Type": "multipart/form-data"
            },
            method: "POST",
            success: function (res) {
              count++;
              //如果是最后一张,则隐藏等待中  
              if (count == tempFilePaths.length) {
                wx.hideToast();
              }
            },
            fail: function (res) {
              wx.hideToast();
              wx.showModal({
                title: '错误提示',
                content: '上传图片失败',
                showCancel: false,
                success: function (res) { }
              })
            }
          });
        }  
        
      }
    })
  },
  /**
   * 预览图片方法
   */
  listenerButtonPreviewImage: function (e) {
    let index = e.target.dataset.index;
    let that = this;
    wx.previewImage({
      current: that.data.tempFilePaths[index],
      urls: that.data.tempFilePaths,
      success: function (res) {
        //console.log(res);
      },
      fail: function () {
        //console.log('fail')
      }
    })
  },

  //选择用途后加样式
  select_use: function (e) {
    this.setData({
      'form.state': e.currentTarget.dataset.id,
    });
    console.log(this.data.form)
  },
  handleTitleblur(e){
    this.setData({
      'form.title':e.detail.value
    })
    console.log(this.data.form)
  },
  handleContentblur(e){
    this.setData({
      'form.content':e.detail.value
    })
    console.log(this.data.form)
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
  // 长按删除图片
  // deleteImage: function (e) {
  //   var that = this;
  //   var images = that.data.images;
  //   var index = e.currentTarget.dataset.index;
  //   wx.showModal({
  //     title: '提示',
  //     content: '确定要删除此图片吗？',
  //     success: function (res) {
  //       if (res.confirm) {
  //         console.log('点击确定了');
  //         images.splice(index, 1);
  //       } else if (res.cancel) {
  //         console.log('点击取消了');
  //         return false;
  //       }
  //       that.setData({
  //         images
  //       });
  //     }
  //   })
  // }

  
  submitForm(e) {
    if(this.data.form.title==""){
      wx.showToast({
        title: '请输入标题',
        icon:"none"
      })
    } else if (this.data.form.content == ""){
      wx.showToast({
        title: '请输入帖子内容',
        icon: "none"
      })
    }else if(this.data.form.tite!=""&&this.data.form.content!=""){
      wx.request({
        url: 'http://192.168.1.168/Forum/insert_post', //仅为示例，并非真实的接口地址
        data: {
          lable:this.data.form.state,
          title:this.data.form.title,
          content:this.data.form.content
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res.data)
          if(res.data.code==1){
            wx.navigateBack({
              delta: 1,
            })
          }
        }
      })
    }
    
  }


})



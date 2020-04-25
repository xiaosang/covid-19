// pages/doctor/doctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cxt: null,
    imgPath: '',//上传图片
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 上报提醒
   */
  onTapPost: function () {
    if(this.data.imgPath == '') {
      wx.showToast({
        title: '请先选择试纸',
        icon: 'none',
        duration: 1000
      })
    } else {
      wx.showToast({
        title: '上报成功',
        icon: 'success',
        duration: 1000
      })
    }
  },
  onClickScan: function () {
    //选择图片或拍照
    wx.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          imgPath: res.tempFilePaths[0]
        })
        // this.data.imgPath = res.tempFilePaths
        // console.log(this.data.imgPath)
      }
    })

    // this.ctx.takePhoto({
    //   quality: 'high',
    //   success: (res) => {
    //     // wx.getFileSystemManager().readFile({
    //     //   // filePath:
    //     // });
    //   },
    //   error(e) {
    //     console.log(e.detail)
    //   }
      
    // })
  }
})
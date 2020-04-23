// pages/doctor/doctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cxt: null,
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

  onClickScan: function () {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        // wx.getFileSystemManager().readFile({
        //   // filePath:
        // });
      },
      error(e) {
        console.log(e.detail)
      }
      
    })
  }
})
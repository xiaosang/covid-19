// pages/doctor/doctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoShow: false,
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
    wx.showActionSheet({
      itemList: ['识别试纸'],
      success: (res) => {
        this.setData({
          infoShow: true
        })
      },
      fail: (res) => {
        console.log(res.errMsg)
      }
    })
  }
})
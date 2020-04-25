// pages/doctor/doctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: "../../res/images/barcode.png",
    color: "#ccc",
    resultColor: "#ccc", // rgb(54, 155, 238)
    name: "拍照后自动识别",
    gender: "拍照后自动识别",
    phone: "拍照后自动识别",
    result: "拍照后自动识别"
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

  onClickScan: function () {
    const self = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        
        self.setData({
          imageUrl: tempFilePaths[0],
          result: "阳性",
          resultColor: "green",
          name: "拖布福斯基",
          gender: "男",
          color: "black",
          phone: "18338911967"
        })

      }
    })
  },

  onTapPost() {
    if (this.data.name == "拍照后自动识别") {
      wx.showToast({
        title: '请先拍摄试纸！',
        icon: 'none',
        duration: 2000
      })
      return
    }


    wx.showLoading({
      title: '上报中...'
    })
    setTimeout(() => {
      wx.hideLoading({
        complete: (res) => {
          wx.showToast({
            title: '上报成功',
            icon: 'success',
            duration: 2000
          })
        },
      })
    }, 2000);

    
  }
})
// pages/home/home.js
Page({

    /**
     * Page initial data
     */
    data: {
      
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {

    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function () {

    },

    onTapDoctor: function() {
        wx.navigateTo({
          url: '../doctor/doctor',
        })
    },
    onTapData: function () {
      wx.navigateTo({
        url: '../datas/datas',
      })
    }
})
var information = require('../../data/information.js');
var work = require('../../data/work.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
      imgmode:"aspectFill",
      name:"王洁",
      post:"前端开发工程师",
      myimg:"../../img/imgs.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let normalData = {

    }
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
    this.setData({
      "information": information.data,
      "workList": work.data
    })
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
    
  }
})
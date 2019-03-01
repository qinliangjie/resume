// var information = require('../../data/information.js');
// var work = require('../../data/work.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
      imgmode:"aspectFill",
    informatin: {
      "name": "覃良洁",
      "post": "3年前端开发",
      "sex": "女",
      "age": "25",
      "alive": "江苏省苏州市",
      "school": "东华理工大学",
      "major": "计算机科学与技术",
      "schoolstart": "2012/09",
      "schoolend": "2016/06",
      "education": "本科",
      "skill": "还行吧还行吧还行吧还行吧还行吧还行吧还行吧还行吧还行吧还行吧还行吧",
      "hobbies": "",
      "evaluation": "还行吧还行吧还行吧还行吧还行吧还行吧还行吧还行吧还行吧还行吧还行吧"
    },
    workList: [{
      "id": 1,
      "startTime": "2018/06",
      "endTime": "至今",
      "company": "苏州爱洛克信息技术有限公司",
      "post": "web前端开发"
    }, {
      "id": 2,
      "startTime": "2017/06",
      "endTime": "2018/06",
      "company": "苏州金瑞阳信息技术有限公司",
      "post": "web前端开发"
    }, {
      "id": 3,
      "startTime": "2016/06",
      "endTime": "2017/06",
      "company": "苏州云极客信息技术有限公司",
      "post": "web前端开发"
    }, {
      "id": 4,
      "startTime": "2015/06",
      "endTime": "2016/06",
      "company": "苏州云购信息技术有限公司",
      "post": "web前端开发实习生"
    }]
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
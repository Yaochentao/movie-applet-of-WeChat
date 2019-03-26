//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    inTheaters: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    var that = this;


    wx.request({
      // url: 'http://t.yushu.im/v2/movie/in_theaters?city=杭州&start=0&count=10',
      url: 'https://douban.uieee.com/v2/movie/in_theaters?city=杭州&start=0&count=10',
      // url: 'https://douban.uieee.com/v2/movie/coming_soon?start=0&count=3',
       // 仅为示例，并非真实的接口地址
      // data: {
      //   x: '',
      //   y: ''
      // },
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {

        console.log(typeof (res.data.subjects))
        let inTheaters = that.data.inTheaters.concat(res.data.subjects)
        that.setData({
          inTheaters: res.data.subjects,
        })
        console.log(typeof(that.data.inTheaters))

      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  toMovie(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/movie/movie?id='+e.currentTarget.dataset.id
    })
  }
})
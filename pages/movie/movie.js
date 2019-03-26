// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    movieDetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    this.setData({
        id: options.id
      }),
      wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/'+that.data.id,
      // url: 'http://t.yushu.im/v2/movie/subject/' + that.data.id,
        header: {
          'content-type': 'json' // 默认值
        },
        success(res) {
          that.setData({
            movieDetail: res.data
          })
          console.log(res.data)

        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  openPrevue(e){
    console.log(e.currentTarget.dataset.url);
    wx.navigateTo({
      url: '/pages/prevue/prevue?url='+e.currentTarget.dataset.url,
    })
  }
})
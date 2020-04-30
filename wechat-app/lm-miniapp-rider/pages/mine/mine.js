import {request, getRid} from '../../utils/util'

// pages/mine/mine.js
Page({
  data: {
    rid: '',
    userInfo: {},
    show: false,
    actions: [
      { name: '接单', value: 0 },
      { name: '休息', value: 1 }
    ],
    statusMap: {
      0: '接单中',
      1: '休假中'
    },
    status: 0
  },
  onLoad (options) {
    function push(array, ...items) {
      array.push(...items);
      }
    function add(x, y) {
      return x + y;
    }
    var numbers = [4, 38];

    add(...numbers) // 42
    console.log(add(...numbers));

    this.setData({
      rid: getRid(),
      service: 'gz.lm.index'
    })
    this.getRiderDetail()
  },

  getRiderDetail () {
    request('getRiderDetail', {
      rid: this.data.rid,
      service: 'gz.lm.dispath'
    }).then( r => {
      console.log(r.data);
      this.setData({
        userInfo: r.data
      })
    })
  },

  changeStatus () {
    this.setData({
      show: true
    })
  },
  onClose (e) {
    this.setData({
      show: false
    })
  },
  onSelect (e) {
    const value = e.detail.value
    this.setData({
      status: value,
      show: false
    })
  },
  dailyOrder () {
    wx.navigateTo({
      url: '/pages/dailyOrder/dailyOrder'
    })
  },

  myWallet () {
    wx.navigateTo({
      url: '/pages/mineChildren/myWallet/myWallet'
    })
  },

  myEvaluate () {
    wx.navigateTo({
      url: '/pages/mineChildren/myEvaluate/myEvaluate'
    })
  },

  onchangeSetting(){
    wx.navigateTo({
      url:'/pages/mineChildren/setting/setting'
    })
  },

  onmyData () {
    wx.navigateTo({
      url: '/pages/mineChildren/myData/myData'
    })
  },

  oncredit () {
    wx.navigateTo({
      url: '/pages/mineChildren/credit/credit'
    })
  },

  ticketRule () {
    wx.navigateTo({
      url: '/pages/mineChildren/ticketRule/ticketRule'
    })
  },

  myTicket () {
    wx.navigateTo({
      url: '/pages/myTicket/myTicket'
    })
  }
})
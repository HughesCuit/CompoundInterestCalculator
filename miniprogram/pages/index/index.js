//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },
  bindPrincipalInput: function(e) {
    this.setData({
      principal: e.detail.value
    })
  },
  bindInterestInput: function(e) {
    this.setData({
      interest: e.detail.value
    })
  },
  bindPeriodInput: function(e) {
    this.setData({
      period: e.detail.value
    })
  },
})

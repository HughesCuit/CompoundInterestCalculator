//index.js
const app = getApp()

Page({
  data: {
    principal: null,
    interest: null,
    period: null,
    income: null
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
  checkInputCompleteAndCalc: function() {
    const {principal, interest, period } = this.data
    if (principal != null && interest != null && period != null) {
      let income = 0
      for (let year = 0; year < period; year++) {
        income += (income + principal) * (100 + interest)/100
      }
      return income
    }
    return null
  },
})

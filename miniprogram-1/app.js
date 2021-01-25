var plugin = requirePlugin("chatbot");

App({
    onLaunch: function () {
        wx.login({
          success: (res) => {
              // 通过code换取openid
              if (res.code) {
                  wx.request({
                      url: "",
                      method: "post",
                      data: {
                          code: res.code,
                      },
                      success: (res) => {
                          if (res.data && res.data.openid) {
                              // 获取的openid存入storage，方便之后使用
                              wx.setStorageSync("openId", res.data.openid);
                          }
                      },
                  });
              }
              plugin.init({
                appid: "CBTuL6NX4nV26XQJTWn0REDqEIQ9Z0", //小程序示例账户，仅供学习和参考
                openid: "", //用户的openid，必填项，可通过wx.login()获取code，然后通过后台接口获取openid
                guideList:["社会成员是指什么","四星信用等次的年度评价指标得分为多少","服役期间荣立三等功的加几分","信用基金包括哪些类别"],
                userName: "", // 用户昵称
                anonymous: false, // 是否允许匿名用户评价，默认为false，设为ture时，未传递userName、userHeader两个字段时将弹出登录框
                success: () => {}, //非必填
                fail: (error) => {}, //非必填
            });
          },
          fail: () => {},
          complete: () => {},
      });
    },

});
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

wx.cloud.getTempFileURL({
  fileList: ['cloud://xxx.png'],                                      
  success: res => {
    // fileList 是一个有如下结构的对象数组
    // [{
    //    fileID: 'cloud://xxx.png', // 文件 ID
    //    tempFileURL: '', // 临时文件网络链接
    //    maxAge: 120 * 60 * 1000, // 有效期
    // }]
    return(res.fileList)
  },
  fail: console.error
})
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
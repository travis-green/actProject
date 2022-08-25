// entry_dev.js
// 开发环境全局变量配置
window.g_info = {
  qts_bean: 'https://dev-m.qtshe.com',
  user_api: 'https://dev-user.qtshe.com',
  qts_api: 'https://dev-api.qtshe.com',
  ptp_api: 'https://dev-ptp.qtshe.com',
  qtbao_domain: 'http://dev-qtbao.qtshe.com',
  wx_appid: 'wx85e99e7299bb809f',
  env: 'development'
}
require('./main.js')

//正式环境
// window.g_info = {
//   qts_bean: 'https://m.qtshe.com',
//   user_api: 'https://user.qtshe.com',
//   qts_api: 'https://api.qtshe.com',
//   ptp_api: 'https://ptp.qtshe.com',
//   wx_appid: 'wx85e99e7299bb809f',
//   env: 'development'
// }
// require('./main.js')

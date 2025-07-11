const fetch = require('node-fetch')

module.exports = async (query) => {
  return await fetch(decodeURIComponent(query.url), {
    headers: {
      // 模拟浏览器 UA（网易云可能验证）
      'User-Agent': 'Mozilla/5.0',
      Referer: 'https://music.163.com/',
    },
  })
}

const { default: axios } = require('axios')
const createOption = require('../util/option.js')
module.exports = async (query, request) => {
  const data = {
    id: query.id,
    br: parseInt(query.br || 999000),
  }
  const res = await request(
    `/api/song/enhance/download/url`,
    data,
    createOption(query),
  )

  if (res.body && res.body.data && res.body.data.url) {
    const response = await axios({
      url: res.body.data.url,
      method: 'GET',
      responseType: 'stream', // 重要：使用 stream 下载大文件
    })

    return response
  }
}

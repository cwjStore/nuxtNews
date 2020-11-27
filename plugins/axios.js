export default function ({app: { $axios }}) {

    // $axios.defaults.baseURL = 'http://v.juhe.cn'
  // 基本配置
//   axios.defaults.timeout = 10000
//   axios.defaults.headers.post['Content-Type'] = 'application/json'
//   axios.defaults.headers.patch['Content-Type'] = 'application/json'
//   axios.defaults.headers.put['Content-Type'] = 'application/json'

  // 请求回调
  $axios.onRequest((config) => {
    // console.log('config', config)
  })

  // 返回回调
  $axios.onResponse((res) => {
    // console.log('res', res)
  })

  // 错误回调
  $axios.onError((error) => {
    // console.log('error', error)
  })
}

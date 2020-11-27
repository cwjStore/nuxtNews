import axios from 'axios'

const baseURL = 'http://v.juhe.cn'

const service = axios.create({
  baseURL
})

/**
 * 请求拦截器
 * 功能：配置请求头，全局配置报错提示
 */
service.interceptors.request.use(config => {
  // let token = Vue.$cookies.get('token');
  // if (!config.headers) {
  //   config.headers = {}
  // }
  // config.headers['Authorization'] = 'Bearer ' + token;
  console.log('请求拦截器',config)
  return config
}, error => {
  return Promise.reject(error)
});

/**
 * 响应拦截器
 * 功能：处理异常
 */
service.interceptors.response.use(config => {
  return config
}, error => {
  return Promise.reject(error)
});

export default service

import Taro from '@tarojs/taro'
import mock from './mock'

/* TODO 时间关系暂时使用本地 mock 数据 */
export default function fetch(options) {
  // const { url, payload, method = 'GET' } = options
  // return Taro.request({
  //   url,
  //   method,
  //   data: payload,
  // })
  return Promise.resolve({ data: mock(options) })
}

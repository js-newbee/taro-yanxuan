import Taro from '@tarojs/taro'
import mock from './mock'

/* TODO 时间关系暂时使用本地 mock 数据 */
export default function fetch({ url, payload }) {
  // return Taro.request({
  //   url,
  //   data: payload
  // })
  return Promise.resolve({ data: mock[url] })
}

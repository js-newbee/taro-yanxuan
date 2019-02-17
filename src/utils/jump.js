import Taro from '@tarojs/taro'

const PAGE_WEBVIEW = '/pages/webview/webview'

/**
 * // NOTE 后端返回的 url 可能是网页链接，需要在 webview 中打开
 * 也可能是小程序自身的链接，只能用 navigate/redirect 之类的打开
 * 就需要有个地方统一判断处理
 */
export default function jump(options) {
  const { url, title = '', payload = {}, method = 'navigateTo' } = options

  if (/^https?:\/\//.test(url)) {
    Taro[method]({
      url: `${PAGE_WEBVIEW}?${urlStringify({ url, title })}`
    })
  } else if (/^\/pages\//.test(url)) {
    // TODO H5 不支持 switchTab，暂时 hack 下
    if (process.env.TARO_ENV === 'h5' && method === 'switchTab') {
      Taro.navigateBack({ delta: Taro.getCurrentPages().length })
      Taro.navigateTo({ url })
      return
    }

    Taro[method]({
      url: `${url}?${urlStringify(payload)}`
    })
  }
}

function urlStringify(payload, encode = true) {
  const arr = Object.keys(payload).map(key =>
    `${key}=${encode ? encodeURIComponent(payload[key]) : payload[key]}`
  )
  return arr.join('&')
}

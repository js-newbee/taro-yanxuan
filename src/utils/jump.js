import Taro from '@tarojs/taro'

const PAGE_WEBVIEW = '/pages/webview/webview'

/**
 * XXX 实际业务中，后端返回的 url 可能是网页链接，需要在 webview 中打开
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

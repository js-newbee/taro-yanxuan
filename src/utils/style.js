import Taro from '@tarojs/taro'

const NAVIGATOR_HEIGHT = 44
const TAB_BAR_HEIGHT = 50

/**
 * TODO Taro 可用高度的计算有问题
 */
export function getWindowHeight() {
  const info = Taro.getSystemInfoSync()
  const { windowHeight, statusBarHeight } = info

  if (process.env.TARO_ENV === 'rn') {
    return windowHeight - statusBarHeight - NAVIGATOR_HEIGHT - TAB_BAR_HEIGHT
  } else if (process.env.TARO_ENV === 'h5') {
    return `${windowHeight - TAB_BAR_HEIGHT}px`
  }

  return `${windowHeight}px`
}

/**
 * XXX 样式在编译时会通过 postcss 进行处理，但 js 中的 style 可能需要运行时处理
 * 例如加 prefix，或者对 RN 样式的兼容，又或是在此处统一处理 Taro.pxTransform
 * 此处只做演示，若需要做完善点，可以借助 https://github.com/postcss/postcss-js
 */
export function postcss(style) {
  if (!style) {
    return style
  }
  const { background, ...restStyle } = style
  const newStyle = {}
  if (background) {
    // RN 不支持 background
    newStyle.backgroundColor = background
  }
  return { ...restStyle, ...newStyle }
}

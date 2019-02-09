import Taro from '@tarojs/taro'

const H5_TAB_BAR_HEIGHT = 50

export function getWindowHeight() {
  const info = Taro.getSystemInfoSync()
  const { windowHeight } = info

  if (process.env.TARO_ENV === 'rn') {
    return windowHeight
  } else if (process.env.TARO_ENV === 'h5') {
    // TODO H5 的 windowHeight 没有减去 tabBar 高度
    return `${windowHeight - H5_TAB_BAR_HEIGHT}px`
  }

  return `${windowHeight}px`
}

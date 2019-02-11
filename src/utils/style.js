/* eslint-disable import/prefer-default-export */
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

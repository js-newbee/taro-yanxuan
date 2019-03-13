/**
 * // NOTE 原生支付宝小程序的 API 调用比较麻烦
 * 改造一下以支持 promise 调用
 */
const TaroAlipay = {}
const apiList = ['getAuthCode', 'getAuthUserInfo']

apiList.forEach((api) => {
  TaroAlipay[api] = (options = {}) => {
    return new Promise((resolve, reject) => {
      const { success, fail } = options
      const args = {
        ...options,
        success: (res) => {
          success && success(res)
          resolve(res)
        },
        fail: (err) => {
          fail && fail(err)
          reject(err)
        }
      }
      my[api](args)
    })
  }
})

export default TaroAlipay

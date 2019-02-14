/* XXX HOST、HOST_M 是在 config 中配置的 */
/* eslint-disable */
export const host = HOST
export const hostM = HOST_M
/* eslint-enable */

export const CDN = 'https://yanxuan.nosdn.127.net'

// home
export const API_HOME = `${host}/xhr/index/index.json`
export const API_HOME_SEARCH_COUNT = `${host}/xhr/search/displayBar.json`

// cate
export const API_CATE = `${host}/xhr/list/category.json`

// cart
export const API_CART_NUM = `${host}/xhr/promotionCart/getMiniCartNum.json`

// user
export const API_USER = `${host}/xhr/user/getDetail.json`
export const API_USER_LOGIN = `${host}/xhr/u/mailLogin.json`

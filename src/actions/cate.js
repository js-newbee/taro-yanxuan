import { CATE_MENU, CATE_SUB, CATE_SUB_LIST } from '@constants/cate'
import { API_CATE, API_CATE_SUB, API_CATE_SUB_LIST } from '@constants/api'
import { createAction } from '@utils/redux'

/**
 * 分类菜单、列表
 * @param {*} payload
 */
export const dispatchMenu = payload => createAction({
  url: API_CATE,
  type: CATE_MENU,
  payload
})

/**
 * 子级菜单
 * @param {*} payload
 */
export const dispatchSubMenu = payload => createAction({
  url: API_CATE_SUB,
  type: CATE_SUB,
  payload
})

/**
 * 子级列表
 * @param {*} payload
 */
export const dispatchSubList = payload => createAction({
  url: API_CATE_SUB_LIST,
  type: CATE_SUB_LIST,
  cb: res => ({ ...res, id: payload.categoryL2Id }),
  payload
})

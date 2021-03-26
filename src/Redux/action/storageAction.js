import { createAction } from "@reduxjs/toolkit"

export const setSortParams = createAction('SET_SORT_PARAMS')
export const setSortCending = createAction('SET_SORT_CENDING')
export const setStorage = createAction('SET_STORAGE')
export const removeStorage = createAction('REMOVE_PRODUCT_FROM_CART')
export const rewriteOrderItem = createAction('REWRITE_ORDER_ITEM')
export const setEmptyBasket = createAction('SET_EMPTY_BASKET')
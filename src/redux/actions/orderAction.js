export const SET_ORDER = "SET_ORDER";
export const SET_NEW_ORDER = "SET_NEW_ORDER";
export const SET_SUBSTRACT_ORDER = "SET_SUBSTRACT_ORDER";

export function setOrderTotal(order) {
  return { type: SET_ORDER, payload: order };
}
export function setEditedOrder(order) {
  return { type: SET_NEW_ORDER, payload: order };
}
export function setSubstractOrder(order) {
  return { type: SET_SUBSTRACT_ORDER, payload: order };
}

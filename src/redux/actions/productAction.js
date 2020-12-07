export const SET_PRODUCT_COLLECTION = "SET_PRODUCT_COLLECTION";

export function setProductCollection(productCollection) {
  return { type: SET_PRODUCT_COLLECTION, payload: productCollection };
}

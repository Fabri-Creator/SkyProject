export const SET_PRODUCT_COLLECTION = "SET_PRODUCT_COLLECTION";

export function setProductCollection(productCollection) {
  console.log("product action =>", productCollection);
  return { type: SET_PRODUCT_COLLECTION, payload: productCollection };
}

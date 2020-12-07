import {
  addObject,
  getAllDocuments,
  setupCollectionObserver,
  listObjects,
  getFilteredProducts,
  removeObjectWithId,
} from "../services/data";

const PRODUCT_COLLECTION = "product";

export async function addProductForm(
  Name,
  Price,
  Brand,
  category,
  Detail,
  pic,
  SizeS,
  SizeM,
  SizeL
) {
  const categories = category.reduce((acc, c) => {
    return { ...acc, [c]: true };
  }, {});
  const productToSave = {
    Ref: `Sky${+new Date()}`,
    Name: Name,
    Price: `${Price} EUR`,
    Brand: Brand,
    Categories: categories,
    Details: Detail,
    CreatedAt: +new Date(),
    Images: [...pic],
    Sizes: { S: SizeS || 0, M: SizeM || 0, L: SizeL || 0 },
  };
  const productId = await addObject(PRODUCT_COLLECTION, productToSave);
  return {
    ...productToSave,
    id: productId,
  };
}

export async function getProductRealTime() {
  const result = await getAllDocuments(PRODUCT_COLLECTION);
  return result;
}

export function productCollectionObserver(callback) {
  return setupCollectionObserver(PRODUCT_COLLECTION, callback);
}

export async function getFilteredProductsItems({ One, Two }) {
  const filterMap = {
    Cat: "Categories",
    Condition: "==",
    One,
    Two,
  };
  return getFilteredProducts(PRODUCT_COLLECTION, filterMap);
}

export async function homeProducts() {
  const db = await listObjects(PRODUCT_COLLECTION);
  return db;
}
export async function deleteProduct(id, obj) {
  await removeObjectWithId(PRODUCT_COLLECTION, id, obj);
  const db = await listObjects(PRODUCT_COLLECTION);
  debugger;
  return db;
}

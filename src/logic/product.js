import { addObject } from "../services/data";

const PRODUCT_COLLECTION = "product";

export async function addProductForm(Name, Brand, Category, Details) {
  const productToSave = {
    Ref: `Sky${+new Date()}`,
    Name: Name,
    Brand: Brand,
    Categories: Category || [],
    Details: Details,
    CreatedAt: +new Date(),
  };
  const productId = await addObject(PRODUCT_COLLECTION, productToSave);
  debugger;
  return {
    ...productToSave,
    id: productId,
  };
}

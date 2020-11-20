import { addObject } from "../services/data";

const PRODUCT_COLLECTION = "product";

export async function addProductForm(
  Name,
  Price,
  Brand,
  Category,
  Detail,
  pic,
  SizeS,
  SizeM,
  SizeL
) {
  const productToSave = {
    Ref: `Sky${+new Date()}`,
    Name: Name,
    Price: `${Price} EUR`,
    Brand: Brand,
    Categories: Category || [],
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

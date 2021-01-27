import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../logic/product";
import { setProductCollection } from "../../redux/actions/productAction";

import "./DeleteProduct.scss";

const DeleteProduct = () => {
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const handlerRemoveProduct = async (obj) => {
    const { id } = obj;
    const newCollection = await deleteProduct(id, obj);
    dispatch(setProductCollection(newCollection));
  };

  return (
    <div className="delete-main-container">
      {admin.product !== false ? (
        <div className="delete-container">
          <div className="delete-product-title">Delete Product</div>
          <div className="delete-product-detail">
            <p>Name:</p>
            {admin.product.Name}
          </div>
          <div className="delete-product-detail">
            <p>Brand:</p>
            {admin.product.Brand}
          </div>
          <div className="delete-product-detail">
            <p>ID:</p>
            {admin.product.id}
          </div>

          <div>
            <div className="delete-product-images">
              <img
                alt="first-pic"
                className="delete-item-img"
                src={admin.product.Images[0]}
              ></img>
            </div>
          </div>

          <button onClick={() => handlerRemoveProduct(admin.product)}>
            Delete Product
          </button>
        </div>
      ) : (
        <div>Choose an action</div>
      )}
    </div>
  );
};
export default DeleteProduct;

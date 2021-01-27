import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import "./EditProduct.scss";

const EditProduct = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, errors } = useForm();
  const admin = useSelector((state) => state.admin);

  return (
    <div className="edit-main-container">
      {admin.product ? (
        <>
          <div className="edit-product-title">Edit Product</div>
          <form className="edit-product-form">
            <div className="edit-product-info">
              <p>Name: </p>
              {` ${admin.product.Name}`}
            </div>
            <div className="edit-product-info">
              <p>Brand: </p>
              {` ${admin.product.Brand}`}
            </div>
            <div className="edit-product-info">
              <p>Price: </p>
              {` ${admin.product.Price}`}
            </div>
            <div className="edit-product-info">
              <p>Ref:</p>
              {` ${admin.product.Ref}`}
            </div>
            <div className="edit-product-info">
              <p>Categories: </p>
              {admin.product &&
                Object.keys(admin.product.Categories).map((cate, i) => (
                  <p key={i + cate} className="p-Category">{` - ${[cate]} `}</p>
                ))}
            </div>
            <div className="size-main-conainer">
              <p>Sizes</p>
              <div className="size-container">
                <p>S</p>
                <p>{admin.product.Sizes.S}</p>
              </div>
              <div className="size-container">
                <p>M</p>
                <p>{admin.product.Sizes.M}</p>
              </div>
              <div className="size-container">
                <p>L</p>
                <p>{admin.product.Sizes.L}</p>
              </div>
            </div>
            <div className="img-container">
              {admin.product &&
                admin.product.Images.map((img, i) => (
                  <div className="img-container-single">
                    <img
                      className="img-container-single-pic"
                      src={img}
                      alt={i}
                    ></img>
                  </div>
                ))}
            </div>
            <button>Editar</button>
          </form>
        </>
      ) : (
        <>Choose function (params) {}</>
      )}
    </div>
  );
};
export default EditProduct;

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import "./EditProduct.scss";

const EditProduct = () => {
  // const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const [modal, setModal] = useState(false);
  const [nameModal, setNameModal] = useState(false);

  const handelModalOn = () => {
    setModal(true);
  };
  const handelModalOff = () => {
    setModal(false);
    setNameModal(false);
  };
  const handeNameModalOn = () => {
    handelModalOn();
    setNameModal(true);
  };

  return (
    <div className="edit-main-container">
      {modal && (
        <div className="edit-modal">
          <i class="far fa-times-circle" onClick={() => handelModalOff()}></i>
        </div>
      )}
      {admin.product ? (
        <>
          <div className="edit-product-title">Edit Product</div>
          <div className="edit-product-info" onClick={() => handeNameModalOn()}>
            {nameModal && <div className="edit-product-info-modal"></div>}
            <p> {`Name: ${admin.product.Name}`}</p>
            <div className="edit-product-info-icon">
              <i class="fas fa-edit"></i>
            </div>
          </div>
          <div className="edit-product-info" onClick={() => handelModalOn()}>
            <p> {`Brand: ${admin.product.Brand}`}</p>
            <div className="edit-product-info-icon">
              <i class="fas fa-edit"></i>
            </div>
          </div>
          <div className="edit-product-info" onClick={() => handelModalOn()}>
            <p>{`Price: ${admin.product.Price}`}</p>
            <div className="edit-product-info-icon">
              <i class="fas fa-edit"></i>
            </div>
          </div>
          <div className="edit-product-info-ref">
            <p>Ref:</p>
            {` ${admin.product.Ref}`}
          </div>
          <div className="edit-product-info">
            <div
              className="edit-product-info-cat"
              onClick={() => handelModalOn()}
            >
              Categories:
              {admin.product &&
                Object.keys(admin.product.Categories).map((cate, i) => (
                  <p key={i + cate} className="p-Category">{` - ${[cate]} `}</p>
                ))}
            </div>
            <div className="edit-product-info-icon">
              <i class="fas fa-edit" onClick={() => handelModalOn()}></i>
            </div>
          </div>
          <div className="size-main-container">
            <div
              className="edit-size-container"
              onClick={() => handelModalOn()}
            >
              <p>Size: S</p>
              <p>{`${admin.product.Sizes.S} units`}</p>
              <div className="edit-product-info-icon-size">
                <i class="fas fa-edit"></i>
              </div>
            </div>
            <div
              className="edit-size-container"
              onClick={() => handelModalOn()}
            >
              <p>Size: M</p>
              <p>{`${admin.product.Sizes.M} units`}</p>
              <div className="edit-product-info-icon-size">
                <i class="fas fa-edit"></i>
              </div>
            </div>
            <div
              className="edit-size-container"
              onClick={() => handelModalOn()}
            >
              <p>Size: L</p>
              <p>{`${admin.product.Sizes.L} units`}</p>
              <div className="edit-product-info-icon-size">
                <i class="fas fa-edit"></i>
              </div>
            </div>
          </div>
          <div className="img-container">
            {admin.product &&
              admin.product.Images.map((img, i) => (
                <div
                  className="img-container-single"
                  onClick={() => handelModalOn()}
                >
                  <img
                    className="img-container-single-pic"
                    src={img}
                    alt={i}
                  ></img>
                  <div className="edit-product-info-icon-size-img">
                    <i class="fas fa-edit"></i>
                  </div>
                </div>
              ))}
          </div>
          <div className="button-container">
            <button className="button-edit-product">Edit</button>
          </div>
        </>
      ) : (
        <>Choose function (params) {}</>
      )}
    </div>
  );
};
export default EditProduct;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { editProductInfo } from "../../logic/product";

import "./EditProduct.scss";

const EditProduct = () => {
  // const dispatch = useDispatch();
  const { register, handleSubmit, reset, errors } = useForm();
  const productData = useSelector((state) => state.admin);
  const [newProductData, setNewProductData] = useState(productData);
  const [modal, setModal] = useState(false);
  const [nameModal, setNameModal] = useState(false);
  const [brandModal, setBrandModal] = useState(false);
  const [priceModal, setPriceModal] = useState(false);
  const [infoType, setInfoType] = useState("");
  const [cateModal, setCateModal] = useState("");
  const [sizeModal, setSizeModal] = useState("");

  const handleModalOn = () => {
    setModal(true);
  };
  const handleModalOff = () => {
    setModal(false);
    setNameModal(false);
    setBrandModal(false);
    setPriceModal(false);
    setCateModal(false);
    setSizeModal(false);
  };
  const handleNameModalOn = () => {
    handleModalOn();
    setNameModal(true);
    setInfoType("Name");
  };
  const handleBrandModalOn = () => {
    handleModalOn();
    setBrandModal(true);
    setInfoType("Brand");
  };
  const handlePriceModalOn = () => {
    handleModalOn();
    setPriceModal(true);
    setInfoType("Price");
  };
  const handleCateModalOn = () => {
    handleModalOn();
    setCateModal(true);
    setInfoType("Cate");
  };
  const handleSizeModalOn = () => {
    handleModalOn();
    setSizeModal(true);
    setInfoType("Size");
  };

  const onSubmit = async (data) => {
    const { newProductInfo } = data;
    const newData = editProductInfo(infoType, newProductInfo, newProductData);
    setNewProductData(newData);
    handleModalOff();
    console.log("New info", newProductData);
    return newData;
  };

  return (
    <div className="edit-main-container">
      {modal && (
        <div className="edit-modal">
          <i
            className="far fa-times-circle"
            onClick={() => handleModalOff()}
          ></i>
        </div>
      )}
      {newProductData.product ? (
        <>
          <div className="edit-product-title">Edit Product</div>
          <div
            className="edit-product-info"
            onClick={() => handleNameModalOn()}
          >
            {nameModal && (
              <div className="edit-product-info-modal">
                <h4>Edit product name</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="input-class"
                    name="newProductInfo"
                    placeholder="Enter new name"
                    ref={register({
                      required: true,
                      maxLength: 50,
                      minLength: 3,
                    })}
                  />
                  <button>Acept</button>
                </form>
              </div>
            )}
            <p> {`Name: ${newProductData.product.Name}`}</p>

            <div className="edit-product-info-icon">
              <i class="fas fa-edit"></i>
            </div>
          </div>
          <div
            className="edit-product-info"
            onClick={() => handleBrandModalOn()}
          >
            {brandModal && (
              <div className="edit-product-info-modal">
                <h4>Edit product brand</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="input-class"
                    name="newProductInfo"
                    placeholder="Enter new Brand"
                    ref={register({
                      required: true,
                      maxLength: 50,
                      minLength: 3,
                    })}
                  />
                  <button>Acept</button>
                </form>
              </div>
            )}
            <p> {`Brand: ${newProductData.product.Brand}`}</p>
            <div className="edit-product-info-icon">
              <i class="fas fa-edit"></i>
            </div>
          </div>
          <div
            className="edit-product-info"
            onClick={() => handlePriceModalOn()}
          >
            {priceModal && (
              <div className="edit-product-info-modal">
                <h4>Edit product price</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="input-class"
                    name="newProductInfo"
                    placeholder="Enter new Price"
                    type="number"
                    placeholder="Enter product price"
                    ref={register({ required: true, min: 1.99, max: 999 })}
                  />
                  <button>Acept</button>
                </form>
              </div>
            )}
            <p>{`Price: ${newProductData.product.Price}`}</p>
            <div className="edit-product-info-icon">
              <i class="fas fa-edit"></i>
            </div>
          </div>
          <div className="edit-product-info-ref">
            <p>Ref:</p>
            {` ${newProductData.product.Ref}`}
            <div className="edit-product-info-icon">
              <i class="fas fa-edit"></i>
            </div>
          </div>
          <div
            className="edit-product-info"
            onClick={() => handleCateModalOn()}
          >
            {cateModal && (
              <div className="edit-product-info-modal">
                <h4>Select product categories</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label>Mujer</label>
                  <input
                    type="checkbox"
                    className="checkbox-class"
                    name="newProductInfo"
                    value="Mujer"
                    ref={register}
                  />
                  <label>Hombre</label>
                  <input
                    type="checkbox"
                    className="checkbox-class"
                    name="newProductInfo"
                    value="Hombre"
                    ref={register}
                  />
                  <label>Novedades</label>
                  <input
                    type="checkbox"
                    className="checkbox-class"
                    name="newProductInfo"
                    value="Novedades"
                    ref={register}
                  />
                  <button>Acept</button>
                </form>
              </div>
            )}
            <div className="edit-product-info-cat">
              Categories:
              {newProductData.product &&
                Object.keys(
                  newProductData.product.Categories
                ).map((cate, i) => (
                  <p key={i + cate} className="p-Category">{` - ${[cate]} `}</p>
                ))}
            </div>
            <div className="edit-product-info-icon">
              <i class="fas fa-edit" onClick={() => handleModalOn()}></i>
            </div>
          </div>
          <div className="size-main-container">
            {sizeModal && (
              <div className="edit-product-info-modal">
                <h4>Enter stock size</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="sizes-input-div-container">
                    <label>S</label>
                    <input
                      className="input-class"
                      type="number"
                      name="newProductInfoS"
                      ref={register({ required: true, min: 0, max: 999 })}
                    />
                  </div>
                  <div className="sizes-input-div-container">
                    <label>M</label>
                    <input
                      className="input-class"
                      type="number"
                      name="newProductInfoM"
                      ref={register({ required: true, min: 0, max: 999 })}
                    />
                    {errors.productSizeM && <span>Enter positive number</span>}
                  </div>
                  <div className="sizes-input-div-container">
                    <label>L</label>
                    <input
                      className="input-class"
                      type="number"
                      name="newProductInfoL"
                      ref={register({ required: true, min: 0, max: 999 })}
                    />
                  </div>
                  <button>Acept</button>
                </form>
              </div>
            )}
            <div
              className="edit-size-container"
              onClick={() => handleSizeModalOn()}
            >
              <p>Size: S</p>
              <p>{`${newProductData.product.Sizes.S} units`}</p>
              <div className="edit-product-info-icon-size">
                <i class="fas fa-edit"></i>
              </div>
            </div>
            <div
              className="edit-size-container"
              onClick={() => handleSizeModalOn()}
            >
              <p>Size: M</p>
              <p>{`${newProductData.product.Sizes.M} units`}</p>
              <div className="edit-product-info-icon-size">
                <i class="fas fa-edit"></i>
              </div>
            </div>
            <div
              className="edit-size-container"
              onClick={() => handleSizeModalOn()}
            >
              <p>Size: L</p>
              <p>{`${newProductData.product.Sizes.L} units`}</p>
              <div className="edit-product-info-icon-size">
                <i class="fas fa-edit"></i>
              </div>
            </div>
          </div>

          <div className="img-container">
            {newProductData.product &&
              newProductData.product.Images.map((img, i) => (
                <div className="img-container-single">
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
        <>Elegir accion </>
      )}
    </div>
  );
};
export default EditProduct;

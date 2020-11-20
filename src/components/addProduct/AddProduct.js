import { useForm } from "react-hook-form";
import { useState } from "react";
import { addProductForm } from "../../logic/product";
import UploadFile from "../UploadFile/UploadFile";
import "./AddProduct.scss";

const AddProduct = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const [picURL, setPicURL] = useState([]);
  const onSubmit = async (data) => {
    const {
      productName,
      productPrice,
      productBrand,
      productCategory,
      productDetails,
      productSizeS,
      productSizeM,
      productSizeL,
    } = data;
    const newProduct = await addProductForm(
      productName,
      productPrice,
      productBrand,
      productCategory,
      productDetails,
      picURL,
      productSizeS,
      productSizeM,
      productSizeL
    );

    setPicURL([]);
    reset();
    return newProduct;
  };

  const handleFileUpload = (uploadURL) => {
    setPicURL(uploadURL);
  };

  return (
    <div className="add-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-div-container">
          <input
            className="input-class"
            name="productName"
            placeholder="Product name"
            ref={register({ required: true })}
          />
          {errors.productName && <span>Name is required</span>}
        </div>
        <div className="input-div-container">
          <input
            className="price-class"
            name="productPrice"
            placeholder="Product price"
            ref={register({ required: true })}
          />
          {errors.productPrice && <span>price is required</span>}
        </div>
        <div className="input-div-container">
          <input
            className="input-class"
            name="productBrand"
            placeholder="Product brand"
            ref={register({ required: true })}
          />
          {errors.productName && <span>Brand is required</span>}
        </div>
        <div className="textarea-div-container">
          <label>Mujer</label>
          <input
            type="checkbox"
            className="checkbox-class"
            name="productCategory"
            value="Mujer"
            ref={register}
          />
          <label>Hombre</label>
          <input
            type="checkbox"
            className="checkbox-class"
            name="productCategory"
            value="Hombre"
            ref={register}
          />
        </div>
        <div className="sizes-div-container">
          <p>Sizes</p>
          <div className="sizes-input-div-container">
            <label>S</label>
            <input
              className="input-class"
              name="productSizeS"
              ref={register({ required: true })}
            />
          </div>
          <div className="sizes-input-div-container">
            <label>M</label>
            <input
              className="input-class"
              name="productSizeM"
              ref={register({ required: true })}
            />
            {errors.productSizeM && <span>Enter number</span>}
          </div>
          <div className="sizes-input-div-container">
            <label>L</label>
            <input
              className="input-class"
              name="productSizeL"
              ref={register({ required: true })}
            />
          </div>
        </div>
        <div className="file-div-container">
          <UploadFile folder="ProductFolder" onFileUpload={handleFileUpload} />
        </div>
        <div className="input-div-container">
          <textarea
            rows="10"
            className="textarea-class"
            name="productDetails"
            placeholder="Details"
            ref={register}
          />
        </div>

        <button>Submmit</button>
      </form>
    </div>
  );
};
export default AddProduct;

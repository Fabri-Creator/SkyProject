import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { addProductForm } from "../../logic/product";
import UploadFile from "../UploadFile/UploadFile";
import "./AddProduct.scss";

const AddProduct = () => {
  const history = useHistory();
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
    console.log("deberiaaa");
    history.push("/admin/login");
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
            ref={register({ required: true, maxLength: 50, minLength: 3 })}
          />
          {errors.productName && (
            <span>Name is required, 3 to 50 characters</span>
          )}
        </div>
        <div className="input-div-container">
          <input
            className="price-class"
            name="productPrice"
            type="number"
            placeholder="Product price"
            ref={register({ required: true, min: 1.99, max: 999 })}
          />
          {errors.productPrice && (
            <span>price is required, more than 1.99 EUR</span>
          )}
        </div>
        <div className="input-div-container">
          <input
            className="input-class"
            name="productBrand"
            placeholder="Product brand"
            ref={register({ required: true, maxLength: 50, minLength: 3 })}
          />
          {errors.productName && (
            <span>Brand is required, 3 to 20 characters</span>
          )}
        </div>
        <div className="category-div-container">
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
          <label>Novedades</label>
          <input
            type="checkbox"
            className="checkbox-class"
            name="productCategory"
            value="Novedades"
            ref={register}
          />
        </div>
        <div className="sizes-div-container">
          <div className="sizes-input-div-container">
            <label>S</label>
            <input
              className="input-class"
              type="number"
              name="productSizeS"
              ref={register({ required: true, min: 0, max: 999 })}
            />
          </div>
          <div className="sizes-input-div-container">
            <label>M</label>
            <input
              className="input-class"
              type="number"
              name="productSizeM"
              ref={register({ required: true, min: 0, max: 999 })}
            />
            {errors.productSizeM && <span>Enter positive number</span>}
          </div>
          <div className="sizes-input-div-container">
            <label>L</label>
            <input
              className="input-class"
              type="number"
              name="productSizeL"
              ref={register({ required: true, min: 0, max: 999 })}
            />
          </div>
        </div>
        <div className="file-div-container">
          <UploadFile folder="ProductFolder" onFileUpload={handleFileUpload} />
        </div>
        <div className="input-div-container">
          <textarea
            rows="10"
            columns="10"
            className="textarea-class"
            name="productDetails"
            placeholder="Details"
            ref={register}
          />
        </div>

        <button className="submit-button">Add</button>
      </form>
    </div>
  );
};
export default AddProduct;

import { useForm } from "react-hook-form";
// import {useState} from "react-dom"
import { addProductForm } from "../../logic/product";
import UploadFile from "../UploadFile/UploadFile";
import "./AddProduct.scss";

const AddProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    const { productName, productBrand, productCategory, productDetails } = data;
    const newProduct = await addProductForm(
      productName,
      productBrand,
      productCategory,
      productDetails
    );
    console.log("newProduct", newProduct);
    return newProduct;
  };

  // const handleFileUpload = (url) => {
  //   pisURL = url;
  // };

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
        <div className="file-div-container">
          <UploadFile
            folder="ProductFolder"
            // onFileUpload={handleFileUpload}
            placeholder="Selecciona un archivo"
          />
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

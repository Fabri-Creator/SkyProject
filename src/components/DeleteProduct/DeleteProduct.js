import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./DeleteProduct.scss";

const DeleteProduct = () => {
  const products = useSelector((state) => state.product);

  return <div className="delete-container">{}</div>;
};
export default DeleteProduct;

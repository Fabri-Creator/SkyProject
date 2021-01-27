import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SecondaryLayout from "../components/Layout/SecondaryLayout/SecondaryLayout";
import ProductList from "../components/ProductList";
import DeleteProduct from "../components/DeleteProduct";
import { productCollectionObserver } from "../logic/product";
import { setProductCollection } from "../redux/actions/productAction";
import "./pages.scss";

const AdminLoginDelete = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    return !user && history.push("/");
  }, [user]);

  useEffect(() => {
    productCollectionObserver((updatedCollection) =>
      dispatch(setProductCollection(updatedCollection))
    );
  }, []);

  return (
    <SecondaryLayout>
      <DeleteProduct></DeleteProduct>
      <ProductList></ProductList>
    </SecondaryLayout>
  );
};

export default AdminLoginDelete;

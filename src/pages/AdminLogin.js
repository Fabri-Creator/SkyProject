import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import AddProduct from "../components/addProduct/AddProduct";
import SecondaryLayout from "../components/Layout/SecondaryLayout/SecondaryLayout";
import ProductList from "../components/ProductList";
import "./pages.scss";

const AdminLogin = () => {
  let history = useHistory();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    return !user && history.push("/");
  }, [user]);

  return (
    <SecondaryLayout>
      <AddProduct></AddProduct>
      <ProductList></ProductList>
    </SecondaryLayout>
  );
};

export default AdminLogin;

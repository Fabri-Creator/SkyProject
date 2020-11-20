import AddProduct from "../components/addProduct/AddProduct";
import SecondaryLayout from "../components/Layout/SecondaryLayout/SecondaryLayout";
import ProductList from "../components/ProductList";
import "./pages.scss";

const AdminLogin = () => {
  return (
    <SecondaryLayout>
      <AddProduct></AddProduct>
      <ProductList></ProductList>
    </SecondaryLayout>
  );
};

export default AdminLogin;

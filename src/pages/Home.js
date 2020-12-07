import MainLayout from "../components/Layout/MainLayout/MainLayout";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";

import "./pages.scss";

const Home = () => {
  return (
    <>
      <MainLayout>
        <ProductDisplay></ProductDisplay>
      </MainLayout>
    </>
  );
};

export default Home;

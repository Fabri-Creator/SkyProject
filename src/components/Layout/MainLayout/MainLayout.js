import "./MainLayout.scss";
import Header from "../../Header";
import Footer from "../../Footer";

const MainLayout = ({ Children }) => {
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  );
};
export default MainLayout;

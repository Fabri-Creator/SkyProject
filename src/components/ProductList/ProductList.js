import "./ProductList.scss";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.product);

  return (
    <div className="product-list-container">
      {products &&
        products.map((p, i) => (
          <div key={i} className="product-item">
            <div className="product-hover">
              <h3 className="product-hover-action">Edit</h3>
              <h3 className="product-hover-action">Delete</h3>
            </div>
            <div className="p-img">
              <img className="p-img-tag" src={p.Images[0]} alt={i}></img>
            </div>
            <div className="p-informacion-general">
              <p className="p-name">{`Name: ${p.Name}`}</p>
              <p className="p-ref">{`Ref: ${p.Ref}`}</p>
              <div className="p-cat-container">
                {p.Categories &&
                  p.Categories.map((cate, i) => (
                    <p key={i + cate} className="p-Category">{`- ${cate} `}</p>
                  ))}
              </div>
            </div>
            <div className="p-informacion-general-middle">
              <p className="p-brand">{`Brand: ${p.Brand}`}</p>
              <p className="p-price">{`Price: ${p.Price}`}</p>
            </div>
            <div className="p-informacion-general-size">
              <div className="size-container">
                <p>S</p>
                <p>{p.Sizes.S}</p>
              </div>
              <div className="size-container">
                <p>M</p>
                <p>{p.Sizes.M}</p>
              </div>
              <div className="size-container">
                <p>L</p>
                <p>{p.Sizes.L}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ProductList;

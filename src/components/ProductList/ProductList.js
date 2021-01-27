import "./ProductList.scss";
import { deleteProduct } from "../../logic/product";
import { useSelector, useDispatch } from "react-redux";
import { setProductCollection } from "../../redux/actions/productAction";
import { setAdmin } from "../../redux/actions/adminAction";
import { useHistory } from "react-router";

const ProductList = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const products = useSelector((state) => state.product);
  const admin = useSelector((state) => state.admin);

  // const handlerRemoveProduct = async (obj) => {
  //   const { id } = obj;
  //   const newCollection = await deleteProduct(id, obj);
  //   dispatch(setProductCollection(newCollection));
  // };

  const handlerSetEdit = () => {
    dispatch(setAdmin("Edit"));
    history.push("/admin/login/edit");
  };

  const handlerSetDelete = () => {
    dispatch(setAdmin("Delete"));
    history.push("/admin/login/delete");
  };

  const handlerSetAdd = () => {
    dispatch(setAdmin("Add"));
    history.push("/admin/login");
  };

  return (
    <div className="main-container">
      <div className="product-searcher">
        <i className="fas fa-search"></i>
        <input
          className="product-searcher-title"
          type="text"
          placeholder="Buscar"
        ></input>
      </div>
      <div className="product-list-container">
        {products &&
          products.map((p, i) => (
            <div key={i} className="product-item">
              {admin === "Add" ? (
                <div className="product-hover">
                  <h3
                    className="product-hover-action"
                    onClick={() => handlerSetEdit()}
                  >
                    Edit
                  </h3>
                  <h3
                    className="product-hover-action"
                    // onClick={() => handlerRemoveProduct(p)}
                    onClick={() => handlerSetDelete()}
                  >
                    Delete
                  </h3>
                </div>
              ) : (
                <></>
              )}

              {admin === "Delete" ? (
                <div className="product-hover">
                  <h3 className="product-hover-action">Edit</h3>
                  <h3
                    className="product-hover-action"
                    onClick={() => handlerSetAdd()}
                  >
                    Add
                  </h3>
                </div>
              ) : (
                <></>
              )}

              {admin === "Edit" ? (
                <div className="product-hover">
                  <h3
                    className="product-hover-action"
                    onClick={() => handlerSetAdd()}
                  >
                    Add
                  </h3>
                  <h3
                    className="product-hover-action"
                    onClick={() => handlerSetDelete()}
                  >
                    Delete
                  </h3>
                </div>
              ) : (
                <></>
              )}

              <div className="p-img">
                <img className="p-img-tag" src={p.Images[0]} alt={i}></img>
              </div>
              <div className="p-informacion-general">
                <p className="p-name">{`Name: ${p.Name}`}</p>
                <p className="p-ref">{`Ref: ${p.Ref}`}</p>
                <div className="p-cat-container">
                  {p.Categories &&
                    Object.keys(p.Categories).map((cate, i) => (
                      <p key={i + cate} className="p-Category">{`- ${[
                        cate,
                      ]} `}</p>
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
    </div>
  );
};
export default ProductList;

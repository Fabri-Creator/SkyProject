import "./ProductList.scss";
import { deleteProduct } from "../../logic/product";
import { useSelector, useDispatch } from "react-redux";
import { setAdmin } from "../../redux/actions/adminAction";
import { useHistory } from "react-router";

const ProductList = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const products = useSelector((state) => state.product);
  const admin = useSelector((state) => state.admin);

  const handlerSetEdit = (p) => {
    const editAdmin = { edit: true, product: p };
    dispatch(setAdmin(editAdmin));
    history.push("/admin/login/edit");
    console.log("changesss", admin);
  };

  const handlerSetDelete = (p) => {
    const deleteAdmin = { delete: true, product: p };
    dispatch(setAdmin(deleteAdmin));
    history.push("/admin/login/delete");
    console.log("changesss", admin);
  };

  const handlerSetAdd = (p) => {
    const addAdmin = { add: true, product: p };
    dispatch(setAdmin(addAdmin));
    history.push("/admin/login");
  };

  return (
    <div className="main-container">
      <div className="product-searcher">
        <i className="fas fa-search"></i>
        <input
          className="product-searcher-title"
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <div className="product-list-container">
        {products &&
          products.map((p, i) => (
            <div key={i} className="product-item">
              {admin.add === true ? (
                <div className="product-hover">
                  <h3
                    className="product-hover-action"
                    onClick={() => handlerSetEdit(p)}
                  >
                    Edit
                  </h3>
                  <h3
                    className="product-hover-action"
                    onClick={() => handlerSetDelete(p)}
                  >
                    Delete
                  </h3>
                </div>
              ) : (
                <></>
              )}

              {admin.delete === true ? (
                <div className="product-hover">
                  <h3
                    className="product-hover-action"
                    onClick={() => handlerSetEdit(p)}
                  >
                    Edit
                  </h3>
                  <h3
                    className="product-hover-action"
                    onClick={() => handlerSetAdd(p)}
                  >
                    Add
                  </h3>
                </div>
              ) : (
                <></>
              )}

              {admin.edit === true ? (
                <div className="product-hover">
                  <h3
                    className="product-hover-action"
                    onClick={() => handlerSetAdd(p)}
                  >
                    Add
                  </h3>
                  <h3
                    className="product-hover-action"
                    onClick={() => handlerSetDelete(p)}
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
                      <p key={i + cate} className="p-Category">{` - ${[
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

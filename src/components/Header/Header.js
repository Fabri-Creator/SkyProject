import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../logic/user";
import { getFilteredProductsItems, homeProducts } from "../../logic/product";
import { setProductCollection } from "../../redux/actions/productAction";

import "./Header.scss";

const Header = () => {
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const [productCounter, setProductCounter] = useState(0);
  const dispatch = useDispatch();

  const handlerLogout = () => {
    userLogout();
  };

  const handlerFilter = async (filter) => {
    const result = await getFilteredProductsItems(filter);
    dispatch(setProductCollection(result));
  };

  useEffect(() => {
    setProductCounter(order.length);
  }, [order]);

  useEffect(() => {
    async function getHomeProducts() {
      const db = await homeProducts();
      dispatch(setProductCollection(db));
    }

    getHomeProducts();
  }, []);

  // const handlerOrder = () => {};

  return (
    <div className="main-header">
      <div className="gender-container">
        <div className="gender-container-woman">
          Mujer
          <ul className="gender-container-text-droppable-woman">
            <li
              onClick={() =>
                handlerFilter({
                  One: "Mujer",
                  Two: "Novedades",
                })
              }
            >
              Novedades
            </li>
            <li>Abrigos</li>
            <li>Camisetas</li>
            <li>Pantalones</li>
            <li>Vestidos</li>
            <li>Zapatos</li>
            <li>Accesorios</li>
          </ul>
        </div>

        <div className="gender-container-man">
          Hombre
          <ul className="gender-container-text-droppable-man">
            <li>Novedades</li>
            <li>Abrigos</li>
            <li>Camisetas</li>
            <li>Pantalones</li>
            <li>Vermudas</li>
            <li>Zapatos</li>
            <li>Accesorios</li>
          </ul>
        </div>
      </div>
      <div className="user-shop-container">
        {user ? (
          <div className="user-session-container">{user.name}</div>
        ) : (
          <div className="user-session-container">No user</div>
        )}
        <Link to="/user/login" className="far fa-user">
          {user && !user.admin ? (
            <div className="logout" onClick={handlerLogout}>
              <p>Logout</p>
            </div>
          ) : (
            ""
          )}
        </Link>
        <div className="fas fa-shopping-basket">
          <div className="order-shop-container">
            <div className="shop-header">
              {productCounter > 0 ? (
                <p className="text-shop-header">
                  {productCounter} productos en tu orden
                </p>
              ) : (
                <p className="text-shop-header">
                  No tienes productos seleccionados
                </p>
              )}
              {user && (
                <Link to="/order" className="button-shop">
                  Ver orden
                </Link>
              )}
            </div>
            <div className="items-shop-order">
              {order &&
                order.map((item, i) => (
                  <div className="pic-shop-order-hover">
                    <img className="picture" src={item.info.Images[0]} />
                    <p className="info-shop-hover-name">{item.name}</p>
                    <p className="info-shop-hover-price">{item.info.Price}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

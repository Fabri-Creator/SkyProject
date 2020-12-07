import "./Shop.scss";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  totalPrice,
  addProductOrder,
  substractItem,
  removeItem,
  getDiscount,
} from "../../logic/order";
import {
  setEditedOrder,
  setSubstractOrder,
} from "../../redux/actions/orderAction";
import { setPrice } from "../../redux/actions/priceAction";

const Shop = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const [finalPrice, setFinalPrice] = useState(0);
  const [error, setError] = useState("");
  const { register, handleSubmit, reset, errors } = useForm();

  useEffect(() => {
    setFinalPrice(totalPrice(order));
    dispatch(setPrice(finalPrice));
  }, [order]);

  useEffect(() => {
    dispatch(setPrice(finalPrice));
  }, [finalPrice]);

  const handlerAddProduct = (order, product) => {
    const customOrder = addProductOrder(order, product);
    console.log("add ", customOrder);
    dispatch(setEditedOrder(customOrder));
  };

  const handlerSubstractProduct = (order, product) => {
    const customOrder = substractItem(order, product);
    console.log("Substract => ", customOrder);
    dispatch(setSubstractOrder(customOrder));
  };

  const handlerDeleteProduct = (order, product) => {
    const customOrder = removeItem(order, product);
    console.log("remove => ", customOrder);
    dispatch(setSubstractOrder(customOrder));
  };
  const onSubmit = async (data) => {
    const code = data.code;
    console.log(code);
    if (code === "SKY2020") {
      const total = getDiscount(code);
      const final = setFinalPrice(finalPrice * total);
      setError("");
    } else {
      setError("Código no válido");
    }
  };

  return (
    <div className="general-shop-container">
      <div className="title-shop">
        <h3>Tu pedido</h3>
      </div>
      <div className="header-shop-list">
        <div className="desc-shop-list">
          <h4>Descripción</h4>
        </div>
        <div className="prod-shop-list">
          <h4>Productos</h4>
        </div>
        <div className="price-shop-list">
          <h4>Precio</h4>
        </div>
        <div className="delete-shop-list"></div>
      </div>
      {order &&
        order.map((item, i) => (
          <div key={i} className="item-shop-cotainer">
            <div className="item-picture">
              <img
                src={item.info.Images[0]}
                alt="item-picture"
                className="item-picture"
              ></img>
              <p>{item.name}</p>
              <p>{item.info.Brand}</p>
              <p>Talle: {item.size}</p>
            </div>
            <div className="item-unit">
              <button
                className="edit-unit"
                onClick={() => handlerSubstractProduct(order, item)}
              >
                -
              </button>
              <p>{item.amount}</p>
              <button
                onClick={() => handlerAddProduct(order, item)}
                className="edit-unit"
              >
                +
              </button>
            </div>
            <div className="item-price">
              <p>{item.info.Price}</p>
            </div>
            <div className="delete-shop-list">
              <button
                onClick={() => handlerDeleteProduct(order, item)}
                className="remove-unit"
              >
                x
              </button>
            </div>
          </div>
        ))}
      <div className="final-price-container">
        <div className="final-price">
          Total pedido:
          <h4>{finalPrice} EUR</h4>
        </div>
      </div>
      <div className="discount-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/order/purchase" className="purchase-button">
            Comprar
          </Link>
          <input
            name="code"
            placeholder="Usar código"
            className="discount-code"
            ref={register({ required: true, maxLength: 7, minLength: 7 })}
          ></input>
          <button className="discount-button">Usar código</button>
        </form>
        <div className="code-error">
          <span>{error}</span>
        </div>
      </div>
    </div>
  );
};

export default Shop;

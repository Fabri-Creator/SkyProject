import "./ProductDisplay.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { createOrder } from "../../logic/order";
import { setOrderTotal } from "../../redux/actions/orderAction";

const ProductDisplay = () => {
  const dispatch = useDispatch();
  const orderTotal = useSelector((state) => state.order);
  const homeProducts = useSelector((state) => state.product);
  const [single, setSingle] = useState(false);
  const [orderSize, setOrderSize] = useState(null);
  const [singleItem, setSingleItem] = useState(false);
  const [order, setOrder] = useState(orderTotal);

  const handlerSingle = (product) => {
    setSingle(true);
    setSingleItem(product);
  };

  const handlerCloseProduct = () => {
    setSingle(false);
    setOrderSize(null);
  };

  const handlerOrderSize = (itemSize) => {
    const { stock } = itemSize;
    if (stock > 0) {
      setOrderSize(itemSize);
    }
  };

  const handlerOrderAction = (product) => {
    if (orderSize) {
      var result = createOrder(product, orderSize);
      const addProduct = [...order, result];
      dispatch(setOrderTotal(addProduct));
      setOrder(addProduct);
      handlerCloseProduct();
    } else {
      handlerCloseProduct();
    }
  };

  return (
    <div className="display-container">
      {homeProducts &&
        homeProducts.map((product, i) => (
          <div key={i} className="item-container">
            <div className="item-display">
              <div
                className="click-container"
                onClick={() => handlerSingle(product)}
              ></div>
              <img
                alt="first-pic"
                className="item-img"
                src={product.Images[0]}
              />

              <div className="item-info">
                <p className="item-Name">
                  <strong>{product.Name}</strong>
                </p>
                <p className="item-Price">{product.Price}</p>
              </div>
              <div className="shop-container">
                <div className="shop-container-size">
                  <p className=" talle-text ">Talla</p>
                  <ul className="shop-container-size-dropdown">
                    <li
                      className={
                        !orderSize || orderSize.size !== "S"
                          ? "single-sizes-container"
                          : "single-sizes-container-chosen"
                      }
                      onClick={() =>
                        handlerOrderSize({
                          size: "S",
                          stock: product.Sizes.S,
                        })
                      }
                    >
                      S
                    </li>
                    <li
                      className={
                        !orderSize || orderSize.size !== "M"
                          ? "single-sizes-container"
                          : "single-sizes-container-chosen"
                      }
                      onClick={() =>
                        handlerOrderSize({
                          size: "M",
                          stock: product.Sizes.M,
                        })
                      }
                    >
                      M
                    </li>
                    <li
                      className={
                        !orderSize || orderSize.size !== "L"
                          ? "single-sizes-container"
                          : "single-sizes-container-chosen"
                      }
                      onClick={() =>
                        handlerOrderSize({
                          size: "L",
                          stock: product.Sizes.L,
                        })
                      }
                    >
                      L
                    </li>
                  </ul>
                </div>
              </div>

              {orderSize ? (
                <div className="shop-container-add-action">
                  <p
                    className="order-button-action"
                    onClick={() => handlerOrderAction(product)}
                  >
                    Añadir
                  </p>
                </div>
              ) : (
                <div className="shop-container-add">
                  <p className="order-button">Añadir</p>
                </div>
              )}
            </div>
          </div>
        ))}
      {single ? (
        <>
          <div
            className="single-product-display"
            onClick={() => handlerCloseProduct()}
          ></div>
          <div className="single-product-background">
            <div className="single-pictures-container">
              <img alt="single-pic-a" src={singleItem.Images[0]} />
              <img alt="single-pic-b" src={singleItem.Images[1]} />
              <img alt="single-pic-c" src={singleItem.Images[2]} />
              <img alt="single-pic-d" src={singleItem.Images[3]} />
              <img alt="single-pic-e" src={singleItem.Images[4]} />
              <img alt="single-pic-f" src={singleItem.Images[5]} />
            </div>
            <div className="single-info-container">
              <div className="single-info-first-container">
                <p className="single-name-container">{singleItem.Name}</p>
                <p className="single-price-container">{singleItem.Price}</p>
                <p className="single-brand-container">{singleItem.Brand}</p>
                <p className="single-referencia-container">{`Ref: ${singleItem.Ref}`}</p>
                <p className="single-desc-container">{singleItem.Details}</p>
              </div>
              <div className="single-info-second-container">
                <p
                  className={
                    !orderSize || orderSize.size !== "S"
                      ? "single-sizes-container"
                      : "single-sizes-container-chosen"
                  }
                  onClick={() =>
                    handlerOrderSize({ size: "S", stock: singleItem.Sizes.S })
                  }
                >{`S`}</p>
                <p
                  className={
                    !orderSize || orderSize.size !== "M"
                      ? "single-sizes-container"
                      : "single-sizes-container-chosen"
                  }
                  onClick={() =>
                    handlerOrderSize({ size: "M", stock: singleItem.Sizes.M })
                  }
                >{`M`}</p>
                <p
                  className={
                    !orderSize || orderSize.size !== "L"
                      ? "single-sizes-container"
                      : "single-sizes-container-chosen"
                  }
                  onClick={() =>
                    handlerOrderSize({ size: "L", stock: singleItem.Sizes.L })
                  }
                >
                  {`L`}
                </p>
              </div>
              <button
                onClick={() => handlerOrderAction(singleItem)}
                className="single-button-container"
              >
                Añadir
              </button>
              {!orderSize && <p className="choose-size">Choose size</p>}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default ProductDisplay;

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./PurchaseForm.scss";

const PurchaseForm = () => {
  const totalPrice = useSelector((state) => state.price);
  const [owner, setOwner] = useState("");
  const [succes, setSucces] = useState(null);
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = async (data) => {
    setOwner(data.userName);
    console.log(data.userName);
    setSucces(true);
    reset();
  };
  return (
    <div className="purchase-info-container">
      <form
        className="purchase-info-container-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="input-class"
          name="userName"
          placeholder="Nombre"
          ref={register({ required: true, maxLength: 50, minLength: 7 })}
        />
        {errors.userName && <span>Name is required, 7 to 50 characters</span>}
        <input
          className="input-class"
          name="location"
          placeholder="Dirección de entrega"
        />
        <input
          className="input-class"
          name="provincia"
          placeholder="Provincia"
        />
        <input className="input-class" name="ciudad" placeholder="Ciudad" />
        {errors.userName && <span>Name is required, 7 to 50 characters</span>}
        <input
          className="input-class"
          name="tarjeta"
          placeholder="Número de tarjeta"
          ref={register({ required: true, maxLength: 16, minLength: 16 })}
        />
        {errors.tarjeta && <span>Name is required, 7 to 50 characters</span>}
        <input
          className="input-class"
          name="codigo"
          placeholder="Código de tarjeta"
          ref={register({ required: true, maxLength: 3, minLength: 3 })}
        />
        {errors.codigo && <span>Name is required, 7 to 50 characters</span>}
        <div className="final-price">{`${totalPrice} EUR`}</div>
        <button className="final-purchase">Comprar</button>
        {succes && (
          <>
            <h4 className="final-purchase-msg">{`Felicidades ${owner}!`}</h4>
            <h4 className="final-purchase-msg">Compra realizada con exito!</h4>
          </>
        )}
      </form>
    </div>
  );
};
export default PurchaseForm;

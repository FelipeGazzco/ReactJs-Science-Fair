import React, {useState, useEffect} from "react";
import Cuenta from "../Cuenta/Cuenta";
import { CartContext } from "../../../Context/CartContext";
import { CustomCartContext } from "../../../Context/CustomCartContext";
import { useContext } from "react";
import "./ItemCount.css";

function ItemCount({props, item}){ 

  const [cuenta, setCuenta] = useState(0)
  const carritoContext = useContext(CartContext);
  const onAddFunctionIC = (cuenta) => {
    carritoContext.addItem(item, cuenta);
  }
  const SumaProducto = (e) => {
    if (item.stock > cuenta) {
      setCuenta(cuenta + 1);
    }else {
      alert("Sin stock");
    }
  };
  const RestaProducto = (e) => {
    if (cuenta > 0) {
      setCuenta(cuenta - 1);
    } else {
      alert("Tenes que tener algo en el carrito");
    }
  };
  const ReseteoProducto = () => {
    setCuenta(item.initial)
  }



  return (
    <div className="ItemCount">
      {cuenta === 0 ? (
        <p> ? </p>
      ) : (
        <Cuenta cuenta={cuenta} />
      )}
      <div className="secondDiv">
          <button onClick={SumaProducto} name="comprar">
            +1{" "}
          </button>
          <button onClick={RestaProducto} name="resta">
            -1{" "}
          </button>
          <button onClick={ReseteoProducto} name="reset"> 
            Reset 
          </button>
          <section>
            <button disabled={cuenta===0} onClick={() => {onAddFunctionIC(cuenta); ReseteoProducto()}}> Agregar al carrito</button>
          </section>
        </div>
    </div>
);
}

export default ItemCount;

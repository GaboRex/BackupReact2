import React from "react";
import IconoSalud from "../assets/icono_salud.svg";
import IconoOcio from "../assets/icono_ocio.svg";
import IconoAhorro from "../assets/icono_ahorro.svg";
import IconoComida from "../assets/icono_comida.svg";
import IconoCasa from "../assets/icono_casa.svg";
import IconoGastos from "../assets/icono_gastos.svg";
import IconoSuscripciones from "../assets/icono_suscripciones.svg";

const Gasto = ({ gasto }) => {
  let icono = null;

  if (gasto.categoria === "salud") {
    icono = <img src={IconoSalud} alt="icono salud" style={{ width: "200px" }} />;
  } else if (gasto.categoria === "ocio") {
    icono = <img src={IconoOcio} alt="icono ocio" style={{ width: "200px" }} />;
  } else if (gasto.categoria === "ahorro"){
    icono = <img src={IconoAhorro} alt="icono ahorro" style={{ width: "200px" }} />;
  }else if (gasto.categoria === "comida"){
    icono = <img src={IconoComida} alt="icono comida" style={{ width: "200px" }} />;
  }else if (gasto.categoria === "casa"){
    icono = <img src={IconoCasa} alt="icono casa" style={{ width: "200px" }} />;
  }else if (gasto.categoria === "gastos"){
    icono = <img src={IconoGastos} alt="icono gastos" style={{ width: "200px" }} />;
  } else if (gasto.categoria === "suscripciones") {
    icono = <img src={IconoSuscripciones} alt="icono suscripciones" style={{ width: "200px" }} />;
  }

  return (
    <div className="bg-white shadow-lg rounded-md py-5 w-full lg:w-1/2 mx-auto">
      <div className="flex items-center">
        <div className="mr-4">{icono}</div>
        <div>
          <h3 className="text-stone-500 text-xl text-center font-bold mb-3">{gasto.nombre}</h3>
          <p className="font-semibold text-gray-500">
            <span className="font-bold text-lime-700 text-lg">Categoría: </span>
            {gasto.categoria}
          </p>
          <p className="font-semibold text-gray-500">
            <span className="font-bold text-lime-700 text-lg">Cantidad: </span>
            {gasto.cantidad}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gasto;

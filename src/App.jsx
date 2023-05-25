import { useEffect, useState } from "react";
import Presupuesto from "./components/Presupuesto";
import FormNuevoGasto from "./components/FormNuevoGasto";
import Resumen from "./components/Resumen";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";
import "./App.css";
import Modal from "./components/Modal";
import Gasto from "./components/Gasto";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [gastos, setGastos] = useState([]);
  const [click, setClick] = useState(false);
  const [newGasto, setNewGasto] = useState(false);
  const [gastosD, setGastosD] = useState([]);

  useEffect(() => {
    console.log("Se cambio gastos D", gastosD);
  }, [gastosD]);

  const agregarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  return (
    <div className="container mx-auto bg-slate-400 mt-20">
      {!click ? (
        <Presupuesto
          presupuesto={presupuesto}
          click={click}
          setClick={setClick}
          setPresupuesto={setPresupuesto}
        />
      ) : newGasto ? (
        <FormNuevoGasto
          agregarGasto={agregarGasto}
          setNewGasto={setNewGasto}
        />
      ) : (
        <>
          <Resumen
            setClick={setClick}
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
          />
          <div className="fixed bottom-5 right-5">
            <img
              className="w-10 hover:cursor-pointer"
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={() => {
                setNewGasto(true);
              }}
            />
          </div>
          <div className="mt-5">
            {gastos.map((gasto, index) => (
              <Gasto key={index} gasto={gasto} />
            ))}
          </div>
        </>
      )}
      {newGasto && (
        <Modal
          setNewGasto={setNewGasto}
          agregarGasto={agregarGasto}
          gastosD={gastosD}
          setGastosD={setGastosD}
        />
      )}
    </div>
  );
}

export default App;
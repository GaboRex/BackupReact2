import CerrarBtn from "../assets/cerrar.svg";
import FormNuevoGasto from "./FormNuevoGasto";

const Modal = ({ setNewGasto, agregarGasto, gastosD, setGastosD }) => {
  const ocultarModal = () => {
    console.log("ocultar modal");
    setNewGasto(false);
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-custom-black">
      <div className="absolute right-3 top-3 w-5 h-5">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      <FormNuevoGasto agregarGasto={agregarGasto} gastosD={gastosD} setGastosD={setGastosD} setNewGasto={setNewGasto} />
    </div>
  );
};

export default Modal;
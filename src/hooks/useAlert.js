import { useState } from 'react';

//useAlert permite tener opciones
const useAlert = (options) => {
  const defaultOptions = {
    active: false, //Queda inicalizado en false
    message: '',
    type: '', //para la data inicial se necesita que esté primero vacío
    autoClose: true,
  };
  const [alert, setAlert] = useState({
    ...defaultOptions, //con .... se destructura los valores
    ...options,
  });

  const toggleAlert = () => {
    setAlert(!alert.active); //cambia el estado según sea el caso
  };

  return {
    alert,
    setAlert,
    toggleAlert,
  };
};

export default useAlert;
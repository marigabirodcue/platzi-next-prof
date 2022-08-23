import { XCircleIcon } from '@heroicons/react/solid'; //import del ícono XCircleIcon de HeroIcons

//Componente Alert
const Alert = ({ alert, handleClose }) => {

  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 3000); //El form se cierra automátiamente después de los 3 segundos con la función autoClose
  }

  const bgColor = alert.type === 'success' ? 'green-100' : 'red-100';
  const textColor = alert.type === 'success' ? 'text-green-800' : 'text-red-800';


  /*En return se encapsula con un fragment <> </> lo que se quiere mostrar con el alert
    Se hace la validación del alert con el operador && que cuando solo está activo
    se muestra el recuadro con el mensaje, es decir la segunda expresión*/
  return (
    <>
      {alert?.active && (
        <div x-data="{ show: true }"
             x-show="show"
             x-init="setTimeout(() => show = false, 3000)"
             className={`bg-${bgColor} p-5 w-full rounded mb-8`}>
          <div className="flex space-x-3">
            <div className={`flex-1 leading-tight text-sm ${textColor} font-medium`}>{alert.message}</div>
            <button type="button">
              <XCircleIcon className={`w-6 h-6 ${textColor}`} onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
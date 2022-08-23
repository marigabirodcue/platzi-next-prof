import FormProduct from '@components/FormProduct';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api';
import Alert from '@common/Alert';
import useAlert from '@hooks/useAlert';

//La función edit retorna el formulario para pasarle un nuevo valor del producto
export default function Edit() {
  const [product, setProduct] = useState({}); //Donde se almacena la información
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const { alert, setAlert, toggleAlert} = useAlert();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return; //Si no tenemos el id, retorna y no hace el llamado
    //Se hace el llamado con getProduct
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }
    //getProduct();
    getProduct().catch((error) =>router.push('/notFound'));
  }, [router?.isReady]); //Para saber que ya está disponible

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert}/>
      <FormProduct setOpen={setOpen} setAlert={setAlert} product={product} />
    </>
  );
}
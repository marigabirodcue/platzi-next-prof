import endPoints from '@services/api'; //Para poder usar el endPoints de services
import useFetch from '@hooks/useFetch'; //Llamar al custom hooks
import { useState, useEffect } from 'react';
import { XCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Chart } from '@common/Chart';
import Pagination from '@common/Pagination';
import { deleteProduct } from '@services/api/products';
import axios from 'axios';
import useAlert from '@hooks/useAlert';


//El limit y offset de GET Products
//En mayúsculas porque son valores que se cambian muy poco
const PRODUCT_LIMIT = 10;
const PRODUCT_OFFSET = 0;


export default function Dashboard() {

  const [offset, setOffset] = useState(PRODUCT_OFFSET);

  //Llamar a los productos
  //const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, offset));

  //console.log(products);

  const [products, setProducts] = useState([]);
  const { alert, setAlert, toggleAlert} = useAlert();

  useEffect(() => {

    async function getProducts(){
      const response = await axios.get(endPoints.products.getProducts(PRODUCT_LIMIT, offset));
      setProducts(response.data);
    }
    try{
      getProducts(); //Se hace render de todos los productos que existen en la API
      //console.log('refresh');
    } catch (error){
      console.log(error);
    }
  }, [{offset, alert}])

  //Con categoryNames se conoce cuántos elementos están dentro de las categorías
  const categoryNames = products?.map((product) => product.category);
  //Con categoryCount se conocen los nombres de las categorías
  const categoryCount = categoryNames?.map((category) => category.name);

  /* console.log(categoryNames);
  console.log(categoryCount);*/

  //Con countOcurrences se conoce el número de ocurrencias (frecuencia) que aparece cada categoría
  //Lógiga constante = (array, value) => array.reduce((a,v) => (v === value? a + 1: a), 0);
  const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
  /* console.log(countOcurrences(categoryCount)) */
  //El objeto data contiene la información necesaria para el gráfico
  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOcurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#f3ba2f', '#2a71d0'],
      },
    ],
  };


//totalItems obtiene el número total de productos en la API
const totalItems = useFetch(endPoints.products.getProducts(0, 0)).length;

const handleDelete = (id) => {
  deleteProduct(id).then(() =>{
    setAlert({
      active: true,
      message: 'Delete product successfuly',
      type: 'success',
      autoClose: true,
    });
  }).catch((error) => {
    setAlert({
      active: true,
      message: error.message,
      type: 'error',
      autoClose: false,
    });
  });
};

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium
                                              text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium
                                              text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium
                                              text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium
                                              text-gray-500 uppercase tracking-wider">
                      Id
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products?.map((product) => (
                    <tr key={`Product-item-${product.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                          { product.images[0] && <Image className="h-10 w-10 rounded-full"
                            loader={() => product.images[0]}
				                    src={product.images[0]}
                            layout="fixed"
				                    width="40"
				                    height="40"
                            alt="" /> }
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {product.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                        {
                            product.categoryId == 1 ? "Clothes" :
                            product.categoryId == 2 ? "Electronics" :
                            product.categoryId == 3 ? "Furniture" :
                            product.categoryId == 4 ? "Toys" :
                            product.categoryId == 5 ? "Others":
                            product.category.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold
                                        rounded-full bg-green-100 text-green-800">
                          ${product.price}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                          href={`/dashboard/edit/${product.id}`}
                          className="text-indigo-600
                                    hover:text-indigo-900"
                        >
                          Edit
                      </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <XCircleIcon className='flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer'
                                      aria-hidden="true"
                                      onClick={() => handleDelete(product.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {totalItems > 0 && <Pagination setOffset={setOffset} productNumberLimit={PRODUCT_LIMIT} totalItems={totalItems} />}
      </div>
    </>
  );
}

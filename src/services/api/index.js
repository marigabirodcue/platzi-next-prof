const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
//Objeto con todos los puntos de entrada
const endPoints = {
    auth:{
        login: `${API}/api/${VERSION}/auth/login`, //Se copia desde la página de la API la ruta para el punto de entrada de login
        profile: `${API}/api/${VERSION}/auth/profile`,
    },
    products:{
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
        //allProducts trae todos los productos sin el limit y offset
        allProducts: `${API}/api/${VERSION}/products/`,
        //Tomar en cuenta que para agregar producto la url necesita de dos entradas: limit y offset
        getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        addProducts: `${API}/api/${VERSION}/products`,
        updateProducts: (id) => `${API}/api/${VERSION}/products/${id}/`,
        deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
    },
    categories:{
        getCategoriesList: `${API}/api/${VERSION}/categories/`,
        addCategory: `${API}/api/${VERSION}/categories/`,
        getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products/`,
        updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}/`,
    },
    files: {
        addImage: `${API}/api/${VERSION}/files/upload/`,
    },
    /*users:{
        getUsers: (limit) => `${API}/api/${VERSION}/users?limit=${limit}`,
        getUsersList: `${API}/api/${VERSION}/users/`,
        userIsAvailable: `${API}/api/${VERSION}/users/is-available`,
    }*/
};

export default endPoints;
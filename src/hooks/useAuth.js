/*
File: src/hooks/useAuth.js
Title: react-shop-admin
author: marigabirodcue
date: 14/07/2022
*/

import React, {useState, useContext, createContext} from 'react';
import AuthContext from '@context/AuthContext';
import Cookie from 'js-cookie';
/*Cookie: Nos ayuda asignar a nuestro navegador las cookies que esté
recibiendo en el momento de la autenticación*/
import axios from 'axios';
//axios: Para el manejo de las peticiones como GET, PUT, POST, DELETE
import endPoints from '@services/api/';

//const AuthContext = createContext();
//AuthContext: Se crea un nuevo context gracias a la api de react

export function ProviderAuth({children}){
    const auth = useProvideAuth();
    return <AuthContext.Provider value ={auth}>{children}</AuthContext.Provider>;
}
//ProviderAuth: Se crea la encapsulación de nuestra aplicación

export const useAuth = () => {
    return useContext(AuthContext);
};
//useAuth: Permite exponer cierta información que se estará requiriendo

//useProvideAuth: Captar la información del usuario
function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [error, setError]= useState(false);

    const signIn = async (email, password) => {
        //Options: se usará en el await de data
        const options = {
            headers:{
                accept: '*/*',
                'Content-Type': 'application/json',
            },
        };
        //Lee un access token que regresa desde la información del servidor
        const {data: access_token} = await axios.post(endPoints.auth.login, { email, password}, options);
        //console.log(access_token); //Nos permite ver la información retornada
        if(access_token){
            const token = access_token.access_token; //requerido para el acceso a la información
            Cookie.set('token', token, {expires: 5});
            /*expires permite que después de un tiempo definido podamos eliminar
            la información almacenada y pueda volver a logear*/
            //Se envía la información necesaria para que pueda definir el valor por defecto
            axios.defaults.headers.Authorization = `Bearer ${token}`;
            //Vamos a llamar el recurso con el profile
            const {data: user} = await axios.get(endPoints.auth.profile);
            console.log(user);
            setUser(user);
        }
    };

    const logout = () => {
        Cookie.remove('token');
        setUser(null);
        delete axios.defaults.headers.Authorization;
        window.location.href = '/login';
    }


    return{
        user,
        signIn,
        error,
        setError,
        logout,
    };
}
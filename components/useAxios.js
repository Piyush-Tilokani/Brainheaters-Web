import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import * as constants from '../utils/constants'
import { getSession, signOut, useSession } from 'next-auth/react'
import { setSessionExpired } from '../redux/slices/rootSlice' 

const useAxios = () => {

    const defaultOptions = {
        baseURL:constants.BaseURL,
    };

    const axiosInstance = axios.create(defaultOptions);

    const expireSession = () =>{

        //dispach(setSessionExpired(true))
        localStorage.setItem('session_expired',true)
        signOut({callbackUrl:'/login'})
        
        return {data:{error:"UNAUTHORIZED"}}
    }
    
    axiosInstance.interceptors.request.use(async (request) => {
        const session = await getSession();
        if (session) {
            request.headers.token = session.user.accessToken
        }
        return request;
    });

    axiosInstance.interceptors.response.use(response=>{
        if(response?.data === 'Unauthorized'){
            return expireSession()
        }
        return response
    })
   
   return axiosInstance

}

export default useAxios

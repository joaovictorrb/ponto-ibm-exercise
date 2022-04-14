import { useState, useEffect } from 'react'

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3333/'

const useAxios = (axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = useState<AxiosResponse>()
    const [error, setError] = useState<AxiosError>()
    const [loading, setLoading] = useState(true)

    const request = async (params: AxiosRequestConfig) => {
        try {
            const result = await axios.request(params)
            setResponse(result)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        request(axiosParams);
      },[]);

    return { response, error, loading };
}

export default useAxios;

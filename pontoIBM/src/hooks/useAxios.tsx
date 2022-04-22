import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useState, useCallback} from 'react';

const useAxios = () => {
  const [info, setInfo] = useState<Object | null>(null);
  const [error, setError] = useState<String | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  const request = useCallback(async (method, url, data) => {
    let response;
    const token = await AsyncStorage.getItem('Token');
    try {
      setError(null);
      setLoading(true);
      response = await axios({
        ...(token
          ? {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          : {}),
        method,
        url: `http://10.0.2.2:3333/${url}`,
        data,
      });
      if (response.status !== 200) throw new Error(response.message);
    } catch (error) {
      console.log(error)
      setError(error.message);
    } finally {
      setInfo(response);
      setLoading(false);
      return response;
    }
  }, []);

  return {
    info,
    loading,
    error,
    request,
  };
};

export default useAxios;

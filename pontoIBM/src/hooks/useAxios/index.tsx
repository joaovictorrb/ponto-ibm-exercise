import { useState, useCallback } from 'react';

import axios from 'axios';

const useAxios = () => {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (method, url, data) => {
    let response;
    // const token = window.localStorage.getItem('Token');

    try {
      setError(null);
      setLoading(true);
      response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method,
        url: `http://127.0.0.1:3333${url}`,
        data,
      });

      if (response.status !== 200) throw new Error(response.message);
    } catch (error) {
      response = null;
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
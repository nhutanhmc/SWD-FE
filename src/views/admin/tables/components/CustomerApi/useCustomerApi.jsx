import { useEffect, useState } from 'react';
import useAuth from 'hook/useAuth';
import axios from 'api/axios'; // Adjust the import path if necessary

export const useCustomerApi = (refreshKey) => {
  const [listType, setListType] = useState([]);
  const token = useAuth();

  const fetchApi = async () => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.get('customers', { headers });
     if(response?.data?.success)
        setListType(response?.data?.customers);

    } catch (error) {
      console.error('Failed to fetch material data', error);
    }
  };

  useEffect(() => {
  fetchApi();
  }, [token,refreshKey]);

  return listType;
};

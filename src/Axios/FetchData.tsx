import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataSuccess } from "../Redux/ResultSlice";

const FetchComponent = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDataSuccess(data))
  }, [dispatch])

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [offset, setOffset] = useState<number>(200);

  const baseUrl = "https://gateway.marvel.com:443/v1/public/comics";
  const apiKey = "09d855ae3d95529ff9e1b0473acfd873";
  const limit = 20; 

  const fetchData = async (newOffset: number) => {
    const urlAPI = `${baseUrl}?ts=1&apikey=${apiKey}&hash=d382fe98c419fc7cb02a76a38b2102e4&offset=${newOffset}&limit=${limit}`;
    

    try {
      const response: AxiosResponse = await axios.get(urlAPI);
      setData(response.data.data);   
      dispatch(fetchDataSuccess(data))
    } catch (err) {
      setError('Error');
    }
  };

  const handleNextPage = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    fetchData(newOffset);
  };

  const handlePreviousPage = () => {
    const newOffset = Math.max(0, offset - limit);
    setOffset(newOffset);
    fetchData(newOffset);
    
  };

  useEffect(() => {
    fetchData(offset);
  }, []);

  const marvelData = useSelector((state: any) => state.marvel.data);

  return (
    <div>
      <button className="px-4 m-2 p-2 bg-slate-700 hover:animate-bounce"  onClick={handlePreviousPage} disabled={offset === 0}>
        Anterior
      </button>
      <button className="px-4 m-2 p-2 bg-slate-700 hover:animate-bounce" onClick={handleNextPage}>Siguiente</button>
    </div>
  );
};

export default FetchComponent;

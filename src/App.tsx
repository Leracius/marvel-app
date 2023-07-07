import React, { useState } from 'react'
import FetchComponent from './Axios/FetchData'
import { useSelector, useDispatch } from 'react-redux';
import Layout from './Layout/Layout';
import './index.css'
import 'tailwindcss/tailwind.css'

const App: React.FC = () => {
  const [active, setActive] = useState(false)

  const show = () =>{
    setActive(!active)
  }

  const marvelData = useSelector((state: any) => state.marvel.data);
  console.log(marvelData);

  return (
    <Layout>
      {marvelData && marvelData.results && marvelData.results.map((result: any) => (
        <div className="w-60 m-2 mx-auto bg-black border-4" key={result.id}>
          <img className="w-60 object-cover" src={`${result.thumbnail.path}.${result.thumbnail.extension}`} alt="" />
            <a href={result.urls[0].url}><p className="text-center p-2 ">{result.title}</p></a>
            <p className="text-center">${result.prices[0].price}</p>
  
          
        </div>
      ))
      }
    
      <FetchComponent/>
    </Layout>
  )
}

export default App;

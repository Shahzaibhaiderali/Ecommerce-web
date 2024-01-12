import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Card from '../../components/Card';
const Products = () => {
  // param for dynamic router
  const params = useParams();
  console.log(params);

  // states
  const [data, setData] = useState([]);

  // useEffect API function
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log('error');
      });
  }, [params.id]);

  return (
    <>
      <div className='flex justify-evenly flex-wrap mt-[5rem] gap-5'>
        {data.length > 0 ? data.map((item, index) => (
          <Card key={index} src={item.image} title={item.title} description={item.description} price={item.price} />
        )) : <h1>loading...</h1>}
      </div>
    </>
  );
};

export default Products;
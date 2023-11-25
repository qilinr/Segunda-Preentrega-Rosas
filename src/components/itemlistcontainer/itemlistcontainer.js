import React, { useState, useEffect } from 'react';
import { getProduct, getProducts } from '../../asyncMock';
import ItemList from '../itemlist/itemlist';

import { useParams } from 'react-router-dom'

const Itemlistcontainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const   {categoryId} = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts
    getProduct()
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} /> {/* Corregido itemList a ItemList */}
    </div>
  );
};

export default Itemlistcontainer;

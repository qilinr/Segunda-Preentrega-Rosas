import React, { useState, useEffect } from 'react';
import { getProduct } from '../../asyncMock';
import ItemList from '../itemlist/itemlist';

const Itemlistcontainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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

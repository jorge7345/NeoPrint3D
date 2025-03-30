import React from 'react';

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name} - {product.category}</li>
      ))}
    </ul>
  );
};

export default ProductList;

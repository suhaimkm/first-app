import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ProductList3 = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState<string | null>(null);
  interface product {
    id: number;
    title: string;
    category: string;
    price: number;

  }

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    if (response.ok == false) {
      setError("An error  occured in products fetching");
    } else {
      const data = await response.json();
      setProducts(data);
    }
  };

    useEffect(() => {
      fetchProducts();
    });

  if (error !== null) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center d-flex align-items-center justify-content-center" role="alert">
          <div className="spinner-border text-danger me-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          {error}
        </div>
      </div>
    );
  }


  return (
    <div className="container ">
      <h2 className="mb-4 text-center">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: "200px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Category: {product.category}</p>
                <p className="card-text fw-bold">${product.price}</p>
                <Link to={`/ProductList/${product.id}`}>view details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList3;
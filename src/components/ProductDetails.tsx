import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  brand: string;
  rating: number;
}

const ProductDetails = () => {
    const [product, setProduct] = useState < Product | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams<{ id: string }>();

    const fetchProducts = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
            setError("An error occurred while fetching products");
        } else {
            const data = await response.json();
            setProduct(data);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [id]);

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
           {product && (
             <div key={product.id} className="col-md-4 mb-4">
               <div className="card h-100">
               <img src={product.thumbnail} style={{ width: "200px" }} />
                 <div className="card-body">
                   <h5 className="card-title">{product.title}</h5>
                   <p className="card-text">Category: {product.category}</p>
                   <p className="card-text fw-bold">${product.price}</p>
                   <p className="card-text fw-bold">${product.brand}</p>
                   <p className="card-text fw-bold">${product.rating}</p>
                   <p className="card-text fw-bold">${product.description}</p>
                   <Link to="/" className="btn btn-primary">back to product list</Link>
                 </div>
               </div>
             </div>
           )}
         </div>
       </div>
     );
   };
   

export default ProductDetails;
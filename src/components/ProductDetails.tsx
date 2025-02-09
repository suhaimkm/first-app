import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface product {
    id: number;
    title: string;
  category: string;
  price: number;
  image: string;
}

const ProductDetails = () => {
    const [product, setProduct] = useState < product | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams<{ id: string }>();

    const fetchProducts = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
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
                 <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: "200px", objectFit: "contain" }} />
                 <div className="card-body">
                   <h5 className="card-title">{product.title}</h5>
                   <p className="card-text">Category: {product.category}</p>
                   <p className="card-text fw-bold">${product.price}</p>
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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Product {
    id: number;
    title: string;
    price: number;
    
  }

const ProductListSearch = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [searchProduct, setSearchProduct] = useState<string>("");

    const fetchProducts = async () => {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            setError("An error occurred while fetching products");
        } else {
            const data = await response.json();
            setProducts(data.products);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

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
    const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchProduct.toLowerCase())
  );

    return (
        <div className="container">
            <h2 className="mb-4 text-center">Product List search</h2>
            <input
          type="text"
          className="form-control"
          placeholder="search products"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
            <div className="row">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <h5 className="card-title">{product.price}</h5>
                                

                                <Link to={`/ProductList4/${product.id}`}>view details</Link>
                                
                            </div>
                        </div> 
                       
                    </div>
                 
                ))}
            </div>
        </div>
    );
};

export default ProductListSearch;
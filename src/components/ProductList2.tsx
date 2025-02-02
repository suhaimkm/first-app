import './product.css';
import  product  from '../model/Product';


interface productProp {
    products: product[];
}

function ProductList( props : productProp) {
   
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {props.products.map((product) => (
                <div className="col" key={product.id}>
                    <div className="card h-100">
                        <img src={product.image} className="card-img-top fixed-size-img" alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">{product.category}</p>
                            <h1 className="card-text">${product.price}</h1>
                            <a href="https://www.amazon.in/s?k=amazon+tshirt%27&adgrpid=70446363108&ext_vrnc=hi&hvadid=397759012941&hvdev=c&hvlocphy=9299540&hvnetw=g&hvqmt=e&hvrand=11662910041271977174&hvtargid=kwd-1663778975255&hydadcr=12939_1996591&tag=googinhydr1-21&ref=pd_sl_27eawfnika_e" className="btn btn-primary ">buy now</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default ProductList;
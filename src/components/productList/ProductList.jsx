import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="product-list">
        <div className="pl-texts">
            <h1 className="pl-title">Create & Inspire.</h1>
            <p className="pl-desc">
                Product list description goes here
            </p>
        </div>
        <div className="pl-list">
          {products.map((item)=>(
            <Product key={item.id} img={item.img} link={item.link} />
          ))}         
        </div>
      
    </div>
  )
}

export default ProductList
import { useState } from "react"

export default function CardElement({product, AddToCart}){
    const [quantity, setQuantity] = useState(0)
    function IncreaseHandler(){
        setQuantity(quantity+1)
    }function DecreaseHandler(){
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }
    function InputChange(e){
        const val = e.target.value;
        const numValue = val === "" ? 0 : Number(val);
        if (!isNaN(numValue) && numValue >= 0) {
            setQuantity(numValue);
        }
    }
    return(
        <div className="CardElement">
        <div className="imageHolder">
        <img src={product.image} alt={product.title} className="productImage" />
        </div>
        <div className="actionSection">
            
        <div className="quantity">
        <button onClick={DecreaseHandler}>-</button>
        <input type="number" placeholder="quantity" value={quantity} onChange={InputChange}/>
        <button onClick={IncreaseHandler}>+</button>
        </div>
        <div className="priceTag">{product.price}$</div>
        <div>
            <button className="buyButton" onClick={()=>AddToCart(product,quantity)} >Add to cart</button>
        </div>

        </div>
        </div>

    )

}

export default function AddedProducts({product, onRemove, onUpdate}){
    return(
        <div className="CardElement">
        <div className="imageHolder">
        <img src={product.product.image} alt={product.product.title} className="productImage" />
        </div>
        <div className="actionSection">
        <div className="quantity">
        <button onClick={()=>onUpdate(product,product.quantity-1)}>-</button>
        <input type="text" placeholder="quantity" value={product.quantity} onChange={(e)=>onUpdate(product,Number(e.target.value))}/>
        <button onClick={()=>onUpdate(product, product.quantity+1)}>+</button>
        </div>
        <div className="priceTag">{product.product.price}$</div>
         
        <div>
        
            <button className="buyButton" onClick={()=>onRemove(product)} >remove from cart</button>
        </div>

        </div>
        </div>

    )

}

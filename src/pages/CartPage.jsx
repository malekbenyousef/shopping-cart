import { useOutletContext } from "react-router"
import "../components/AddedProducts.jsx"
import AddedProducts from "../components/AddedProducts.jsx"

export default function Cart(){
    const {cart,RemoveFromCart, UpdateQuantity}=useOutletContext()

    
    return(
        <>
        <div className="productContainer">
        {cart.map((e)=>{
            return(
                <AddedProducts product={e} key={e.id} onRemove={RemoveFromCart} onUpdate={UpdateQuantity}/>

            )

        })}
        </div>
        </>
    )
}

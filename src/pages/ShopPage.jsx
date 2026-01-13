import { useEffect, useState } from "react";
import CardElement from "../components/CardElement";
import { useOutletContext } from "react-router";

export default function Shop(){
    const {AddToCart}=useOutletContext()
    const [images, setImages] = useState([])
    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((response)=>setImages(response))
        .catch((error) => console.error(error));

    },[])

    return(
        <>
        <div className="productContainer">
        {
            images.map((e)=>{
                return(
                    <CardElement product={e} AddToCart={AddToCart} key={e.id}></CardElement>
                )
            })
        }

        </div>

        </>
    )
}

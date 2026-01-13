import "./stlye/cardElement.css"
import { Outlet } from "react-router";
import NavBar from "./components/NavBar.jsx"
import "./App.css"
import { useState } from "react";
const App = () => {
    let [cart, setCart]= useState([]) 
    function AddToCart(product, quantity){
        if(quantity<=0) return;
        setCart(prevCart => {
            const existingElementIndex = prevCart.findIndex((e)=>e.product.id === product.id)
            if(existingElementIndex >-1){
                const newCart = [...prevCart]
                newCart[existingElementIndex].quantity += quantity;
                return newCart;

            }else{
                return [...prevCart,{product, quantity}];
            }
        })

    }

    function RemoveFromCart(product){
        setCart(prevCart => prevCart.filter(e => e.product.id !== product.product.id))
    }
    function UpdateQuantity(product,newQuantity){
        if(newQuantity <=0){
            RemoveFromCart(product)
        }
        setCart(prevCart =>
            prevCart.map(e => e.product.id === product.product.id
                            ?{...e,quantity:newQuantity}
                            :e
            )
        )
    }

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
    return (
        <>
        <NavBar ItemCount={totalItems} />
        <Outlet context={{cart, AddToCart, RemoveFromCart, UpdateQuantity}} />
        </>
    );
};

export default App;

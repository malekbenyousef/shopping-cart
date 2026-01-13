import { Link } from "react-router"

export default function HomePage(){
    return(
        <>
      <h1>Welcome to the best online shop on earth </h1>

      <p>here you will find anything that can be bought </p>
      <div>check out our shop <Link to="ShopPage">here</Link> </div>
        </>

    )

}

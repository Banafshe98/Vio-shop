//import React from "react"
import { Container } from "../components/Container"
import { ProductItem } from "../components/ProductItem"
import { Link } from "react-router-dom"
export const Store=()=>{
    return(
       
       <Container>
       <h1 className="text-right mt-5">Vio Shop</h1>
        <div className="grid grid-cols-4 gap-4 mt-5">
        <Link to={`/Product/${1}`}>
        <ProductItem/>
        </Link>


        <Link to={`/Product/${2}`}>
        <ProductItem/>
        </Link>

        <Link to={`/Product/${3}`}>
        <ProductItem/>
        </Link>

        <Link to={`/Product/${4}`}>
        <ProductItem/>
        </Link>

        </div>
       </Container>
       

    )
}
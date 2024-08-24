//import React from "react"
import { Container } from "../components/Container"
import { ProductItem } from "../components/ProductItem"
export const Store=()=>{
    return(
       
       <Container>
       <h1 className="text-right mt-5">Vio Shop</h1>
        <div className="grid grid-cols-4 gap-4 mt-5">
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
           <ProductItem/>
        </div>
       </Container>
       

    )
}
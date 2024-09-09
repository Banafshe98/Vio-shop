import axios from "axios";

export const client = axios.create({
    baseURL:"http://localhost:8001/"
})

export const getProducts = async()=>{
    const {data} =await client("/products");
    return data;
} 


export const getProduct = async(id : string | number)=> {
    const {data} = await client(`/products/${id}`)
    return data;
}
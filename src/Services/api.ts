import axios from "axios";

export const client = axios.create({
    baseURL:"http://localhost:3000/"
})

export const getProducts = async()=>{
    const {data} =await client("/products");
    return data;
} 
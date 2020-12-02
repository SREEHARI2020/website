import React from 'react';
import { Loader } from './Loader';
import { ProductCard } from './ProductCard';
import { useAxiosGet } from './HttpRequest';

export const Home = () => {
   
   let content=null
 const url=`https://5fc613354931580016e3c8f0.mockapi.io/products?page=1&limit=10`
 
 let products=useAxiosGet(url)

if(products.error){
    content=<p>error please refresh the page</p>
}
if(products.loading){
    content=<Loader/> 
}
if(products.data){
    
    content=products.data.map((product)=>(
    <div> <ProductCard product={product} key={product.id} /></div>
    
    ))
}


   
    return (
        <div>
            


            {content}
            </div>
    )
}

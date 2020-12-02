import React,{useState,useEffect} from 'react';
import axios from 'axios';


export function useAxiosGet(url){
    const [products, setproducts] = useState({
        loading:false,
        data:null,
        error:false
    })
    useEffect(() => {
        setproducts({
            loading:true,
            data:null,
            error:false
        })
        axios.get(url)
        .then(response=>{
            console.log(response.data)
            setproducts({
                loading:false,
                data:response.data,
                error:false
            })
        })
        .catch(error=>setproducts({
            loading:false,
            data:null,
            error:true
       
        }))
           
       }, [url])
     
       
    
    return products
       
  
}


import axios from "axios";
import { useEffect } from "react";


export default function ProductGallary(){

    useEffect(()=> {
        async function getProducts(){
            const respose = await axios.get(' https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
            console.log(respose.data);
        }
        getProducts();
    }, [])

    return(
        <div>  
              
        </div>
    )
}
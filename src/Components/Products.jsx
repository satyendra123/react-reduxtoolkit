import { useDispatch } from 'react-redux'
import { storeProduct } from '../redux/slices/ProductSlices'
import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
const Products = () =>{
    const dispatch = useDispatch()
    const [product, setProduct]= useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setProduct(data);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const viewProducts = (item) =>{
        dispatch(storeProduct(item));
    }

    return(
        <>
        <div className='bg-gray-100 min-h-screen flex flex-col py-16'>
            <div className="bg-white text-center py-8">
                <h1 className="text-center font-bold">Redux Store</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 p-4">
            {product.map((item,index)=>(
                <div key={index} className="bg-white shadow-lg rounded-lg flex flex-col h-full">
           <div className="w-full h-48 flex items-center justify-center overflow-hidden mb-4">
              <img src={item.image} alt={item.title} className="h-full object-contain"/>
            </div>
                    
             <h2 className="text-sm font-semibold mb-2 line-clamp-2 p-2">{item.title}</h2>
             <p className="text-lg font-bold text-gray-800 p-2">${item.price}</p>
             <button onClick={()=>{viewProducts(item)}} className="w-full bg-green-300 text-white mt-auto p-4">view product detail</button>

            </div>
            ))}
           
        </div>
        </div>
        
        </>
    )
}
export default Products
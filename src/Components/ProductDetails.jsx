import React from 'react'
const ProductDetails = () =>{
    return(
        <>
          <div className="min-h-screen bg-gray-400 flex flex-col justify-center items-center">
            <div className="bg-white shadow-lg w-6/12 p-12">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="" className="w-[70%] mx-auto"/>
                <h1 className="font-bold text-3xl">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                <p className="text-gray-500">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                <label className="bg-blue-600 px-6 py-2 font-semibold capitalize text-white">Men's cloth</label>
                <button className="bg-rose-600 px-6 py-2 font-semibold capitalize text-white m-6">Buy Now</button>

            </div>
          </div>
        </>
    )
}
export default ProductDetails
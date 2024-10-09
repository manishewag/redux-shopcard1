/* eslint-disable no-unused-vars */
import React from 'react'
import { useGetAllProductsQuery } from '../Features/productsApi'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../Features/cartSlice';



const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const history = useNavigate();
  

  const handleAddToCart =  (product) => {
    dispatch(addToCart(product));
    history("/cart")
  }


  return (
    <div className='container mt-3 px-5'>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured..</p>
      ) : (
        <>
        <div className='row row-cols-md-2 g-4 p-5'>
          {data?.map((product) => (
            <div key={product.id} className='card px-5'>
              <img className= 'card-img-top h-75' src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
                <span>{product.description}</span>
                <span className='fw-bold fs-4'>${product.price}</span>
              <button className='btn btn-primary mb-3' onClick={() => handleAddToCart(product)}>
                Add to Cart</button>
            </div>
          ))}
        </div>
        </>
      )
    }
    </div>
  )
}

export default Home
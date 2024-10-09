/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../Features/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  }

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  }

  const handleIncreasedCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className=' text-center mt-3 bg-secondary px-5 p-3'>
      <h1 className='text-white py-3'>Shopping Cart</h1>
      {cart.cartItems.length === 0 ? (
        <div className='catr-empty'>
          <p>Your cart is currently empty</p>
          <div className='start-shopping'>
            <Link to="/" className='text-decoration-none'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
              </svg>&nbsp;&nbsp;
              <span className='text-white'>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className='d-flex justify-content-between mt-3'>
            <div className='d-flex col-6'>
            <h3 className="product-title px-4">Product</h3>
            <h3 className="name px-5">Product Name</h3>
            </div>
            <h3 className="px-5">Price</h3>
            <h3 className="px-2">Quantity</h3>
            <h3 className="px-3">Total</h3>
          </div>
          <div className='d-flex flex-wrap'>
            {cart.cartItems?.map(cartItem => (
              <div key={cartItem.id} className='d-flex mb-3 justify-content-between border-top py-2'>
                <div className='col-6 d-flex'>
                  <img src={cartItem.image} className='col-3 px-4' alt="" />
                  <div className='detail ms-4'>
                    <h3 className='mt-2'>{cartItem.name}</h3>
                    <button className='btn btn-danger mt-2' onClick={() => handleRemoveFromCart(cartItem)}>
                      Remove</button>
                  </div>
                  </div>
                  <div className='py-5 fs-5'>{cartItem.price}</div>
                  <div className="button py-5">
                    <button className='rounded'onClick={() => handleDecreaseCart(cartItem)}>
                       - </button>
                    <button className="rounded">{cartItem.cartQuantity}</button>
                    <button className='rounded' onClick={() => handleIncreasedCart(cartItem)}>
                       + </button>
                  </div>
                  <div className="total-price px-2 py-5 fw-bold fs-4">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
              </div>
            ))}
          </div>
          <div className='border-top'>
          <div className='d-flex justify-content-between mt-3'>
            <div className='mt-3'>
            <button onClick={() => handleClearCart()} className='btn btn-primary px-4'>
              Clear Cart</button>
              </div>
            <div>
              <div>
                <span className='fs-6'>Subtotal</span>&nbsp;&nbsp;
                <span className='fw-bold fs-4'>${cart.cartTotalAmount}</span>
              </div>
              <button className='btn btn-primary px-3 mt-2'>Check Out</button>
              <div className='start-shopping mt-2'>
            <Link to="/" className='text-decoration-none'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
              </svg>&nbsp;&nbsp;
              <span className='text-white'>Start Shopping</span>
            </Link>
            <div className='mt-4'></div>
          </div>
            </div>
          </div>
          </div>
        </div>
      ) }
    </div>
  )
}

export default Cart
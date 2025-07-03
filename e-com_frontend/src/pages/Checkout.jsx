import React, { useContext, useState } from 'react'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const [method, setMethod] = useState('cod');
    const navigate = useNavigate();

    return (
        <form onSubmit={(e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            navigate('/confirm');
        } else {
            e.target.reportValidity(); // Shows browser validation messages
        }
        }}>
        <div className="container py-5 border-top min-vh-80">
            <div className="row gy-4">
            {/* Adress Form */}
            <div className="col-12 col-sm-6 text-start">
                <div className="mb-3 h4">
                <p>DELIVERY INFORMATION</p>
                </div>
                <div className="row g-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First Name" required />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>
                </div>
                <div className="mt-3">
                <input type="email" className="form-control" placeholder="Email Address" required/>
                </div>
                <div className="mt-3">
                <input type="text" className="form-control" placeholder="Address Line 1" required/>
                </div>
                <div className="row g-3 mt-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="City" required/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="State" required/>
                </div>
                </div>
                <div className="row g-3 mt-3">
                <div className="col">
                    <input type="number" className="form-control" placeholder="Pin Code" required/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Country" required/>
                </div>
                </div>
                <div className="mt-3">
                <input type="number" className="form-control" placeholder="Mobile" required/>
                </div>
            </div>

            {/* Right Side Content */}
            <div className="col-12 col-sm-6">
                <CartTotal />
                <div className="mb-4 mt-5 text-start">
                    <p className='fs-4'>PAYMENT METHODS</p>
                <div className="d-flex flex-column flex-lg-row gap-3 mt-3">
                    <div onClick={() => setMethod('stripe')} className="d-flex align-items-center gap-3 p-2 border rounded cursor-pointer">
                    <div className={`rounded-circle border ${method === 'stripe' ? 'bg-success' : ''}`} style={{ width: '14px', height: '14px' }}></div>
                    <img className="mx-2" src={assets.stripe_logo} alt="Stripe" height="20" />
                    </div>
                    <div onClick={() => setMethod('razorpay')} className="d-flex align-items-center gap-3 p-2 border rounded cursor-pointer">
                    <div className={`rounded-circle border ${method === 'razorpay' ? 'bg-success' : ''}`} style={{ width: '14px', height: '14px' }}></div>
                    <img className="mx-2" src={assets.razorpay_logo} alt="RazorPay" height="20" />
                    </div>
                    <div onClick={() => setMethod('cod')} className="d-flex align-items-center gap-3 p-2 border rounded cursor-pointer">
                    <div className={`rounded-circle border ${method === 'cod' ? 'bg-success' : ''}`} style={{ width: '14px', height: '14px' }}></div>
                    <p className="m-2 text-muted small fw-medium ">CASH ON DELIVERY</p>
                    </div>
                </div>
                <div className="text-end mt-4">
                    <button type='submit' className="btn btn-dark px-4 py-2">PLACE ORDER</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </form>
    );

}

export default Checkout;
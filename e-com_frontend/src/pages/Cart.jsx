import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import CartTotal from '../components/CartTotal'

const Cart = () => {

    const { products, currency, cartItems, updateQuantity } = useContext(CartContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];

        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
            tempData.push({
                _id: itemId,
                quantity: cartItems[itemId],
            });
            }
        }

        setCartData(tempData);
    }, [cartItems]);

    const isCartEmpty = cartData.length === 0;


    return (
        <div className="border-top pt-5">
            <div className="mb-5 h2 text-start">
            <p className="fs-2">YOUR CART</p>
            </div>
            <div>
            {cartData.map((item, index) => {
                const productData = products.find((product) => product._id === item._id);

                return (
                <div key={index} className="row py-4 text-secondary border-top border-bottom align-items-center g-4">
                    <div className="col d-flex align-items-start gap-3">
                        <div
                            style={{
                                height: "150px",
                                width: "100px",
                                backgroundColor: "#fdf6e3"
                            }}>
                            <img className="img-fluid" style={{ maxWidth: '80px' }} src={productData.image[0]} alt="Photo" />
                        </div>
                        <div>
                            <p className="h6">{productData.name}</p>
                            <div className="d-flex align-items-center gap-3 mt-2">
                            <p>
                                {currency}&nbsp;{productData.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                    <input
                        onChange={(e) =>
                        e.target.value === '' || e.target.value === '0'
                            ? null
                            : updateQuantity(item._id, Number(e.target.value))
                        }
                        className="form-control"
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                        style={{ maxWidth: '80px' }}
                    />
                    </div>
                    <div className="col-auto">
                    <img
                        onClick={() => updateQuantity(item._id, 0)}
                        className="img-fluid cursor-pointer"
                        style={{ maxWidth: '20px' }}
                        src={assets.bin_icon}
                        alt="Remove"
                    />
                    </div>
                </div>
                );
            })}
            </div>






            <div className="d-flex justify-content-end my-5">
            <div className="w-100" style={{ maxWidth: '450px' }}>
                <CartTotal />
                <div className="text-end">
                <Link to="/checkout">
                <button
                    className={`btn btn-dark px-4 py-2 mt-4 ${isCartEmpty ? 'disabled opacity-50' : ''}`}
                    disabled={isCartEmpty}
                >
                    PROCEED TO CHECKOUT
                </button>
                </Link>
                </div>
            </div>
            </div>
        </div>
    );
}


export default Cart;
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const CartTotal = () => {

    const {currency, getCartAmount, delivery_fee} = useContext(CartContext);

    return (
        <div className="w-100">
            <p className="fs-3 mb-3 text-start h4">CART TOTAL</p>

            <div className="d-flex flex-column mt-2 small">
                {/* Sub Total */}
                <div className="d-flex justify-content-between">
                    <p className="fs-5 fw-medium mb-0">Sub Total</p>
                    <p className="fs-5 fw-medium mb-0">
                        {currency}&nbsp;
                        {getCartAmount().toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                        })}
                    </p>
                </div>
                <hr />

                {/* Shipping Fee */}
                <div className="d-flex justify-content-between">
                <p className="fs-5 fw-medium mb-0">Shipping Fee</p>
                <p className="fs-5 fw-medium mb-0">
                    {currency}&nbsp;
                    {delivery_fee.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    })}
                </p>
                </div>
                <hr />

                {/* Total Amount */}
                <div className="d-flex justify-content-between">
                <p className="fs-4 fw-semibold mb-0">Total Amount</p>
                <p className="fs-4 fw-semibold mb-0">
                    {currency}&nbsp;
                    {(getCartAmount() === 0
                    ? 0
                    : getCartAmount() + delivery_fee
                    ).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    })}
                </p>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
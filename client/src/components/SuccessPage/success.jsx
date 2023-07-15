import React, { useEffect, useContext } from "react";
import "./success.scss";
import tick from "../../assets/tick.png";

const success = () => {

    const min = 10000000; // Minimum 8-digit number (inclusive)
    const max = 99999999; // Maximum 8-digit number (inclusive)


    return (
        <>

            <div class="container">
                <h1>Payment Success!</h1>
                <img src={tick} alt="" className="tick" />
                <p>Thank you for your purchase! Your order has been successfully placed.</p>

                <div class="order-details">
                    <p><strong>Order ID:</strong> <span id="order-id">{`${Math.floor(Math.random() * (max - min + 1) + min)}`}</span></p>
                    <p><strong>Date:</strong> <span id="order-date">{`${new Date().toLocaleString()}`}</span></p>
                </div>
            </div>

        </>
    );




};

export default success;

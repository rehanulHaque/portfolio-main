'use client'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import axios from 'axios'
declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function BuyNowButton({ productId, amount, user }: { productId: string, amount: number, user: { id: string, name: string, email: string } }) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    const handelCLick = async () => {
        try {
            const { data } = await axios.post("/api/checkout", { productId, amount });
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: data.order.amount,
                currency: "INR",
                name: "Portfolio",
                description: "Purchase",
                order_id: data.order.id,
                handler: async function (response: any) {
                    console.log("payment successfull ", response);
                },
                prefill: {
                    name: user.name,
                    email: user.email,
                },
                theme: {
                    color: "#6366f1",
                },
            };

            if (window.Razorpay) {
                const razorpay = new window.Razorpay(options);
                razorpay.open();
            } else {
                throw new Error("Razorpay not loaded");
            }
        } catch (error: any) {
            console.log(error.message)
        }
    }
    return (
        <Button className='' onClick={handelCLick}>Buy Now!</Button>
    )
}

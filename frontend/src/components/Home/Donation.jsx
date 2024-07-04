import api from '../../../api'
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";

export default function Donation() {
  const {currentUser} = useSelector((state)=>state.user)
  console.log(currentUser)
  const [amount, setAmount]= useState()
  const[useData, setUserData]=useState()
    const handleDonate = () => {
      const payment = api.post("/api/v2/payment",

      )
       
    }
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f5f5]">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex items-center justify-center flex-col max-w-[600px] mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Support Our Cause
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Your donation can make a real difference in the lives of those in
            need. Help us continue our mission to provide aid and support to the
            community.
          </p>
          <Input
          type="number"
            placeholder="Enter your donation amount"
            value={amount}
            className="flex items-center justify-center w-[50%]"
            onChange={(e) => setAmount(e.target.value)}
            Value={amount}
          />
          <Link
          onClick={handleDonate}
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}

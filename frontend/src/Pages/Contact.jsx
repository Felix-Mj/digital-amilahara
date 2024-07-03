import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [userData, setUserData] = useState();
  const handlechangecontectData = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/contectus", userData);
      console.log(res.data);
      if (res.status == 201) {
        toast.success("Your message has been sent successfully", {
          position: "top-right",
        });
        setUserData();
      }
    } catch (error) {
      toast.error("message not send", {
        position: "top-right",
      });
    }
  };
  return (
    <div className="w-full max-w-4xl mx-auto  md:py-20">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Us
        </h1>
        <p className="text-muted-foreground md:text-xl">
          Have a question or need assistance? Fill out the form below and we'll
          get back to you as soon as possible.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 md:gap-12">
        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  onChange={handlechangecontectData}
                />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={handlechangecontectData}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Subject</Label>
              <Input
                id="subject"
                placeholder="Enter the subject"
                onChange={handlechangecontectData}
              />
            </div>
            <div className="space-y-2">
              <Label>Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[150px]"
                onChange={handlechangecontectData}
              />
            </div>
            <Button onClick={handleSubmit} className="w-full">
              Submit
            </Button>
          </form>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-1 text-muted-foreground">
              <div>
                <MapPinIcon className="inline-block w-5 h-5 mr-2" />
                <span>123 Main St, Anytown USA</span>
              </div>
              <div>
                <PhoneIcon className="inline-block w-5 h-5 mr-2" />
                <span>(123) 456-7890</span>
              </div>
              <div>
                <ClockIcon className="inline-block w-5 h-5 mr-2" />
                <span>Monday - Friday, 9am - 5pm</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <InstagramIcon className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <LinkedinIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

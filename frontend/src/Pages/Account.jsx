import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInFailure, signInStart, signInSuccess } from "@/Redux/user/userSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function Account() {
  const [formData, setFormData] = useState({});
  const [signup, setSignup] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      dispatch(signInStart());
      const res = await axios.post("/api/v1/signup", formData);
      dispatch(signInSuccess(res.data.user));
      if (!res) {
        dispatch(signInFailure());
      }
      setIsDialogOpen(false); // Close dialog
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    try {
      dispatch(signInStart());
      const res = await axios.post("/api/v1/login", formData);
      dispatch(signInSuccess(res.data.user));
      if (!res) {
        dispatch(signInFailure());
      }
      setIsDialogOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={() => setIsDialogOpen(true)}>Signup</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[430px] mt-5 flex items-center justify-center flex-col">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Signup</TabsTrigger>
            <TabsTrigger value="password">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>Create Account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label>Name</Label>
                  <Input id="name" type="text" placeholder="Enter Your Name" required onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input id="email" type="email" placeholder="Enter Your Email" required onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <Label>Password</Label>
                  <Input id="password" type="password" placeholder="Enter Your Password" required onChange={handleChange} />
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-center">
                <Button onClick={handleSubmit}>Signup</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Login to your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <Label>Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" required onChange={handleChange} />
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-center">
                <Button onClick={handleLogin}>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

import React from "react";
import { Button } from "@/components/ui/button";
import {Dialog, DialogContent, DialogTrigger,} from "@/components/ui/dialog";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Account() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Signup</Button>
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
                <CardDescription>
                  Create Account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label>Name</Label>
                  <Input id="name" type="text" placeholder="Enter Your Name" required />
                </div>
                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input id="email" type='email' placeholder="Enter Your Email" required />
                </div>
                <div className="space-y-1">
                  <Label>Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-center">
                <Button >Signup</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input
                    id="Email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label>Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-center">
                <Button >Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

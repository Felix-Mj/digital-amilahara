import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const AdminPage = () => {
  return (
    <div className="flex gap-2 p-2">
      <div className="w-full">
        <Tabs defaultValue="account" className="w-full flex">
          <TabsList className="w-1/5 flex-col mt-20 bg-white">
            <h1 className="text-2xl text-black dark:text-white">Admin Page</h1>
            <TabsTrigger value="Dashboard" className="mt-5">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="Event">Slider Event</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
          </TabsList>
          <div className="w-full">
            <TabsContent value="Dashboard">
              <Card>
                <div className="flex">
                <Card className='w-full'>
                  <h1 className="flex items-center justify-center">Blog Details</h1>
                  <table >
                    <tr>
                      <th>Title</th>
                      <th>Delete</th>
                    </tr>
                    <tr>
                      <td>Title</td>
                      <td>Delete</td>
                    </tr>
                  </table>
                </Card>
                <Card className='w-full'>
                  <h1 className="flex items-center justify-center">News Details</h1>
                  <table>
                    <tr>
                      <th>Title</th>
                      <th>Delete</th>
                    </tr>
                    <tr>
                      <td>Title</td>
                      <td>Delete</td>
                    </tr>
                  </table>
                </Card>
                </div>
                <Card className='w-full mt-2'>
                  <h1 className="flex items-center justify-center">Event Details</h1>
                  <table>
                    <tr>
                      <th>Title</th>
                      <th>Delete</th>
                    </tr>
                    <tr>
                      <td>Title</td>
                      <td>Delete</td>
                    </tr>
                  </table>
                </Card>
              </Card>
            </TabsContent>
            <TabsContent value="Event">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="blog">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="news">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

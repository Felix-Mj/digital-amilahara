import React, { useEffect, useState } from "react";
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
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import axios from "axios";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const AdminPage = () => {
  const [blogData, setBlogdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/v1/bloglist");
      setBlogdata(res.data.data);
    };
    getData();
  }, []);

  return (
    <div className="flex gap-2 p-2">
      <div className="w-full">
        <Tabs defaultValue="account" className="w-full flex">
          <TabsList className="w-1/5 flex-col mt-20 bg-white">
            <h1 className="text-2xl text-black dark:text-white">Admin Page</h1>
            <TabsTrigger value="Dashboard" className="mt-5 border-none" defaultValue="Dashboard">
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
                  <Card className="w-full">
                    <h1 className="flex items-center justify-center font-bold">
                      Blog Details
                    </h1>
                    <div className=" rounded-lg w-full">
                      <div className="relative w-full overflow-auto">
                        <Table className="border-none">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[80%]">Title</TableHead>
                              <TableHead>Category</TableHead>
                              <TableHead className="text-right">
                                Delete
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {blogData.map((e, i) => {
                              return (
                                <TableRow key={i}>
                                  <TableCell className="font-medium">
                                    {e?.title}
                                  </TableCell>
                                  <TableCell>{e?.category}</TableCell>
                                  <TableCell className="text-right">
                                    <Button variant="destructive">
                                      Delete
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </Card>
                  <Card className="w-full">
                    <h1 className="flex items-center justify-center font-bold">
                      News Details
                    </h1>
                    <Table className="border-none">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80%]">Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead className="text-right">Delete</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {blogData.map((e, i) => {
                          return (
                            <TableRow key={i}>
                              <TableCell className="font-medium">
                                {e?.title}
                              </TableCell>
                              <TableCell>{e?.category}</TableCell>
                              <TableCell className="text-right">
                                <Button variant="destructive">Delete</Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </Card>
                </div>
                <Card className="w-full mt-2">
                  <h1 className="flex items-center justify-center font-bold">
                    Event Details
                  </h1>
                  <Table className="border-none">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80%]">Title</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right">Delete</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {blogData.map((e, i) => {
                        return (
                          <TableRow key={i}>
                            <TableCell className="font-medium">
                              {e?.title}
                            </TableCell>
                            <TableCell>{e?.category}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="destructive">Delete</Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
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

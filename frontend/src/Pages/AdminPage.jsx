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
import { Textarea } from "@/components/ui/textarea";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminPage = () => {
  const [value, setValue]= useState()
  const [blogData, setBlogdata] = useState([]);
  const [sliderData, setSliderdata] = useState([]);
  const [createBlog, setCreateblog]= useState();
  const [slider, setSlider]= useState()

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/v1/bloglist");
      setBlogdata(res.data.data);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/v1/slider");
      setSliderdata(res.data.data);
    };
    getData();
  }, []);


  const handlechangeBlog= (e)=>{
    setCreateblog({...createBlog, [e.target.id]: e.target.value })
  }
  const handlechangeslider =(e)=>{
    setSlider({...slider, [e.target.id]: e.target.value })
  }
  const handleSubmitBlog= async ()=>{
    try {
      const res = await axios.post("/api/v1/blog", createBlog);
      if (res.data.success == true) {
        toast.success("Blog Created Succesfully", {
          position: "top-right",
        });
        setCreateblog(null)
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmitSlider = async () => {
    const res = await axios.post("/api/v1/slider", slider);
    if (res.status == 201) {
      toast.success("Slider Created Succesfully", {
        position: "top-right",
      });

    }
  };

  return (
    <div className="flex gap-2 p-2">
      <div className="w-full">
        <Tabs defaultValue="Dashboard" className="w-full flex">
          <TabsList className="w-1/5 flex-col mt-20 bg-white">
            <h1 className="text-2xl text-black dark:text-white">Admin Page</h1>
            <TabsTrigger value="Dashboard" className="mt-5 border-none">
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
                    <div className="flex items-center justify-center gap-8 p-4">
                      <div>
                      <ArrowLeft size={26} strokeWidth={3}  className=" hover:text-red-600 cursor-pointer" />
                      </div>
                      <p className="font-bold text-2xl">1</p>
                      <div>
                      <ArrowRight size={26} strokeWidth={3} className=" hover:text-red-600 cursor-pointer" />
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
                    <div className="flex items-center justify-center gap-8 p-4">
                      <div>
                      <ArrowLeft size={26} strokeWidth={3}  className=" hover:text-red-600 cursor-pointer" />
                      </div>
                      <p className="font-bold text-2xl">1</p>
                      <div>
                      <ArrowRight size={26} strokeWidth={3} className=" hover:text-red-600 cursor-pointer" />
                      </div>
                    </div>
                  </Card>
                </div>
                <Card className="w-full mt-2">
                  <h1 className="flex items-center justify-center font-bold mt-5">
                    Slider Details
                  </h1>
                  <Table className="border-none">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80%]">Title</TableHead>
                        <TableHead className="text-right">Delete</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sliderData.map((e, i) => {
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
                    <div className="flex items-center justify-center gap-8 p-4">
                      <div>
                      <ArrowLeft size={26} strokeWidth={3}  className=" hover:text-red-600 cursor-pointer" />
                      </div>
                      <p className="font-bold text-2xl">1</p>
                      <div>
                      <ArrowRight size={26} strokeWidth={3} className=" hover:text-red-600 cursor-pointer" />
                      </div>
                    </div>
                </Card>
              </Card>
            </TabsContent>
            <TabsContent value="Event">
              <Card className='flex items-center justify-center flex-col w-full'>
                <CardHeader>
                  <CardTitle>Add Slider</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 w-1/2">
                  <div className="space-y-1">
                    <Label >Title</Label>
                    <Input id="title" type="text"placeholder='Enter Title' onChange={handlechangeslider} />
                  </div>
                  <div className="space-y-1">
                    <Label >Image</Label>
                    <Input id="image" type="text" placeholder='Enter Image url' onChange={handlechangeslider} />
                  </div>
                  <div className="space-y-1">
                    <Label >Meassage</Label>
                    <Textarea id="meassage" placeholder="Type your message here." onChange={handlechangeslider} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSubmitSlider} >Submit</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="blog">
              <Card>
                <CardHeader>
                  <CardTitle>Add Blog Post</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label >Title</Label>
                    <Input id="title" type="Text" onChange={handlechangeBlog} />
                  </div>
                  <div className="space-y-1">
                    <Label>Categrogry</Label>
                    <Input id="category" type="text" placeholder='Enter blog categry' onChange={handlechangeBlog}/>
                  </div>
                  <div className="space-y-1">
                    <Label>Image</Label>
                    <Input id="image" type="text" placeholder='Enter Image url' onChange={handlechangeBlog}/>
                  </div>
                  <div className="space-y-1">
                  <ReactQuill theme="snow" id="description" value={createBlog} onChange={handlechangeBlog} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSubmitBlog}>Submit</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="news">
              <Card>
                <CardHeader>
                  <CardTitle>Add News</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label >Title</Label>
                    <Input id="title" type="Text" />
                  </div>
                  <div className="space-y-1">
                    <Label>Image</Label>
                    <Input id="image" type="text" placeholder='Enter Image url'/>
                  </div>
                  <div className="space-y-1">
                  <ReactQuill theme="snow" value={value} onChange={setValue} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Submit</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <ToastContainer />
    </div>
  );
};

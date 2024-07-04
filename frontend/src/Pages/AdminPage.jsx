import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {Card,CardContent,CardFooter, CardHeader,CardTitle,} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Table,TableHeader,TableRow,TableHead,TableBody,TableCell,} from "@/components/ui/table";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from '../../api'

export const AdminPage = () => {
  const [value, setValue]= useState()
  const [blogData, setBlogdata] = useState([]);
  const [sliderData, setSliderdata] = useState([]);
  const [contectusData, setContectusdata] = useState([]);
  const [createBlog, setCreateblog]= useState();
  const [slider, setSlider]= useState()
  const [currentBlogPage, setcurrentBlogPage] = useState(1);
  const [currentContectus, setcurrentContectus] = useState(1);
  const [currentSlider, setcurrentSlider] = useState(1);
  const itemsPerPage = 3;
  useEffect(() => {
    const getData = async () => {
      const res = await api.get("/api/v1/bloglist");
      setBlogdata(res.data.data);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const res = await api.get("/api/v1/slider");
      setSliderdata(res.data.data);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const res = await api.get("/api/v1/contectus");
      setContectusdata(res.data.data);
    };
    getData();
  }, []);


// this is for take input from user function and submit blog post and slider post
  const handlechangeBlog= (e)=>{
    setCreateblog({...createBlog, [e.target.id]: e.target.value })
  }
  const handlechangeslider =(e)=>{
    setSlider({...slider, [e.target.id]: e.target.value })
  }
  const handleSubmitBlog= async ()=>{
    try {
      const res = await api.post("/api/v1/blog", createBlog);
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
    const res = await api.post("/api/v1/slider", slider);
    if (res.status == 201) {
      toast.success("Slider Created Succesfully", {
        position: "top-right",
      });

    }
  };


  // for the all pagenation for manage api 
  const handleBlogNextPage = () => {
    setcurrentBlogPage((prevPage) => prevPage + 1);
  };
  
  const handleBlogPreviousPage = () => {
    setcurrentBlogPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  // pagenation for blog dettels
  const startIndex = (currentBlogPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = blogData.slice(startIndex, endIndex);

// handle constecus data pagenation
  const handleContecusNextPage = () => {
    setcurrentContectus((prevPage) => prevPage + 1);
  };
  const handleContecusPreviousPage = () => {
    setcurrentContectus((prevPage) => Math.max(prevPage - 1, 1));
  };

// pagenation for contect us
  const startIndexContectus = (currentContectus - 1) * itemsPerPage;
  const endIndexContectus = startIndexContectus + itemsPerPage;
  const contectCurrentData = contectusData.slice(startIndexContectus, endIndexContectus);

  //  handel slider 
  const handleSliderNextPage = () => {
    setcurrentSlider((prevPage) => prevPage + 1);
  };
  const handleSliderPreviousPage = () => {
    setcurrentSlider((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndexSlider = (currentSlider - 1) * itemsPerPage;
  const endIndexSlider = startIndexSlider + itemsPerPage;
  const sliderCurrentData = sliderData.slice(startIndexSlider, endIndexSlider);


  const handelDelteblogPost = async (id)=>{
    try {
      const res = await api.delete(`/api/v1/bloglist/delete/${id}`);
      if (res.status == 200) {
        toast.success("Blog Deleted Succesfully", {
          position: "top-right",
        });
        setBlogdata(blogData.filter((item) => item._id!== e._id));
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handelDelteContectus = async (id)=>{
    try {
      const res = await api.delete(`/api/v1/contectus/d/${id}`);
      console.log(res)
      if (res.status == 200) {
        toast.success("Contect Details Deleted Succesfully", {
          position: "top-right",
        });
        setBlogdata(blogData.filter((item) => item._id!== e._id));
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handelDelteSlider = async (id)=>{
    try {
      const res = await api.delete(`/api/v1/slider/${id}`);
      console.log(res)
      if (res.status == 200) {
        toast.success("Slider Delete Succesfully", {
          position: "top-right",
        });
        setBlogdata(blogData.filter((item) => item._id!== e._id));
      }
    } catch (error) {
      console.log(error);
    }
  }


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
          </TabsList>
          <div className="w-full">
            <TabsContent value="Dashboard">
              <Card>
                <div className="flex">
                  <Card className="w-full">
                    <h1 className="flex items-center justify-center font-bold mt-5">
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
                            {blogData.length > 0 ? (
                              currentData.map((e, i) => (
                                <TableRow key={startIndex + i}>
                                  <TableCell className="font-medium">
                                    {e?.title}
                                  </TableCell>
                                  <TableCell>{e?.category}</TableCell>
                                  <TableCell className="text-right">
                                    <Button onClick={()=>handelDelteblogPost(e._id)} variant="destructive">
                                      Delete
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))
                            ) : (
                              <>Loading</>
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-8 p-4">
                      <div>
                        {currentBlogPage > 1 && (
                          <ArrowLeft
                            size={26}
                            onClick={handleBlogPreviousPage}
                            strokeWidth={3}
                            className=" hover:text-red-600 cursor-pointer"
                          />
                        )}
                      </div>
                      <p className="font-bold text-2xl">{currentBlogPage}</p>
                      <div>
                        {blogData.length > endIndex && (
                          <ArrowRight
                            size={26}
                            strokeWidth={3}
                            onClick={handleBlogNextPage}
                            className=" hover:text-red-600 cursor-pointer"
                          />
                        )}
                      </div>
                    </div>
                  </Card>
                  <Card className="w-full">
                    <h1 className="flex items-center justify-center font-bold mt-5">
                      Contect-us Details
                    </h1>
                    <div className=" rounded-lg w-full">
                      <div className="relative w-full overflow-auto">
                        <Table className="border-none">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[10%]">Name</TableHead>
                              <TableHead>Meassages</TableHead>
                              <TableHead className="text-right">
                                Delete
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {contectusData.length > 0 ? (
                              contectCurrentData.map((e, i) => (
                                <TableRow key={startIndex + i}>
                                  <TableCell className="font-medium ">
                                    {e?.name}
                                  </TableCell>
                                  <TableCell>{e?.message}</TableCell>
                                  <TableCell className="text-right">
                                    <Button variant="destructive" onClick={()=>handelDelteContectus(e._id)}>
                                      Delete
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))
                            ) : (
                              <>Loading</>
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-8 p-4">
                      <div>
                        {currentContectus > 1 && (
                          <ArrowLeft
                            size={26}
                            onClick={handleContecusPreviousPage}
                            strokeWidth={3}
                            className=" hover:text-red-600 cursor-pointer"
                          />
                        )}
                      </div>
                      <p className="font-bold text-2xl">{currentContectus}</p>
                      <div>
                        {contectusData.length > endIndexContectus && (
                          <ArrowRight
                            size={26}
                            strokeWidth={3}
                            onClick={handleContecusNextPage}
                            className=" hover:text-red-600 cursor-pointer"
                          />
                        )}
                      </div>
                    </div>
                  </Card>
                  
                </div>
                <Card className="w-full">
                    <h1 className="flex items-center justify-center font-bold mt-5">
                      Slider Details
                    </h1>
                    <div className=" rounded-lg w-full">
                      <div className="relative w-full overflow-auto">
                        <Table className="border-none">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[80%]">Title</TableHead>
                              <TableHead>Image</TableHead>
                              <TableHead className="text-right">
                                Delete
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {sliderData.length > 0 ? (
                              sliderCurrentData.map((e, i) => (
                                <TableRow key={startIndex + i}>
                                  <TableCell className="font-medium">
                                    {e?.title}
                                  </TableCell>
                                  <TableCell>
                                    <img src={e?.image} className="rounded"/>
                                  </TableCell>
                                  <TableCell className="text-right">
                                    <Button variant="destructive" onClick={()=>handelDelteSlider(e._id)}>
                                      Delete
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))
                            ) : (
                              <>Loading</>
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-8 p-4">
                      <div>
                        {currentSlider > 1 && (
                          <ArrowLeft
                            size={26}
                            onClick={handleSliderPreviousPage}
                            strokeWidth={3}
                            className=" hover:text-red-600 cursor-pointer"
                          />
                        )}
                      </div>
                      <p className="font-bold text-2xl">{currentSlider}</p>
                      <div>
                        {sliderData.length > endIndexSlider && (
                          <ArrowRight
                            size={26}
                            strokeWidth={3}
                            onClick={handleSliderNextPage}
                            className=" hover:text-red-600 cursor-pointer"
                          />
                        )}
                      </div>
                    </div>
                  </Card>
              </Card>
            </TabsContent>
            <TabsContent value="Event">
              <Card className="flex items-center justify-center flex-col w-full">
                <CardHeader>
                  <CardTitle>Add Slider</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 w-1/2">
                  <div className="space-y-1">
                    <Label>Title</Label>
                    <Input
                      id="title"
                      type="text"
                      placeholder="Enter Title"
                      onChange={handlechangeslider}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Image</Label>
                    <Input
                      id="image"
                      type="text"
                      placeholder="Enter Image url"
                      onChange={handlechangeslider}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Meassage</Label>
                    <Textarea
                      id="meassage"
                      placeholder="Type your message here."
                      onChange={handlechangeslider}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSubmitSlider}>Submit</Button>
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
                    <Label>Title</Label>
                    <Input id="title" type="Text" onChange={handlechangeBlog} />
                  </div>
                  <div className="space-y-1">
                    <Label>Categrogry</Label>
                    <Input
                      id="category"
                      type="text"
                      placeholder="Enter blog categry"
                      onChange={handlechangeBlog}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label>Image</Label>
                    <Input
                      id="image"
                      type="text"
                      placeholder="Enter Image url"
                      onChange={handlechangeBlog}
                    />
                  </div>
                  <div className="space-y-1">
                    <ReactQuill
                      theme="snow"
                      id="description"
                      value={createBlog}
                      onChange={handlechangeBlog}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSubmitBlog}>Submit</Button>
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewPage() {
    const [data, setData] = useState()
    const id = useParams()
    useEffect(()=>{
        const getData = async ()=>{
            const res = await axios.get(`/api/v1/bloglist/${id.id}`)
            console.log(res.data.data)
            setData(res.data.data)
        }
        getData()   
    },[])
  return (
    <article className="prose prose-gray max-w-3xl mx-auto my-12 dark:prose-invert">
      <div className="space-y-2 not-prose">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {data?.title}
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img
              src="/placeholder.svg"
              alt="Author"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-gray-500 dark:text-gray-400">John Doe</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400">
            Posted on August 24, 2023
          </span>
        </div>
      </div>
      <img 
      src={data?.image} 
      className="w-full h-96 bg-cover"
      alt="" 
      />
      <p>{data?.description}
      </p>
    </article>
  );
}

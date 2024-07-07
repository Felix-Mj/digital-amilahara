import api from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";

export default function ViewPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const id = useParams();
  useEffect(() => {
    setLoading(true); // show loading state before fetch data
    const getData = async () => {
      const res = await api.get(`/api/v1/bloglist/${id.id}`);
      setData(res.data.data);
    };
    getData();
    setLoading(false); // hide loading state after fetch data  // loading state will be false when data is fetched successfully or failed to fetch data.  // so we can show loading state or error message based on this state.  // if loading is true, loading state will be shown.  // if loading is false, loading state will be hidden and data will be shown.  // this is a good practice to avoid unnecessary re-renders.  // we also need to handle error
  }, []);
  return (
    <article className="px-2 md:prose prose-gray max-w-3xl mx-auto my-12 dark:prose-invert">
      {loading == true ? (
        <div className="flex items-center justify-center h-screen">
          <PulseLoader />
        </div>
      ) : (
        <>
          <div className="space-y-2 not-prose">
            <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
              {data?.title}
            </h1>
            {/* <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg"
                  alt="Author"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-gray-500 dark:text-gray-400">
                  John Doe
                </span>
              </div>
              <span className="text-gray-500 dark:text-gray-400">
                Posted on August 24, 2023
              </span>
            </div> */}
          </div>
          <img src={data?.image} className="w-full h-96 bg-cover" alt={data?.title} />
          <p>{data?.description}</p>
        </>
      )}
    </article>
  );
}

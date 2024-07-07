import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../api'
import { PulseLoader } from "react-spinners";

export default function Vlogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  useEffect(() => {
    const getData = async () => {
      const res = await api.get("/api/v1/bloglist");
      setData(res.data.data);
    };
    getData();
  }, []);
  const [data, setData] = useState([]);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="p-5 md:px-20">
        <div className="grid gap-8 place-items-center">
          {data.length > 0 ? (
            currentData.map((e, i) => (
              <Link to={`/blog/${e._id}`} key={startIndex + i}>
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={e?.image}
                    alt="Blog post image"
                    width={400}
                    height={250}
                    className="rounded-lg w-full md:w-[400px] h-[250px] object-cover"
                  />
                  <div className="flex-1 space-y-2 w-full">
                    <h1 className="text-2xl font-bold">{e.title}</h1>
                    <p className="text-gray-500">
                      {e.description.substring(0, 180)}
                    </p>
                    <Link
                      to={`/blog/${e._id}`}
                      className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600"
                      prefetch={false}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex items-center justify-center h-screen">
              <PulseLoader/>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {currentPage > 1 && (
                <PaginationPrevious onClick={handlePreviousPage} />
              )}
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                {currentPage}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              {data.length > endIndex && (
                <PaginationNext onClick={handleNextPage} />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

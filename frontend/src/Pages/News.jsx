import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function News() {
  const [data, setData] = useState();
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="p-5 md:px-20">
        <div className="grid gap-8 place-items-center">
          {data?.map((e, i) => {
            return (
              <Link to={`/blog/${e._id}`} key={i}>
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={e?.Image}
                  alt="Blog post image"
                  width={400}
                  height={250}
                  className="rounded-lg w-full md:w-[400px] h-[250px] object-cover"
                />
                <div className="flex-1 space-y-2 w-full">
                  <h1 className="text-2xl font-bold">{e.Title}</h1>
                  <p className="text-gray-500">{e.content.substring(0, 180)}</p>
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
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

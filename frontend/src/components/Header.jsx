import { MenuIcon, MountainIcon } from "lucide-react";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Account from "@/Pages/Account";
import { useSelector } from "react-redux";

export default function Header() {
  const { LogIn, currentUser } = useSelector((state) => state.user);
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link to={"/"} className="flex items-center gap-2" prefetch={false}>
            <span className="text-lg font-semibold">Digital-Amilehra</span>
          </Link>
          <nav className="mt-6 grid gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 font-medium"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 font-medium"
              prefetch={false}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 font-medium"
              prefetch={false}
            >
              Contact
            </Link>
            <Link
              to="/news"
              className="flex items-center gap-2 font-medium"
              prefetch={false}
            >
              News
            </Link>
            <Link
              to="/blog"
              className="flex items-center gap-2 font-medium"
              prefetch={false}
            >
              Blogs
            </Link>
            <Link
              to="/gallery"
              className="flex items-center gap-2 font-medium"
              prefetch={false}
            >
              Gallery
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="hidden lg:flex items-center gap-6">
        <Link
          to={"/"}
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          <span>Digital-Amilehra</span>
        </Link>
      </div>

      <div className="hidden lg:block ">
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 font-medium"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 font-medium"
            prefetch={false}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 font-medium"
            prefetch={false}
          >
            Contact
          </Link>
          <Link
            to="/news"
            className="flex items-center gap-2 font-medium"
            prefetch={false}
          >
            News
          </Link>
          <Link
            to="/blog"
            className="flex items-center gap-2 font-medium"
            prefetch={false}
          >
            Blogs
          </Link>
          <Link
            to="/gallery"
            className="flex items-center gap-2 font-medium"
            prefetch={false}
          >
            Gallery
          </Link>
        </nav>
      </div>
      <div>
        {LogIn === false ? (
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            <Account />
          </Link>
        ) : (
          <Link to={"/profile"}>
            <Avatar>
              <AvatarImage
                src={currentUser.avator}
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        )}
      </div>
    </header>
  );
}

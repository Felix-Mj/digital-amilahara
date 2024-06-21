import { MenuIcon, MountainIcon } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
      <Link to={"/"} className="flex items-center gap-2" prefetch={false}>
        <span className="text-lg font-semibold">Digital-Amilehra</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link
          href="#"
          className="hover:underline hover:underline-offset-4"
          prefetch={false}
        >
          Signup / Login
        </Link>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            <Link
              href="#"
              className="flex items-center gap-2 font-medium"
              prefetch={false}
            >
              <span>Digtal-Amilehra</span>
            </Link>
            <nav className="grid gap-2">
              <Link
                href="#"
                className="flex items-center gap-2 font-medium"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 font-medium"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 font-medium"
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 font-medium"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

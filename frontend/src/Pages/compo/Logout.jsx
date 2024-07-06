import {
  logOutFailure,
  logOutStart,
  logOutSuccess,
} from "@/Redux/user/userSlice";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import api from '../../../api'
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Logout() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const Dispatch = useDispatch();
  const handleOnSubmit = async () => {
    try {
      Dispatch(logOutStart());
      const res = await api.get("/api/v1/logout");
      if (res.data.success == true) {
        setIsDialogOpen(false);
        toast.success("Logout successfully", {
          position: "top-right",
        });
        setTimeout(() => {
          Dispatch(logOutSuccess(res));
        }, 2000);
      }
    } catch (error) {
      Dispatch(logOutFailure());
    }
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsDialogOpen(true)}
          class="bg-blue-500 hover:bg-red-600 w-full text-white text-sm font-normal py-2 px-4 rounded"
        >
          Log out
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Logout</DialogTitle>
          <DialogDescription>
            Are you sure you want to logout your account?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleOnSubmit}>Conform Logout</Button>
        </DialogFooter>
      </DialogContent>
      <ToastContainer />
    </Dialog>
  );
}

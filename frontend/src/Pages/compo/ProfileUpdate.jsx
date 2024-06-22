import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { updateUserFailure, updateUserStart, updateUserSuccess } from '@/Redux/user/userSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProfileUpdate() {
    const{currentUser}= useSelector((state)=>state.user)
    const [formData, setFormData] =useState();
    const Dispatch = useDispatch()
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleOnChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value})
    }
    const handleSubmit = async () => {
      try {
        Dispatch(updateUserStart());
        const res =await axios.post(
          `/api/v1/userupdate/${currentUser._id}`,
          formData
        );
        if (res) {
          Dispatch(updateUserSuccess(res.data.data));
          toast.success("Profile updated successfully",{
            position: "top-right",
          
          });
          setIsDialogOpen(false);
        }
      } catch (error) {
        Dispatch(updateUserFailure(error.meassage));
        toast.error("Profile updated faild",{
          position: "top-right",
        
        });
      }
    };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsDialogOpen(true)} class="bg-green-500 hover:bg-blue-700 w-full text-white text-sm  font-normal py-2 px-4 rounded">Update Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Name
            </Label>
            <Input
              id="name"
              onChange={handleOnChange}
              defaultValue={currentUser.name}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Email
            </Label>
            <Input
              id="email"
              onChange={handleOnChange}
              defaultValue={currentUser.email}
              className="col-span-3"
            />
            <Label className="text-right">
              Number
            </Label>
            <Input
              id="number"
              onChange={handleOnChange}
              defaultValue={currentUser.number}
              className="col-span-3"
            />
            <Label className="text-right">
              Password
            </Label>
            <Input
              id="password"
              onChange={handleOnChange}
              type="text"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
      <ToastContainer />
    </Dialog>
  )
}

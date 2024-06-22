import React from "react";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      {/* <h1>{currentUser.name}</h1>
      <h1>{currentUser.email}</h1> */}

      <div className=" w-full mt-4 ">
        {/* <!-- HTML structure for user profile card --> */}
        <div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden  ">
          <div class="px-6 py-8 flex justify-center flex-col items-center">
            <img
              className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-20 rounded-full border-inherit"
              src={currentUser.avator} alt=""/>
            <div class="mt-6  sm:mt-0 sm:ml-4 text-center sm:text-left  flex items-center justify-center flex-col  w-full  ">
              <p class=" mt-8 leading-tight text-2xl font-bold">{currentUser.name}</p>
              <p class="text-xl font-bold py-2 leading-tight text-gray-600">
                {currentUser.email}
              </p>
              <div class="mt-4 flex items-center flex-col gap-4 w-full ">
                <button class="bg-green-500 hover:bg-blue-700 w-full text-white text-sm  font-normal py-2 px-4 rounded">
                  Update Profile
                </button>
                <button class="bg-blue-500 hover:bg-red-600 w-full text-white text-sm font-normal py-2 px-4 rounded">
                  LogOut
                </button>
                {/* <button class="bg-red-600 hover:bg-red-700 text-white text-sm font-normal py-2 px-4 rounded">
                  Delete Account
                </button> */}
                
              </div>
            </div>
          </div>
        </div>
        {/* <!-- HTML structure for transaction page --> */}
        <div class="max-w-4xl mx-auto bg-white shadow-md rounded my-8 p-4 w-full h-full">
          <h2 class="text-lg font-semibold mb-4">Transaction History</h2>
          <div class="overflow-x-auto">
            <table class="table-auto min-w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-2">Date</th>
                  <th class="border border-gray-300 px-4 py-2">Description</th>
                  <th class="border border-gray-300 px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">2024-06-21</td>
                  <td class="border border-gray-300 px-4 py-2">
                    Payment for Donatio
                  </td>
                  <td class="border border-gray-300 px-4 py-2">5000k</td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="border border-gray-300 px-4 py-2">2024-06-20</td>
                  <td class="border border-gray-300 px-4 py-2">
                    Monthly subscription
                  </td>
                  <td class="border border-gray-300 px-4 py-2">1000k</td>
                </tr>
                {/* <!-- Add more rows as needed --> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div>
        <div>
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md">
              <CardHeader className="flex flex-col items-center gap-4 p-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-2xl font-bold">Jared Palmer</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    jared@acme.inc
                  </p>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 p-6">
                <Button variant="outline">Update Profile</Button>
                <Button variant="destructive">Delete Account</Button>
                <Button>Log Out</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div></div>
      </div> */}
    </>
  );
};

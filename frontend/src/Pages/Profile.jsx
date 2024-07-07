import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileUpdate from "./compo/ProfileUpdate";
import Logout from "./compo/Logout";
import api from "../../api";

export const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState([])
  useEffect(()=>{
    const getData = async () => {
      const res = await api.get(`/api/v2/payment/${currentUser?.email}`)
      setData(res.data.data)
    }
    getData()
  },[])
  return (
    <>
      <div className=" w-full mt-4 ">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden  ">
          <div className="px-6 py-8 flex justify-center flex-col items-center">
            <img
              className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-20 rounded-full border-inherit"
              src={currentUser?.avator} alt=""/>
            <div className="mt-6  sm:mt-0 sm:ml-4 text-center sm:text-left  flex items-center justify-center flex-col  w-full  ">
              <p className=" mt-8 leading-tight text-2xl font-bold">{currentUser?.name}</p>
              <p className="text-xl font-bold py-2 leading-tight text-gray-600">
                {currentUser?.email}
              </p>
              <div className="mt-4 flex items-center flex-col gap-4 w-full ">
                <ProfileUpdate/>
                <Logout/>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- HTML structure for transaction page --> */}
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded my-8 p-4 w-full h-full">
          <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Amount</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, i) => (
                    <tr key={i}>
                      <td className="border border-gray-300 px-4 py-2">{item?.amount}</td>
                      <td className="border border-gray-300 px-4 py-2">{item?.email}</td>
                      <td className="border border-gray-300 px-4 py-2">{item?.orderId}</td>
                    </tr>
                  ))
                }
                {/* <tr>
                  <td className="border border-gray-300 px-4 py-2">2024-06-21</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Payment for Donatio
                  </td>
                  <td className="border border-gray-300 px-4 py-2">5000k</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

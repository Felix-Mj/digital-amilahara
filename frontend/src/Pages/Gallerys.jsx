import React from "react";
import { useSelector } from "react-redux";

export default function Gallerys() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>

        <form id="image-upload-form" className="mb-4">
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            class="border p-2 mr-2"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload Image
          </button>
        </form>

        <div id="image-gallery" className="grid grid-cols-3 gap-4"></div>
      </div>
    </>
  );
}

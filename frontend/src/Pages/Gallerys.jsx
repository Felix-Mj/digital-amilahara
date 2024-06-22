import React from "react";
import { useSelector } from "react-redux";

export default function Gallerys() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div class="max-w-4xl mx-auto">
        <h1 class="text-2xl font-bold mb-4">Image Gallery</h1>

        <form id="image-upload-form" class="mb-4">
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            class="border p-2 mr-2"
          />
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload Image
          </button>
        </form>

        <div id="image-gallery" class="grid grid-cols-3 gap-4"></div>
      </div>
    </>
  );
}

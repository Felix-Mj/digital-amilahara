// import React from 'react'
// import { useSelector } from 'react-redux'

// export default function Gallerys() {
//     const {currentUser} = useSelector((state)=>state.user)
//   return (
//     <>
//         <div class="max-w-4xl mx-auto">
//     <h1 class="text-2xl font-bold mb-4">Image Gallery</h1>

//     {/* <!-- Image upload form --> */}
//     <form id="image-upload-form" class="mb-4">
//         <input type="file" id="image-upload" accept="image/*" class="border p-2 mr-2"/>
//         <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload Image</button>
//     </form>

//     {/* <!-- Gallery grid --> */}
//     <div id="image-gallery" class="grid grid-cols-3 gap-4">
//         {/* <!-- Images will be dynamically added here --> */}
//     </div>
// </div>



// <script>
//     {/* // JavaScript for handling image upload and display */}
//     document.getElementById('image-upload-form').addEventListener('submit', function(event) {
//         event.preventDefault();
//         const fileInput = document.getElementById('image-upload');
//         const files = fileInput.files;
        
//         if (files.length === 0) {
//             alert('Please select an image file to upload.');
//             return;
//         }

//         const file = files[0];
//         const reader = new FileReader();

//         reader.onload = function(e) {
//             const {imageUrl} = e.target.result;
//             addImageToGallery(imageUrl);
//             fileInput.value = ''; // Clear the file input
//         };

//         reader.readAsDataURL(file);
//     });

//     function addImageToGallery(imageUrl) {
//         const gallery = document.getElementById('image-gallery');
//         const imageContainer = document.createElement('div');
//         imageContainer.className = 'relative group';

//         const image = document.createElement('img');
//         image.className = 'w-full h-full object-cover rounded-lg';
//         image.src = imageUrl;

//         imageContainer.appendChild(image);
//         gallery.prepend(imageContainer);
//     }
// </script>

    
//     </>
//   )
// }

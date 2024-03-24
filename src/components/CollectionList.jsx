// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Collection = () => {
//   const [collections, setCollections] = useState([]);

//   useEffect(() => {
//     // Fetch collections data from API
//     fetch('https://api.unsplash.com/collections?client_id=zF8Ku92rcNtoldkP2sKie1-Vs8h9B6OK9LIqTKoDrdM')
//       .then(response => response.json())
//       .then(data => setCollections(data))
//       .catch(error => console.error('Error fetching collections:', error));
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-semibold mb-6">Collections</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {collections.map(collection => (
//           <Link to={`/collections/${collection.id}`} key={collection.id} className="group">
//             <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-1">
//               <img src={collection.cover_photo.urls.regular} alt={collection.title} className="w-full h-56 object-cover" />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
//                 <h2 className="text-white text-lg font-semibold">{collection.title}</h2>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Collection;

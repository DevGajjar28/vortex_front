import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;

function Search() {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = useCallback(async () => {
    try {
      if (searchInput.current.value) {
        setErrorMsg("");
        setLoading(true);
        const { data } = await axios.get(
          `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
        );
        setImages(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Error fetching images. Try again later");
      console.log(error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const resetSearch = () => {
    setPage(1);
    fetchImages();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    resetSearch();
  };

  const handleSelection = (Selection) => {
    searchInput.current.value = Selection;
    resetSearch();
  };

  const openImageFullScreen = (image) => {
    setSelectedImage(image);
  };

  const closeImageFullScreen = () => {
    setSelectedImage(null);
  };

  const downloadImage = async (imageUrl) => {
    try {
      const response = await axios.get(imageUrl, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "image.jpg");
      document.body.appendChild(link);
      link.click();
      // Clean up the URL object after the download is complete
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log("Error downloading image", error);
    }
  };
  

  return (
    <>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-4'>Image Search</h1>
        {errorMsg && <p className='text-red-500 mb-4'>{errorMsg}</p>}
        <div className='flex mb-4'>
          <form onSubmit={handleSearch} className='flex flex-col w-full'>
            <input
              type='search'
              placeholder='Type something to search...'
              className='border border-gray-300 rounded-md py-2 px-4 w-full'
              ref={searchInput}
            />
          </form>
        </div>

        <div className='flex flex-wrap space-x-2 mb-4'>
          <button type="button" className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100" onClick={() => handleSelection('nature')}>Nature</button>
          <button type="button" className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100" onClick={() => handleSelection('birds')}>Birds</button>
          <button type="button" className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100" onClick={() => handleSelection('cats')}>Cats</button>
          <button type="button" className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100" onClick={() => handleSelection('mountain')}>Mountain</button>
          <button type="button" className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100" onClick={() => handleSelection('forest')}>Forest</button>
          <button type="button" className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100" onClick={() => handleSelection('snow')}>Snow</button>
        </div>

        {loading ? (
          <p className='text-gray-700'>Loading...</p>
        ) : (
          <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.urls.small}
                  alt={image.alt_description}
                  className='object-cover w-full h-64 rounded-md cursor-pointer'
                  onClick={() => openImageFullScreen(image)}
                />
              ))}
            </div>
            <div className='flex justify-between mt-4'>
              {page > 1 && (
                <button onClick={() => setPage(page - 1)} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Previous</button>
              )}
              {page < totalPages && (
                <button onClick={() => setPage(page + 1)} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Next</button>
              )}
            </div>
          </>
        )}
      </div>

      {/* Modal for displaying image in full-screen */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-4xl w-full p-4 bg-white rounded-md overflow-hidden relative">
            <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900" onClick={closeImageFullScreen}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={selectedImage.urls.full} alt={selectedImage.alt_description} className="w-full" />
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-14 rounded hover:bg-blue-600 absolute top-14 right-14" onClick={() => downloadImage(selectedImage.urls.full)}>Download</button>

        </div>
      )}
    </>
  );
}

export default Search;

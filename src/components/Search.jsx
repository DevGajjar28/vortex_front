import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;
const MAX_DOWNLOADS = 5;

function Search() {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [downloads, setDownloads] = useState(0);

  const fetchImages = useCallback(async () => {
    try {
      // if (searchInput.current.value) {
        setErrorMsg("");
        setLoading(true);
        const { data } = await axios.get(
          `${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
        );
        setImages(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      // }
    } catch (error) {
      setErrorMsg("Error fetching images. Try again later");
      console.log(error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setErrorMsg("");
        setLoading(true);
        const { data } = await axios.get(
          `${API_URL}?query=nature&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
        );
        setImages(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        setErrorMsg("Error fetching images. Try again later");
        console.log(error);
        setLoading(false);
      }
    };
  
    fetchImages();
  }, []);
  

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
      if (downloads < MAX_DOWNLOADS) {
        // Check if the user has reached the download limit
        const response = await axios.get(imageUrl, { responseType: "blob" });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.jpg");
        document.body.appendChild(link);
        link.click();
        // Clean up the URL object after the download is complete
        window.URL.revokeObjectURL(url);
        setDownloads(downloads + 1); // Increment download count
      } else {
        // Display message or take action when the user exceeds the download limit
        console.log("You have reached the maximum download limit.");
      }
    } catch (error) {
      console.log("Error downloading image", error);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-20" >
        <h1 className="text-3xl font-bold mb-4 flex justify-center">Image Search</h1>
        {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
        <div className="flex mb-4 flex justify-center">
          <form onSubmit={handleSearch} className="flex flex-col w-full max-w-md ">
            <input
              type="search"
              placeholder="Type something to search..."
              className="border border-gray-300 rounded-md py-2 px-4 w-full "
              ref={searchInput}
            />
          </form>
        </div>

        <div className="flex flex-wrap space-x-2 mb-4 flex justify-center">
          <button
            type="button"
            className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100"
            onClick={() => handleSelection("nature")}
          >
            Nature
          </button>
          <button
            type="button"
            className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100"
            onClick={() => handleSelection("birds")}
          >
            Birds
          </button>
          <button
            type="button"
            className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100"
            onClick={() => handleSelection("cats")}
          >
            Cats
          </button>
          <button
            type="button"
            className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100"
            onClick={() => handleSelection("mountain")}
          >
            Mountain
          </button>
          <button
            type="button"
            className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100"
            onClick={() => handleSelection("forest")}
          >
            Forest
          </button>
          <button
            type="button"
            className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100"
            onClick={() => handleSelection("snow")}
          >
            Snow
          </button>
        </div>

        {loading ? (
          <p className="text-gray-700">Loading...</p>
        ) : (
          <>
      <Masonry
  breakpointCols={{ default: 3, 700: 2, 500: 1 }}
  className="masonry-grid"
  columnClassName="masonry-grid_column"
>
  {images.map((image) => (
    <div key={image.id} className="masonry-grid-item relative group">
      <img
        src={image.urls.full}
        alt={image.alt_description}
        className="object-cover w-full h-auto rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:brightness-75 hover:shadow-lg hover:rounded-lg hover:transition"
        onClick={() => openImageFullScreen(image)}
      />
      <div className="absolute bottom-0 right-0 mb-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className={`bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 ${
            downloads >= MAX_DOWNLOADS && "cursor-not-allowed"
          }`}
          onClick={() => downloadImage(image.urls.full)}
          disabled={downloads >= MAX_DOWNLOADS}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm0 0v9m0 0H9m6 0h-3m3 0h3m-3 0h-3m3 0h3m-3 0h-3m3 0h3m-6 0h-3m0 0V9m0 0H9m3 0h3"
            />
          </svg>
        </button>
      </div>
    </div>
  ))}
</Masonry>


            <div className="flex justify-between mt-4">
              {page > 1 && (
                <button
                  onClick={() => setPage(page - 1)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Previous
                </button>
              )}
              {page < totalPages && (
                <button
                  onClick={() => setPage(page + 1)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {/* Modal for displaying image in full-screen */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50 overflow-y-auto">
          <div className="max-w-screen max-h-screen w-full p-4 bg-white relative">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              onClick={closeImageFullScreen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            
            <img
              src={selectedImage.urls.full}
              alt={selectedImage.alt_description}
              className="w-full h-auto"
            />
          </div>


          <button
            disabled={downloads >= MAX_DOWNLOADS}
            className={`mt-4 ${
              downloads >= MAX_DOWNLOADS
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white py-2 px-14 rounded hover:bg-blue-600"
            } absolute top-14 right-14`}
            onClick={() => downloadImage(selectedImage.urls.full)}
          >
            Download
          </button>
        </div>
      )}
    </>
  );
}

export default Search;

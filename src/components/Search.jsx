import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { useQuery } from "@tanstack/react-query";

const MAX_DOWNLOADS = 5;

function Search() {
  const searchInput = useRef(null);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [downloads, setDownloads] = useState(0);

  const resetSearch = () => {
    setPage(1);
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

  const getCategory = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/category/`);
      if (res.data) {
        setCategory(res?.data?.map((data) => data.category_name));
      }
    } catch (error) {
      console.log(
        error?.response?.data?.data?.message || "Something went wrong"
      );
    }
  };

  const getImages = async () => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/fileupload/?page=${page}`
      );
      if (res.data.results) {
        // console.log(res.data.get('results'))
        setTotalPages(parseInt(res.data.count / 10) + 1);
        return res.data.results;
      }
      return [];
    } catch (error) {
      console.log(
        error?.response?.data?.data?.message || "Something went wrong"
      );
      return [];
    }
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["fetch-images", page],
    queryFn: getImages,
  });

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 mt-20">
        <h1 className="text-3xl font-bold mb-4 flex justify-center">
          Image Search
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex mb-4 flex justify-center">
          <form
            onSubmit={handleSearch}
            className="flex flex-col w-full max-w-md "
          >
            <input
              type="search"
              placeholder="Type something to search..."
              className="border border-gray-300 rounded-md py-2 px-4 w-full "
              ref={searchInput}
            />
          </form>
        </div>

        <div className="flex flex-wrap space-x-2 mb-4 flex justify-center">
          {category.map((category, index) => (
            <button
              type="button"
              key={index}
              className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100"
              onClick={() => handleSelection(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {isLoading ? (
          <p className="text-gray-700">Loading...</p>
        ) : (
          <>
            <Masonry
              breakpointCols={{ default: 3, 700: 2, 500: 1 }}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {data.map((image) => (
                <div
                  key={image.id}
                  className="masonry-grid-item relative group"
                >
                  <img
                    src={image.image}
                    alt={image.alt_description}
                    className="object-cover w-full h-auto rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:brightness-75 hover:shadow-lg hover:rounded-lg hover:transition"
                    onClick={() => openImageFullScreen(image)}
                  />
                  <div className="absolute bottom-0 right-0 mb-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className={`bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600 ${
                        downloads >= MAX_DOWNLOADS && "cursor-not-allowed"
                      }`}
                      onClick={() => downloadImage(image.image)}
                      disabled={downloads >= MAX_DOWNLOADS}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-download"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 11l5 5l5 -5" />
                        <path d="M12 4l0 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </Masonry>

            <div className="flex justify-between mt-4">
              {page > 2 && (
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
              src={selectedImage.image}
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
            onClick={() => downloadImage(selectedImage.image)}
          >
            Download
          </button>
        </div>
      )}
    </>
  );
}

export default Search;

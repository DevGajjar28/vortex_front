import axios from "axios";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { useQuery } from "@tanstack/react-query";

function Search() {
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [handleCat, setHandleCat] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageFullScreen = (image) => {
    setSelectedImage(image);
  };

  const closeImageFullScreen = () => {
    setSelectedImage(null);
  };

  const downloadImage = async (id) => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/download-image/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res);
      console.log(res?.data?.image.split("/"));
      if (res.data) {
        // Check if the user has reached the download limit
        const response = await axios.get(
          `http://127.0.0.1:8000${res?.data?.image}`,
          { responseType: "blob" }
        );
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", res?.data?.image.split("/").pop());
        document.body.appendChild(link);
        link.click();
        // Clean up the URL object after the download is complete
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.log("Error downloading image", error);
      if (!localStorage.getItem("token")) {
        window.location.href = "/login";
      } else {
        if (error.response.status === 401) {
          window.location.href = "/login";
        } else {
          alert(error.response.data.message || "Error downloading image");
        }
      }
    }
  };

  const getCategory = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/category/`);
      if (res.data) {
        setCategory(res?.data?.results?.map((data) => data.category_name));
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
        `http://127.0.0.1:8000/api/fileupload/?page=${page}&search=${handleCat}`
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
    queryKey: ["fetch-images", page, handleCat],
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
        {isError && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex mb-4 flex justify-center">
          <input
            type="search"
            placeholder="Type something to search..."
            className="border border-gray-300 rounded-md py-2 px-4 w-full "
            onBlur={(event) => setHandleCat(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setHandleCat(event.target.value);
              }
            }}
          />
        </div>

        <div className="flex flex-wrap space-x-2 mb-4 flex justify-center">
          {category.map((category, index) => (
            <button
              type="button"
              key={index}
              className="px-4 py-2 border rounded-md transition duration-300 ease-in-out hover:bg-gray-100"
              onClick={() => setHandleCat(category)}
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
                      className={`bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600`}
                      onClick={() => downloadImage(image.id)}
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
            className={`mt-4 "bg-blue-500 text-white py-2 px-14 rounded hover:bg-blue-600"
             absolute top-14 right-14`}
            onClick={() => downloadImage(selectedImage.id)}
          >
            Download
          </button>
        </div>
      )}
    </>
  );
}

export default Search;

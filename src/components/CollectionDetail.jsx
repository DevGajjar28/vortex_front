import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Masonry from 'react-masonry-css';

const CollectionDetail = () => {
  const { collectionId } = useParams();
  const [collection, setCollection] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const collectionResponse = await fetch(`https://api.unsplash.com/collections/${collectionId}?client_id=zF8Ku92rcNtoldkP2sKie1-Vs8h9B6OK9LIqTKoDrdM`);
        const collectionData = await collectionResponse.json();
        setCollection(collectionData);

        const photosResponse = await fetch(`https://api.unsplash.com/collections/${collectionId}/photos?client_id=zF8Ku92rcNtoldkP2sKie1-Vs8h9B6OK9LIqTKoDrdM`);
        const photosData = await photosResponse.json();
        setPhotos(photosData);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching collection details:', error);
      }
    };

    fetchCollectionData();
  }, [collectionId]);

  const openImageFullScreen = (image) => {
    setSelectedImage(image);
  };

  const closeImageFullScreen = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">{collection.title}</h1>
      <Masonry
        breakpointCols={{ default: 3, 700: 2, 500: 1 }}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {photos.map(photo => (
          <div key={photo.id} className="masonry-grid-item relative group">
            <img
              src={photo.urls.regular}
              alt={photo.alt_description}
              className="object-cover w-full h-auto rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:brightness-75 hover:shadow-lg hover:rounded-lg hover:transition"
              onClick={() => openImageFullScreen(photo)}
            />
          </div>
        ))}
      </Masonry>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-4xl w-full p-4 bg-white rounded-md overflow-hidden relative">
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
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionDetail;

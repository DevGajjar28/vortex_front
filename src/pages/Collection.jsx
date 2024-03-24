import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Collection = () => {
  const [collections, setCollections] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.unsplash.com/collections?page=${page}&per_page=12&client_id=zF8Ku92rcNtoldkP2sKie1-Vs8h9B6OK9LIqTKoDrdM`);
        const data = await response.json();
        setCollections(prevCollections => [...prevCollections, ...data]);
        setPage(prevPage => prevPage + 1);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching collections:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        setPage(prevPage => prevPage + 1);
      }
    };

    observer.current = new IntersectionObserver(handleObserver, options);
    if (collections.length > 0) {
      observer.current.observe(document.querySelector('.sentinel'));
    }

    return () => observer.current.disconnect();
  }, [collections, loading]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"> {/* Added gap-4 for column gap */}
        {collections.map(collection => (
          <Link to={`/Collection/${collection.id}`} key={collection.id} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition duration-300 transform group-hover:-translate-y-1">
              <img src={collection.cover_photo.urls.regular} alt={collection.title} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                <h2 className="text-white text-lg font-semibold">{collection.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="sentinel" style={{ height: '20px' }}></div> {/* Added space between rows */}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Collection;

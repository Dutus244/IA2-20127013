import React, { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = () => {
    setPage(1);
    fetchImages(1);
  };

  const fetchImages = (pageNumber) => {
    setLoading(true);
    const key = "ElY1Az2y6m9kGRUmpnEUjdXlytSrYFgAO82Lqme0qq4";
    const url = `https://api.unsplash.com/search/photos?client_id=${key}&query=${search}&per_page=10&page=${pageNumber}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (pageNumber === 1) {
          setImages(data.results);
        } else {
          setImages([...images, ...data.results]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight - 100) {
        if (!loading) {
          setPage(page + 1);
          fetchImages(page + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, page]);

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for images"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="image-container">
        {loading && images.length === 0 ? (
          <p>Loading...</p>
        ) : (
          images.map((image) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;

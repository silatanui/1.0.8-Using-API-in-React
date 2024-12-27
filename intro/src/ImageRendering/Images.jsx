import React, { useState } from "react";
import './Images.css'
const UnsplashSearch = () => {
  const [query, setQuery] = useState(""); // State for the search query
  const [photos, setPhotos] = useState([]); // State to store fetched images
  const [loading, setLoading] = useState(false); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  // Base API URL
  const API_URL = "https://api.unsplash.com/search/photos";
  const ACCESS_KEY = "rJmEnXsVQfwkxiQKw4nfjtQQqZGbg1twhgkcazTTfj4"; // Replace with your Unsplash Access Key

  // Fetch images based on the search query
  const searchImages = async (e) => {
    e.preventDefault(); // Prevent form submission reload
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_URL}?query=${query}&per_page=9&client_id=${ACCESS_KEY}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Parse the JSON response
      setPhotos(data.results); // Store the images in state
    } catch (err) {
      setError(err.message); // Store the error
    } finally {
      setLoading(false); // Stop the loading indicator
    }
  };

  return (
    <section className="container mt-4">
      {/* Search Section */}
      <div className="row text-center">
        <div className="col-12">
          <p>No one knows, works, or dreams quite for its own sake.</p>
          <form className="input-group w-50 mx-auto" onSubmit={searchImages}>
            <input
              type="text"
              className="form-control"
              placeholder="Search for images (e.g., nature, cars)"
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Update query on input
            />
            <button type="submit" className="btn btn-success">
              Go
            </button>
          </form>
        </div>
      </div>

      {/* Display Section */}
      <div className="row mt-4 images">
        {loading && <div className="text-center">Loading...</div>}
        {error && <div className="text-center text-danger">Error: {error}</div>}
        {!loading &&
          !error &&
          photos.map((photo) => (
            <div className="col-md-4 mb-4" key={photo.id}>
              <div className="card">
                <img
                  src={photo.urls.regular}
                  alt={photo.alt_description}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{photo.user.name}</h6>
                  <p className="card-text">
                    {photo.alt_description || "No description available"}
                  </p>
                  <a
                    href={photo.links.html}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View on Unsplash
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default UnsplashSearch;

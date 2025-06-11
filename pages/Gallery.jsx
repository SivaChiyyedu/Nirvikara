export default function Gallery() {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <p>
        Explore our collection of images showcasing our products and services.
        We take pride in the quality and variety we offer to our customers.
      </p>
      <div className="gallery-grid">
        {/* Example images, replace with actual image paths */}
        <img src="/path/to/image1.jpg" alt="Gallery Image 1" />
        <img src="/path/to/image2.jpg" alt="Gallery Image 2" />
        <img src="/path/to/image3.jpg" alt="Gallery Image 3" />
      </div>
    </div>
  );
}

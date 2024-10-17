import React, { useState } from 'react';

const ListingGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <img src={mainImage} alt="Main listing" className="w-full h-80 object-cover rounded-lg mb-4" />
      <div className="flex space-x-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-24 h-24 object-cover rounded cursor-pointer ${
              mainImage === img ? 'border-2 border-blue-400' : ''
            }`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingGallery;

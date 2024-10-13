import React, { useState } from 'react';

const ListingGallery: React.FC = () => {
  const [mainImage, setMainImage] = useState('https://picsum.photos/800/600');
  const thumbnails = [
    'https://picsum.photos/200/150?random=1',
    'https://picsum.photos/200/150?random=2',
    'https://picsum.photos/200/150?random=3',
    'https://picsum.photos/200/150?random=4',
  ];

  const handleThumbnailClick = (src: string) => {
    setMainImage(src.replace('200/150', '800/600'));
  };

  return (
    <div className="md:w-2/3">
      {/* Main Image */}
      <div className="relative h-96">
        <img src={mainImage} alt="Listing Main" className="w-full h-full object-cover" />
      </div>

      {/* Thumbnails */}
      <div className="flex mt-4 space-x-2 overflow-x-auto">
        {thumbnails.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            className="w-24 h-20 object-cover rounded cursor-pointer"
            onClick={() => handleThumbnailClick(thumb)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleThumbnailClick(thumb)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingGallery;

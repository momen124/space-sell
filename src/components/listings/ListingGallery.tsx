import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

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

  const prevImage = () => {
    setMainImage(thumbnails[(thumbnails.indexOf(mainImage.replace('800/600', '200/150')) - 1 + thumbnails.length) % thumbnails.length].replace('200/150', '800/600'));
  };

  const nextImage = () => {
    setMainImage(thumbnails[(thumbnails.indexOf(mainImage.replace('800/600', '200/150')) + 1) % thumbnails.length].replace('200/150', '800/600'));
  };

  return (
    <div className="md:w-2/3">
      {/* Main Image */}
      <div className="relative h-96">
        <img src={mainImage} alt="Listing Main" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Button variant="gray" onClick={prevImage} className="p-2 rounded-full bg-opacity-50 hover:bg-opacity-75">
            <i className="fas fa-chevron-left"></i>
          </Button>
          <Button variant="gray" onClick={nextImage} className="p-2 rounded-full bg-opacity-50 hover:bg-opacity-75">
            <i className="fas fa-chevron-right"></i>
          </Button>
        </div>
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
          />
        ))}
      </div>
    </div>
  );
};

export default ListingGallery;

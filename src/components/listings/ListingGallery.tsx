import Image from 'next/image';
import React, { useState } from 'react';

const ListingGallery: React.FC<{ images: UploadedAttachment[] }> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images?.[0]);

  return (
    <div className='flex flex-col gap-4'>
    <div className='relative overflow-hidden min-h-80'>
      <Image src={mainImage?.url} alt="Main listing" fill className="w-full min-h-80 object-contain rounded-lg mb-4" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images?.map((img) => (

      <div className="relative w-full overflow-hidden min-h-48" key={img.key}>
      <Image
        src={img.url}
        alt={img.key}
        className={`w-24 h-24 object-cover rounded cursor-pointer ${
          mainImage === img ? 'border-2 border-blue-400' : ''
        }`}
        fill
        objectFit="cover"
            onClick={() => setMainImage(img)}
      />
    </div>
        ))}
      </div>
    </div>
  );
};

export default ListingGallery;

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ImageViewerProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt, caption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openViewer = () => setIsOpen(true);
  const closeViewer = () => setIsOpen(false);

  return (
    <>
      <div 
        className="w-full flex flex-col items-center justify-center my-8 overflow-hidden rounded-xl border border-neutral-200 shadow-sm cursor-pointer"
        onClick={openViewer}
      >
        <div className="w-full relative aspect-[16/9]">
          <Image 
            src={src}
            alt={alt}
            fill
            className="object-contain hover:opacity-90 transition-opacity"
            priority
          />
        </div>
        {caption && (
          <div className="w-full p-4 bg-neutral-50 text-sm text-center text-neutral-600 border-t border-neutral-200">
            {caption}
          </div>
        )}
      </div>

      {/* 확대 뷰어 모달 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeViewer}>
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeViewer();
              }}
            >
              <X size={24} />
            </button>
            <div className="relative w-full h-full max-h-[90vh]">
              <Image 
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="object-contain max-h-[90vh]"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageViewer; 
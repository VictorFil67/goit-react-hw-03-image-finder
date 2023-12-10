// import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <ImageGallery />
    </div>
  );
};

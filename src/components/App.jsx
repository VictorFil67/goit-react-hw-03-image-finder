// import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import s from './App.module.css';

export const App = () => {
  return (
    <div
      // className={s.App}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <ImageGallery />
    </div>
  );
};

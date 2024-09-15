// src/components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center bg-white bg-opacity-25 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loader;

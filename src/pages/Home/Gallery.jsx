import React from "react";

const Gallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-10">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1633734973050-d6499a977c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

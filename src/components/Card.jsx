import React from 'react';

const Card = ({ blog }) => {

  const blogImage = `https://source.unsplash.com/random/?${blog.category}&${blog.id}`

  return (
    <div className="w-full mb-8 md:flex lg:flex-col lg:m-0 lg:justify-between">
      <div
        className="w-full md:w-2/3 lg:w-full h-48 bg-cover bg-center p-4 hover:scale-105 transition-all duration-300"
        style={{ backgroundImage: `url(${blogImage})` }}
        alt="Blog Cover"
      >
        <div className='w-full h-full border border-white'></div>
      </div>

      <div className="p-4 md:py-0 md:w-1/2 lg:w-full lg:h-60 md:flex md:flex-col md:justify-between">
        <div>
          <p className="text-xs my-2 text-orange-500">{blog.category}</p>
          <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
          <p className="text-md text-gray-600">{blog.content}</p>
        </div>

        <div>
          <div className='flex justify-between my-2'>
            <p className="text-sm text-gray-600">Author - {blog.author}</p>
            <p className="text-sm text-gray-600">Views: {blog.views}</p>
          </div>
          <button className="w-full px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded hover:bg-orange-600 mt-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
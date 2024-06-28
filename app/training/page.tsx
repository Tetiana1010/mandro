import React from 'react';

const Training: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center my-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-4">
            Dictionary
          </h1>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
              My words
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Training;
import React from 'react';

function ProjectCard({ portfolioItem }) {
    const imageUrl = portfolioItem.image?.data?.attributes?.url ? `http://localhost:1337${portfolioItem.image.data.attributes.url}` : 'https://via.placeholder.com/150';
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={portfolioItem.title} />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{portfolioItem.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{portfolioItem.description}</p>
                <div className="mt-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{portfolioItem.language}</span>
                </div>
                <p className="text-sm text-gray-500">By {portfolioItem.author}</p>
                <button className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { getPortfolioItems } from '../services/api';
import FilterDropdown from "../components/FilterDropdown";

function Portfolio() {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPortfolioData = async () => {
            try {
                const data = await getPortfolioItems();
                setPortfolioItems(data);
                setLoading(false);
            } catch (err) {
                setError(err.message || 'Failed to load portfolio items.');
                setLoading(false);
            }
        };

        fetchPortfolioData();
    }, []);

    const filteredPortfolioItems = portfolioItems.filter(item =>
        item.attributes.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    if (loading) {
        return <p>Loading portfolio items...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <FilterDropdown />
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPortfolioItems.map((item) => (
                    <ProjectCard key={item.id} portfolioItem={item.attributes} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
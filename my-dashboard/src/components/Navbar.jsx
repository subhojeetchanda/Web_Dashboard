import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BellIcon, ArrowDownIcon } from '@heroicons/react/24/outline'; // You might need to install heroicons
import Logo from '../assets/logo.svg' //Replace with your logo
function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="flex items-center justify-between p-4">
                {/* Left Section (Tabs) */}
                <div className="flex items-center space-x-4">
                    <NavLink to="/portfolio" className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>
                        Project
                    </NavLink>
                    <NavLink to="/saved" className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>
                        Saved
                    </NavLink>
                    <NavLink to="/shared" className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>
                        Shared
                    </NavLink>
                    <NavLink to="/achievement" className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>
                        Achievement
                    </NavLink>
                </div>

                {/* Right Section (Search, Notifications, Profile) */}
                <div className="flex items-center space-x-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search a project..."
                            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                            {/* Search Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </button>
                    </div>
                    {/* Notification Icon */}
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <BellIcon className="h-6 w-6 text-gray-600" />
                    </button>

                    {/* Profile Section */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">Lorem Ips</span>
                        <span className="text-xs text-gray-500">Manager</span>
                        <button className="p-1 rounded-full hover:bg-gray-100">
                            <ArrowDownIcon className="h-4 w-4 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
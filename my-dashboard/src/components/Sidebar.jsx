import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    HomeIcon,
    FolderIcon,
    DocumentIcon,
    UserIcon,
    Bars3Icon,
} from '@heroicons/react/24/outline'; // You might need to install heroicons
import Logo from '../assets/logo.svg' //Replace with your logo.

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={`flex flex-col bg-orange-600 text-white w-64 min-h-screen transition-width duration-300 ease-in-out ${
                isCollapsed ? 'w-16' : 'w-64'
            } `}
        >
            <div className="p-4 flex items-center justify-between">
                {!isCollapsed && <img src={Logo} alt="Logo" className="h-8" />}
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    <Bars3Icon className="h-6 w-6" />
                </button>
            </div>
            <nav className="flex-1 p-4">
                <ul>
                    <li className="mb-2">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-2 rounded-md hover:bg-orange-700 ${
                                    isActive ? 'bg-orange-800' : ''
                                }`
                            }
                        >
                            <HomeIcon className="h-5 w-5" />
                            {!isCollapsed && <span>Dashboard</span>}
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-2 rounded-md hover:bg-orange-700 ${
                                    isActive ? 'bg-orange-800' : ''
                                }`
                            }
                        >
                            <FolderIcon className="h-5 w-5" />
                            {!isCollapsed && <span>Portfolio</span>}
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="/inputs"
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-2 rounded-md hover:bg-orange-700 ${
                                    isActive ? 'bg-orange-800' : ''
                                }`
                            }
                        >
                            <DocumentIcon className="h-5 w-5" />
                            {!isCollapsed && <span>Inputs</span>}
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-2 rounded-md hover:bg-orange-700 ${
                                    isActive ? 'bg-orange-800' : ''
                                }`
                            }
                        >
                            <UserIcon className="h-5 w-5" />
                            {!isCollapsed && <span>Profile</span>}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
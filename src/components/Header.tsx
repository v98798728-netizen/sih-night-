import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Database, Map, Fish, Dna, BookOpen, Bot } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  // 1. Removed the "Home" item from this array.
  const navItems = [
    { path: '/datasets', label: 'Datasets', icon: Database },
    { path: '/visualization', label: 'Visualization', icon: Map },
    { path: '/otolith', label: 'Otolith Analysis', icon: Fish },
    { path: '/taxonomy', label: 'Taxonomy', icon: Search },
    { path: '/edna', label: 'eDNA', icon: Dna },
    { path: '/api', label: 'API Docs', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 glass backdrop-blur-md shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 2. This Link wrapper makes the name and icon clickable, taking the user to the homepage. */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-ocean-600 to-coral-600 rounded-lg flex items-center justify-center glow-soft">
              <Fish className="w-5 h-5 text-white" />
            </div>
            {/* 3. Changed the website name to "Shark" */}
            <span className="text-xl font-semibold text-gray-800">Shark</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 text-sm font-medium transition-all duration-200 hover:text-[#30345E] ${
                  location.pathname === path
                    ? 'text-coral-700 border-b-2 border-coral-500 pb-1 glow-coral'
                    : 'text-gray-600 hover:border-b-2 hover:border-coral-500 hover:pb-1 hover:glow-coral'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          <Link to="/ai" className="glass-ocean text-white px-6 py-2 rounded-md font-medium hover:scale-105 glow-hover transition-all duration-200 flex items-center space-x-2">
            <Bot className="w-4 h-4" />
            <span>AI Assistant</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

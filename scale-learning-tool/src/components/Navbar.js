import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Update current path when component mounts and on navigation
    const updatePath = () => setCurrentPath(window.location.pathname);
    updatePath();
    window.addEventListener('popstate', updatePath);
    return () => window.removeEventListener('popstate', updatePath);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Guitar Sandbox', path: '/sandbox' },
    { name: 'Quizzes', path: '/quizzes' },
    { name: 'Theory Lessons', path: '/lessons' }
  ];

  const handleNavigation = (path, e) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleNavigation(item.path, e)}
              className={`px-4 py-3 text-sm font-medium transition-colors duration-200 
                ${currentPath === item.path 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
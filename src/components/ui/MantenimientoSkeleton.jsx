import React from 'react';
import { Code } from 'lucide-react';
import './MantenimientoSkeleton.css';


function MantenimientoSkeleton(){
  const pageName = () => {
    return window.location.pathname.split('/').pop();
  }
  return (
    <div className="skeleton-container">
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center">
        {/* Simple icon */}
        <div className="mb-8">
          <Code className="w-16 h-16 text-teal-400 mx-auto mb-6 opacity-60" />
        </div>

        {/* Main message */}
        <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
          <span className="text-teal-400"></span> en desarrollo
        </h1>

        <p className="text-lg text-gray-400 mb-12">
          Próximamente disponible
        </p>

        {/* Skeleton cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-6 animate-pulse">
              <div className="w-8 h-8 bg-gray-700 rounded-lg mb-4 mx-auto"></div>
              <div className="h-4 bg-gray-700 rounded mb-3"></div>
              <div className="h-3 bg-gray-700 rounded w-3/4 mx-auto"></div>
            </div>
          ))}
        </div>

        {/* Simple progress indicator */}
        <div className="flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-teal-400 rounded-full opacity-40 animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MantenimientoSkeleton;
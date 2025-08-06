import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function GlowingLoginButton({onClick}) {
  const [isLoading, setIsLoading] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: '50%', y: '50%' });
   const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({ x: `${x}%`, y: `${y}%` });
  };

  const handleMouseLeave = () => {
    setGlowPosition({ x: '50%', y: '50%' });
  };

  const handleLogin = () => {
    if (isLoading) return;
    
    setIsLoading(true);
  
    setTimeout(() => {
      setIsLoading(false);
      if (onClick) onClick();
    }, 1000);
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleLogin}
      disabled={isLoading}
      className="
        relative px-16 py-2 cursor-pointer text-lg font-semibold text-white rounded-full 
        overflow-hidden transition-all duration-300 ease-out
        hover:-translate-y-1 active:translate-y-0 active:shadow-lg 
        focus:outline-none focus:ring-4 focus:ring-blue-500/50 
        disabled:cursor-not-allowed disabled:opacity-75 group
        bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-blue-500
        hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/25
      "
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 350px at ${glowPosition.x} ${glowPosition.y}, 
            rgba(59, 130, 246, 0.8) 0%, 
            rgba(29, 78, 216, 0.6) 25%, 
            rgba(99, 102, 241, 0.4) 50%,
            transparent 70%)`
        }}
      />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <span>Login</span>
        )}
      </span>
    </button>
  );
}
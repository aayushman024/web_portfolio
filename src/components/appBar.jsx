import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function AppBar({ username = {email} }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between shadow-md">
      {/* Left: Hamburger */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white"
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Center: Greeting */}
      <div className="text-lg font-semibold hidden md:block">
        Hi, {username}
      </div>

      {/* Right: Navigation Buttons */}
      <nav className="flex items-center gap-4 ml-auto">
        <button className="hover:bg-blue-500 px-3 py-1 rounded-md transition">Home</button>
        <button className="hover:bg-blue-500 px-3 py-1 rounded-md transition">Profile</button>
        <button className="hover:bg-blue-500 px-3 py-1 rounded-md transition">Logout</button>
      </nav>
    </header>
  );
}

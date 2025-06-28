import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ You can use any icon library or SVG

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search/${search.trim()}`);
      setSearch("");
      setMenuOpen(false); // close menu on mobile after search
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">OMDB</Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="space-x-6 text-lg hidden md:flex">
          <Link to="/" className="hover:text-red-500 transition">
            Home
          </Link>
          <Link to="/Toprated" className="hover:text-red-500 transition">
            Top Rated
          </Link>
          <Link to="/Upcomings" className="hover:text-red-500 transition">
            Upcoming
          </Link>
        </div>

        {/* Search Box (always visible) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center space-x-2"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search movies..."
            className="px-3 py-1 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
          >
            Search
          </button>
        </form>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Panel */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-black space-y-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-lg hover:text-red-500"
          >
            Home
          </Link>
          <Link
            to="/Toprated"
            onClick={() => setMenuOpen(false)}
            className="block text-lg hover:text-red-500"
          >
            Top Rated
          </Link>
          <Link
            to="/Upcomings"
            onClick={() => setMenuOpen(false)}
            className="block text-lg hover:text-red-500"
          >
            Upcoming
          </Link>
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search..."
              className="flex-1 px-3 py-1 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
            >
              Go
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

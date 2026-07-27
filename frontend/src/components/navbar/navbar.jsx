import React from 'react';
import { Link } from "react-router-dom";
import { getToken } from "../../utils/token";

const Navbar = () => {
    const isAuth = getToken();

    return (
        <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 transition-all">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
                {/* Logo */}
                <div className="flex items-center gap-x-2">
                    <Link to="/" className="text-2xl font-black tracking-tight text-white flex items-center gap-2 group">
                        <span className="bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 p-2.5 rounded-xl shadow-lg shadow-amber-500/20 text-base font-bold">
                            🍳
                        </span>
                        <span>Tarifler<span className="text-amber-400">.az</span></span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex items-center gap-x-1 bg-slate-800/80 p-1.5 rounded-full border border-slate-700/60 text-sm font-medium text-slate-300">
                    <li>
                        <Link to="/" className="px-5 py-2 rounded-full hover:bg-slate-700 hover:text-amber-400 transition-all">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/recipe" className="px-5 py-2 rounded-full hover:bg-slate-700 hover:text-amber-400 transition-all">
                            Recipes
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="px-5 py-2 rounded-full hover:bg-slate-700 hover:text-amber-400 transition-all">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="px-5 py-2 rounded-full hover:bg-slate-700 hover:text-amber-400 transition-all">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Right Side: Buttons */}
                <div className="flex items-center gap-x-4">
                    {isAuth && (
                        <Link
                            to="/create-recipe"
                            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold px-5 py-2.5 rounded-full shadow-md shadow-amber-500/20 hover:shadow-lg hover:from-amber-300 hover:to-yellow-400 active:scale-95 transition-all text-sm"
                        >
                            <span>+</span> Share Recipe
                        </Link>
                    )}

                    {isAuth ? (
                        <Link
                            to="/profile"
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-200 hover:border-amber-400 hover:text-amber-400 font-medium text-sm transition-all bg-slate-800/50"
                        >
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                            Profile
                        </Link>
                    ) : (
                        <Link
                            to="/auth"
                            className="bg-slate-800 text-white font-medium px-6 py-2.5 rounded-full border border-slate-700 hover:bg-slate-700 hover:border-amber-400/50 active:scale-95 transition-all text-sm"
                        >
                            Sign In / Register
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
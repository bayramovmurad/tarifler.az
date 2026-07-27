import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-slate-950 text-white flex items-center justify-center selection:bg-amber-400 selection:text-slate-950 relative overflow-hidden">

      {/* Golden glow background effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-amber-400 font-medium text-sm mb-8 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          Elite kitchen and curated recipes
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Your Kitchen's <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-200">
            Most Elite Secrets
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Discover thousands of delicious and unique recipes. Share your own kitchen secrets with the community and turn every meal into a work of art.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/recipe"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold rounded-full shadow-lg shadow-amber-500/20 hover:shadow-xl hover:from-amber-300 hover:to-yellow-400 hover:-translate-y-0.5 active:scale-95 transition-all text-base"
          >
            Explore Recipes
          </Link>
          <Link
            to="/create-recipe"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-slate-200 font-semibold rounded-full shadow-sm border border-slate-800 hover:border-amber-400/50 hover:text-amber-400 hover:bg-slate-800/50 active:scale-95 transition-all text-base flex items-center justify-center gap-2"
          >
            Share Recipe <span className="text-xl">🍳</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-900 pt-10">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-amber-400 mb-1">100%</span>
            <span className="text-sm font-medium text-slate-400">Taste Guarantee</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-amber-400 mb-1">Elite</span>
            <span className="text-sm font-medium text-slate-400">Quality</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-amber-400 mb-1">Free</span>
            <span className="text-sm font-medium text-slate-400">Platform</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-amber-400 mb-1">24/7</span>
            <span className="text-sm font-medium text-slate-400">Support</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
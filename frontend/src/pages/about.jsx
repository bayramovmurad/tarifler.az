import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 selection:bg-amber-400 selection:text-slate-950">
      <div className="max-w-4xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">
            Who Are We?
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Tariflər.az</span>!
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our goal is to make cooking an easy, fun, and discovery-filled experience for everyone.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-8 sm:p-12 transition-all hover:shadow-xl">
          <div className="space-y-8 text-slate-300 leading-relaxed text-lg">
            <p>
              <strong className="text-white font-semibold">Tariflər.az</strong> is not just a recipe website, but a large community where culinary enthusiasts come together. Whether you are a seasoned chef or just starting out in the kitchen, there is always a new flavor for you here.
            </p>

            {/* Features (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-slate-800 my-8">

              {/* Block 1 */}
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-amber-400/10 text-amber-400 rounded-2xl flex items-center justify-center text-2xl border border-amber-400/20">
                  🌍
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Diverse Cuisines</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    We bring together the most selected, delicious, and tested recipes from all around the world on a single platform.
                  </p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-amber-400/10 text-amber-400 rounded-2xl flex items-center justify-center text-2xl border border-amber-400/20">
                  🤝
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Community Support</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    You can share your own kitchen secrets, like and comment on other users' recipes.
                  </p>
                </div>
              </div>

            </div>

            <p className="text-center italic text-slate-400">
              We believe that the best memories are created around a dinner table, accompanied by delicious food. Join us and start creating new stories in your kitchen!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
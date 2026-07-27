import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 selection:bg-amber-400 selection:text-slate-950">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">
            Support & Feedback
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Touch</span> With Us
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a question or just want to say hello? Don't hesitate to write to us, we'll be happy to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">

          {/* Left Side: Contact Information */}
          <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-8 sm:p-10 h-full">
            <h3 className="text-2xl font-bold text-white mb-6">We are here 📍</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              If you have any suggestions, collaboration ideas, or technical issues regarding the platform, you can reach us through the channels below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-800">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-400/10 text-amber-400 rounded-full flex items-center justify-center text-xl border border-amber-400/20">
                  ✉️
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <a href="mailto:info@tarifler.az" className="text-slate-400 text-sm hover:text-amber-400 transition-colors">
                    info@tarifler.az
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-800">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-400/10 text-amber-400 rounded-full flex items-center justify-center text-xl border border-amber-400/20">
                  📞
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Phone</p>
                  <a href="tel:+994000000000" className="text-slate-400 text-sm hover:text-amber-400 transition-colors">
                    +994 (00) 000-00-00
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-800">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-400/10 text-amber-400 rounded-full flex items-center justify-center text-xl border border-amber-400/20">
                  🌍
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Social Media</p>
                  <div className="flex gap-3 mt-1">
                    <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm font-medium">Instagram</a>
                    <span className="text-slate-700">•</span>
                    <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm font-medium">Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message ✍️</h3>

            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-300 ml-1" htmlFor="fullName">Full Name</label>
                <input
                  className="border border-slate-700 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition-all bg-slate-800/50 text-white placeholder:text-slate-500 text-sm"
                  type="text"
                  id="fullName"
                  placeholder="e.g., John Doe"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-300 ml-1" htmlFor="email">Email Address</label>
                <input
                  className="border border-slate-700 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition-all bg-slate-800/50 text-white placeholder:text-slate-500 text-sm"
                  type="email"
                  id="email"
                  placeholder="e.g., john@example.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-300 ml-1" htmlFor="message">Your Message</label>
                <textarea
                  rows="4"
                  className="border border-slate-700 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/20 focus:border-amber-400 transition-all bg-slate-800/50 text-white placeholder:text-slate-500 text-sm resize-none"
                  id="message"
                  placeholder="What would you like to tell us?"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full mt-4 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:from-amber-300 hover:to-yellow-400 active:scale-95 transition-all text-base"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
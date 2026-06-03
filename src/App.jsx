import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [city, setCity] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!city) return;
    alert(`Searching weather for: ${city}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0b132b] to-[#1c2541] text-white font-['Inter'] pb-24 lg:pb-12">
      
      {/* --- DESKTOP NAVBAR --- */}
      <nav className="hidden lg:block bg-black/25 border-b border-white/10 py-4 backdrop-blur-md">
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          
          <a className="text-2xl font-extrabold text-cyan-400 flex items-center gap-2 no-underline" href="#">
            <span>☀️</span> SkyCast
          </a>
          
          <div className="flex items-center grow justify-center">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              <li>
                <a className="group text-white font-semibold no-underline flex items-center gap-1.5 transition-all" href="#home">
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 inline-block text-lg">🏡</span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a className="group text-white/60 no-underline hover:text-white flex items-center gap-1.5 transition-all" href="../Pages/Radar.html">
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 inline-block text-lg">📡</span>
                  <span>Live Radar</span>
                </a>
              </li>
              <li>
                <a className="group text-white/60 no-underline hover:text-white flex items-center gap-1.5 transition-all" href="../Pages/Hourly.html">
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 inline-block text-lg">⏰</span>
                  <span>Hourly Forecast</span>
                </a>
              </li>
              <li>
                <a className="group text-white/60 no-underline hover:text-white flex items-center gap-1.5 transition-all" href="../Pages/History.html">
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 inline-block text-lg">📜</span>
                  <span>Historical Data</span>
                </a>
              </li>
              <li>
                <a className="group text-white/60 no-underline hover:text-white flex items-center gap-1.5 transition-all" href="../Pages/News.html">
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 inline-block text-lg">📰</span>
                  <span>Weather News</span>
                </a>
              </li>
              <li>
                <a className="group text-white/60 no-underline hover:text-white flex items-center gap-1.5 transition-all" href="../Pages/Contact.html">
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 inline-block text-lg">📞</span>
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Settings & Language Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all cursor-pointer setup-btn"
            >
              ⚙️ Settings <span className="text-xs inline-block">▼</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-[#1c2541] border border-white/10 rounded-2xl shadow-2xl p-2 z-50 animate-fadeIn">
                <div className="text-[11px] text-white/40 uppercase font-bold px-3 py-1 tracking-wider">Theme</div>
                <button onClick={() => alert('Light Mode Coming Soon!')} className="w-full text-left px-3 py-2 text-sm rounded-xl hover:bg-white/5 transition-colors flex items-center gap-2 text-white">
                  ☀️ Light Mode
                </button>
                <button onClick={() => alert('Already in Dark Mode!')} className="w-full text-left px-3 py-2 text-sm rounded-xl hover:bg-white/5 transition-colors flex items-center gap-2 text-cyan-400 font-medium">
                  🌙 Dark Mode (Active)
                </button>
                <div className="border-t border-white/5 my-1.5"></div>
                <div className="text-[11px] text-white/40 uppercase font-bold px-3 py-1 tracking-wider">Language</div>
                <button onClick={() => alert('Language Options Coming Soon!')} className="w-full text-left px-3 py-2 text-sm rounded-xl hover:bg-white/5 transition-colors flex items-center gap-2 text-white font-medium">
                  🌐 Change Language
                </button>
                <div className="border-t border-white/5 my-1.5"></div>
                <div className="text-[11px] text-white/40 uppercase font-bold px-3 py-1 tracking-wider">Info</div>
                <button onClick={() => alert('Created with ❤️ by Kumail Abbas')} className="w-full text-left px-3 py-2 text-sm rounded-xl hover:bg-white/5 transition-colors flex items-center gap-2 text-white">
                  🚀 Who Made This?
                </button>
              </div>
            )}
          </div>

        </div>
      </nav>

      {/* --- MOBILE TOP HEADER --- */}
      <div className="block lg:hidden border-b border-white/10 bg-black/25 backdrop-blur-md py-3 px-4">
        <div className="flex justify-between items-center relative">
          <h4 className="font-bold text-cyan-400 text-xl m-0">☀️ SkyCast</h4>
          <div>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white/80 text-xl bg-white/5 p-2 rounded-full flex items-center justify-center border border-white/5 cursor-pointer">
              ⚙️
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-[#1c2541] border border-white/10 rounded-2xl shadow-2xl p-2 z-50">
                <div className="text-[10px] text-white/40 uppercase font-bold px-3 py-1">Theme</div>
                <button onClick={() => alert('Light Mode Coming Soon!')} className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-white/5 text-white">☀️ Light Mode</button>
                <button onClick={() => alert('Already in Dark Mode!')} className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-white/5 text-cyan-400">🌙 Dark Mode</button>
                <div className="border-t border-white/5 my-1"></div>
                <div className="text-[10px] text-white/40 uppercase font-bold px-3 py-1">Language</div>
                <button onClick={() => alert('Language Coming Soon!')} className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-white/5 text-white">🌐 Change Language</button>
                <div className="border-t border-white/5 my-1"></div>
                <button onClick={() => alert('Created with ❤️ by Kumail Abbas')} className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-white/5 text-white">🚀 Who Made?</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-4 flex items-center justify-center min-h-[70vh]">
        <div className="text-center w-full max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-4 py-2 mb-6 shadow-md">
            <span className="text-cyan-400">📍</span>
            <small className="font-semibold tracking-wide text-white">Skardu, Gilgit-Baltistan 🏔️</small>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4 text-white leading-tight tracking-tight">
            Real-Time Weather <br />
            <span className="text-cyan-400">Right At Your Fingertips</span>
          </h1>

          <p className="text-white/60 mb-8 text-sm md:text-base px-4 max-w-lg mx-auto leading-relaxed">
            Get weather updates for any city worldwide, now faster and easier. Enter your city and get instant details.
          </p>

          <form onSubmit={handleSearch} className="shadow-2xl rounded-full overflow-hidden bg-white p-2 flex items-center max-w-md mx-auto w-full border border-white/20">
            <div className="flex items-center grow px-3">
              <span className="text-xl text-gray-400">🔍</span>
              <input 
                type="text" 
                className="w-full border-0 focus:ring-0 text-base text-gray-800 bg-transparent px-2 py-1 outline-none placeholder-gray-400" 
                placeholder="Search city... (e.g., Karachi, London)" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <button type="submit" className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold rounded-full px-5 py-2 transition-colors text-sm shadow-sm">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* --- WEATHER CARDS MODULE --- */}
      <Card />

      {/* --- MOBILE BOTTOM NAVIGATION BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 block lg:hidden bg-black/80 border-t border-white/10 backdrop-blur-lg z-50">
        <div className="flex justify-around items-center py-2">
          <a href="#home" className="text-center no-underline text-cyan-400 flex flex-col items-center">
            <span className="text-xl">🏡</span>
            <span className="text-[10px] block mt-0.5 font-medium">Home</span>
          </a>
          <a href="../Pages/Radar.html" className="text-center no-underline text-white/50 flex flex-col items-center hover:text-white transition-colors">
            <span className="text-xl">📡</span>
            <span className="text-[10px] block mt-0.5 font-medium">Radar</span>
          </a>
          <a href="../Pages/Hourly.html" className="text-center no-underline text-white/50 flex flex-col items-center hover:text-white transition-colors">
            <span className="text-xl">⏰</span>
            <span className="text-[10px] block mt-0.5 font-medium">Hourly</span>
          </a>
          <a href="../Pages/History.html" className="text-center no-underline text-white/50 flex flex-col items-center hover:text-white transition-colors">
            <span className="text-xl">📜</span>
            <span className="text-[10px] block mt-0.5 font-medium">History</span>
          </a>
          <a href="../Pages/News.html" className="text-center no-underline text-white/50 flex flex-col items-center hover:text-white transition-colors">
            <span className="text-xl">📰</span>
            <span className="text-[10px] block mt-0.5 font-medium">News</span>
          </a>
          <a href="../Pages/Contact.html" className="text-center no-underline text-white/50 flex flex-col items-center hover:text-white transition-colors">
            <span className="text-xl">📞</span>
            <span className="text-[10px] block mt-0.5 font-medium">Contact</span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default App;
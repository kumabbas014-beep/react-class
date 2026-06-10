import React, { useState } from 'react';
import Card from '../components/Card';

function Home() {
  
  const [city, setCity] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [likes, setLikes] = useState(1);

  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  
  // 💡 Name aur Email states add
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackEmail, setFeedbackEmail] = useState('');

  const handleIncrement = () => {
    setLikes(likes + 1);
  };
  const handleDecrement = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedbackText.trim() || !feedbackName.trim() || !feedbackEmail.trim()) return;
    
    // Custom formatted notification alert
    alert(`Thank you ${feedbackName}!\nFeedback received from: ${feedbackEmail}\nMessage: "${feedbackText}"`);
    
    // Clear fields and close form
    setFeedbackName('');
    setFeedbackEmail('');
    setFeedbackText('');
    setShowFeedback(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!city) return;
    alert(`Searching weather for: ${city}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0b132b] to-[#1c2541] text-white font-['Inter'] pb-24 lg:pb-12">


      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-4 flex items-center justify-center min-h-[70vh]">
        <div className="text-center w-full max-w-2xl mx-auto">
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-4 py-2 shadow-md">
              <span className="text-cyan-400">📍</span>
              <small className="font-semibold tracking-wide text-white">Skardu, Gilgit-Baltistan 🏔️</small>
            </div>

            {/* 🔥 LIVE COUNTER CONTROLLER COMPONENT */}
            <div className="inline-flex items-center bg-linear-to-r from-pink-500/10 to-red-500/10 border border-pink-500/30 rounded-full p-1 shadow-md">
              {/* Minus Button */}
              <button 
                onClick={handleDecrement}
                className="bg-red-500/20 hover:bg-red-500/40 text-red-400 font-black h-7 w-7 rounded-full text-xs transition-all active:scale-90 cursor-pointer flex items-center justify-center border-0"
              >
                —
              </button>
              
              {/* Value Displayer */}
              <div className="px-3 text-xs font-bold text-pink-400 flex items-center gap-1.5">
                <span>❤️ Home Likes:</span>
                <span className="bg-pink-500 text-white px-2 py-0.5 rounded-md text-[10px] font-black min-w-10 inline-block text-center">{likes}</span>
              </div>

              {/* Plus Button */}
              <button 
                onClick={handleIncrement}
                className="bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-400 font-black h-7 w-7 rounded-full text-xs transition-all active:scale-90 cursor-pointer flex items-center justify-center border-0"
              >
                +
              </button>
            </div>
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
            <button type="submit" className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold rounded-full px-5 py-2 transition-colors text-sm shadow-sm border-0 cursor-pointer">
              Search
            </button>
          </form>
          
        </div>
      </section>

      {/* 💡 MODAL FEEDBACK FORM WITH NAME & EMAIL FIELD */}
      {showFeedback && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4">
          <div className="bg-[#1c2541] border border-white/10 rounded-3xl p-6 w-full max-w-md shadow-2xl relative animate-fadeIn">
            
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-black text-white flex items-center gap-2 m-0">
                <span>💬</span> Share Your Feedback
              </h3>
              <button 
                onClick={() => setShowFeedback(false)}
                className="text-white/40 hover:text-white bg-white/5 hover:bg-white/10 h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer border-0"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/40 block mb-1.5">Full Name</label>
                <input 
                  type="text"
                  required
                  placeholder="Kumail Abbas"
                  className="w-full bg-black/20 border border-white/10 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-white/20"
                  value={feedbackName}
                  onChange={(e) => setFeedbackName(e.target.value)}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/40 block mb-1.5">Email Address</label>
                <input 
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-black/20 border border-white/10 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-white/20"
                  value={feedbackEmail}
                  onChange={(e) => setFeedbackEmail(e.target.value)}
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/40 block mb-1.5">Feedback Message</label>
                <textarea 
                  required
                  rows="3"
                  placeholder="Type your review or bugs suggestions here..."
                  className="w-full bg-black/20 border border-white/10 rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-white/20 resize-none"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end pt-2">
                <button 
                  type="button"
                  onClick={() => setShowFeedback(false)}
                  className="px-4 py-2 text-xs font-semibold text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors cursor-pointer border-0"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-gray-900 bg-cyan-400 hover:bg-cyan-500 rounded-xl transition-colors cursor-pointer shadow-md border-0"
                >
                  Submit Review
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* --- WEATHER CARDS MODULE --- */}
      <Card />

      {/* --- MOBILE BOTTOM NAVIGATION BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 block lg:hidden bg-black/80 border-t border-white/10 backdrop-blur-lg z-50">
        <div className="flex justify-around items-center py-2">
          <a href="#home" className="text-center no-underline text-cyan-400 flex flex-col items-center">
            <span className="text-xl">🏡</span>
            <span className="text-[10px] block mt-0.5 font-medium">Home</span>
          </a>
          <a href="Pages/Radar.jsx" className="text-center no-underline text-white/50 flex flex-col items-center hover:text-cyan-400 transition-colors">
            <span className="text-xl">📡</span>
            <span className="text-[10px] block mt-0.5 font-medium">Radar</span>
          </a>
          <a href="Pages/Hourly.jsx" className="text-center no-underline text-white/50 flex flex-col items-center hover:text-cyan-400 transition-colors">
            <span className="text-xl">⏰</span>
            <span className="text-[10px] block mt-0.5 font-medium">Hourly</span>
          </a>
          <a href="Pages/History.jsx" className="text-center no-underline text-white/50 flex flex-col items-center hover:text-cyan-400 transition-colors">
            <span className="text-xl">📜</span>
            <span className="text-[10px] block mt-0.5 font-medium">History</span>
          </a>
          <a href="Pages/News.jsx" className="text-center no-underline text-white/50 flex flex-col items-center hover:text-cyan-400 transition-colors">
            <span className="text-xl">📰</span>
            <span className="text-[10px] block mt-0.5 font-medium">News</span>
          </a>
          <a href="Pages/Contact.jsx" className="text-center no-underline text-white/50 flex flex-col items-center hover:text-cyan-400 transition-colors">
            <span className="text-xl">📞</span>
            <span className="text-[10px] block mt-0.5 font-medium">Contact</span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Home;
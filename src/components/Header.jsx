import React, { useState } from 'react'

function Header() {
  // 💡 Single unified states configuration
  const [uiState, setUiState] = useState({
    isDropdownOpen: false,
    likes: 1
  });

  const [formState, setFormState] = useState({
    showFeedback: false,
    name: '',
    email: '',
    message: ''
  });

  const handleIncrement = () => {
    setUiState(prev => ({ ...prev, likes: prev.likes + 1 }));
  };

  const handleDecrement = () => {
    if (uiState.likes > 0) {
      setUiState(prev => ({ ...prev, likes: prev.likes - 1 }));
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formState;
    if (!message.trim() || !name.trim() || !email.trim()) return;
    
    alert(`Thank you ${name}!\nFeedback received from: ${email}\nMessage: "${message}"`);
    
    setFormState({
      showFeedback: false,
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="font-['Inter']">
      
      {/* --- DESKTOP NAVBAR --- */}
      {/* 💡 bg-[#0b132b]/80 aur border-white/5 se isko premium glass look de di hai */}
      <nav className="hidden lg:block bg-[#0b132b]/80 border-b border-white/5 py-4 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          
          {/* Logo brand configuration */}
          <a className="text-2xl font-black tracking-tight text-white hover:opacity-90 flex items-center gap-2 no-underline transition-opacity" href="#">
            <span className="text-cyan-400 text-2xl drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">☀️</span> 
            <span>Sky<span className="text-cyan-400">Cast</span></span>
          </a>
          
          <div className="flex items-center grow justify-center">
            <ul className="flex items-center gap-7 list-none m-0 p-0">
              <li>
                <a className="group text-sm font-semibold text-white no-underline flex items-center gap-1.5 transition-all" href="#home">
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 inline-block text-base">🏡</span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a className="group text-sm font-medium text-white/60 no-underline hover:text-white flex items-center gap-1.5 transition-all" href="Radar.jsx">
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 inline-block text-base">📡</span>
                  <span>Live Radar</span>
                </a>
              </li>
              <li>
                <a className="group text-sm font-medium text-white/60 no-underline hover:text-white flex items-center gap-1.5 transition-all" href="Pages/Hourly.jsx">
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 inline-block text-base">⏰</span>
                  <span>Hourly Forecast</span>
                </a>
              </li>
              <li>
                <a className="group text-sm font-medium text-white/60 no-underline hover:text-white flex items-center gap-1.5 transition-all" href="Pages/History.jsx">
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 inline-block text-base">📜</span>
                  <span>Historical Data</span>
                </a>
              </li>
              <li>
                <a className="group text-sm font-medium text-white/60 no-underline hover:text-white flex items-center gap-1.5 transition-all" href="Pages/News.jsx">
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 inline-block text-base">📰</span>
                  <span>Weather News</span>
                </a>
              </li>
              <li>
                <a className="group text-sm font-medium text-white/60 no-underline hover:text-white flex items-center gap-1.5 transition-all" href="Pages/Contact.jsx">
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 inline-block text-base">📞</span>
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Settings Button */}
          <div className="relative">
            <button 
              onClick={() => setUiState(p => ({ ...p, isDropdownOpen: !p.isDropdownOpen }))}
              className="bg-white/5 hover:bg-white/10 text-white/90 border border-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              ⚙️ Settings <span className="text-[10px] text-white/40">▼</span>
            </button>

            {uiState.isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-[#1c2541]/95 border border-white/10 rounded-2xl shadow-2xl p-1.5 z-50 backdrop-blur-xl animate-fadeIn flex flex-col gap-0.5">
                <div className="text-[10px] text-white/40 uppercase font-black px-2.5 py-1 tracking-wider">Theme</div>
                <button onClick={() => alert('Light Mode Coming Soon!')} className="w-full text-left px-2.5 py-2 text-xs font-semibold rounded-xl hover:bg-white/5 text-white/80 border-0 bg-transparent cursor-pointer transition-colors">☀️ Light Mode</button>
                <button onClick={() => alert('Already in Dark Mode!')} className="w-full text-left px-2.5 py-2 text-xs font-bold rounded-xl hover:bg-white/5 text-cyan-400 border-0 bg-transparent cursor-pointer transition-colors flex items-center justify-between">
                  <span>🌙 Dark Mode</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
                </button>
                <div className="border-t border-white/5 my-1"></div>
                <div className="text-[10px] text-white/40 uppercase font-black px-2.5 py-1 tracking-wider">Language</div>
                <button onClick={() => alert('Language Options Coming Soon!')} className="w-full text-left px-2.5 py-2 text-xs font-semibold rounded-xl hover:bg-white/5 text-white/80 border-0 bg-transparent cursor-pointer transition-colors">🌐 Change Language</button>
                <div className="border-t border-white/5 my-1"></div>
                <div className="text-[10px] text-white/40 uppercase font-black px-2.5 py-1 tracking-wider">Developer Module</div>
                <button onClick={() => alert('Created with ❤️ by Kumail Abbas')} className="w-full text-left px-2.5 py-2 text-xs font-semibold rounded-xl hover:bg-white/5 text-white/80 border-0 bg-transparent cursor-pointer transition-colors">🚀 Who Made This?</button>
                <button 
                  onClick={() => { setFormState(p => ({ ...p, showFeedback: true })); setUiState(p => ({ ...p, isDropdownOpen: false })); }}
                  className="w-full text-left px-2.5 py-2 text-xs font-black rounded-xl bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all mt-1 flex items-center justify-center gap-1.5 shadow-md border-0 cursor-pointer"
                >
                  💬 Give Feedback
                </button>
              </div>
            )}
          </div>

        </div>
      </nav>

      {/* --- MOBILE TOP HEADER --- */}
      {/* 💡 Mobile background ko bhi exact matching matching bg-[#0b132b]/80 de dia hai */}
      <div className="block lg:hidden border-b border-white/5 bg-[#0b132b]/80 backdrop-blur-xl py-3 px-4 sticky top-0 z-50">
        <div className="flex justify-between items-center relative">
          <h4 className="font-black text-white text-lg tracking-tight m-0">
            ☀️ Sky<span className="text-cyan-400">Cast</span>
          </h4>
          <div>
            <button 
              onClick={() => setUiState(p => ({ ...p, isDropdownOpen: !p.isDropdownOpen }))}
              className="text-white/80 text-base bg-white/5 p-2.5 rounded-full flex items-center justify-center border border-white/10 cursor-pointer transition-colors hover:bg-white/10"
            >
              ⚙️
            </button>

            {uiState.isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-[#1c2541]/95 border border-white/10 rounded-2xl shadow-2xl p-1.5 z-50 backdrop-blur-xl flex flex-col gap-0.5">
                <div className="text-[10px] text-white/40 uppercase font-black px-2.5 py-1">Theme</div>
                <button onClick={() => alert('Light Mode Coming Soon!')} className="w-full text-left px-2.5 py-2 text-xs rounded-xl hover:bg-white/5 text-white/80 border-0 bg-transparent">☀️ Light Mode</button>
                <button onClick={() => alert('Already in Dark Mode!')} className="w-full text-left px-2.5 py-2 text-xs font-bold rounded-xl hover:bg-white/5 text-cyan-400 border-0 bg-transparent">🌙 Dark Mode</button>
                <div className="border-t border-white/5 my-1"></div>
                <div className="text-[10px] text-white/40 uppercase font-black px-2.5 py-1">Language</div>
                <button onClick={() => alert('Language Coming Soon!')} className="w-full text-left px-2.5 py-2 text-xs rounded-xl hover:bg-white/5 text-white/80 border-0 bg-transparent">🌐 Change Language</button>
                <div className="border-t border-white/5 my-1"></div>
                <button onClick={() => alert('Created with ❤️ by Kumail Abbas')} className="w-full text-left px-2.5 py-2 text-xs rounded-xl hover:bg-white/5 text-white/80 border-0 bg-transparent">🚀 Who Made?</button>
                <button 
                  onClick={() => { setFormState(p => ({ ...p, showFeedback: true })); setUiState(p => ({ ...p, isDropdownOpen: false })); }}
                  className="w-full text-center px-2.5 py-2 text-xs font-black rounded-xl bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-1.5 border-0 cursor-pointer mt-1"
                >
                  💬 Send feedback
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔥 MODAL FEEDBACK FORM COMPONENT */}
      {formState.showFeedback && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4 animate-fadeIn">
          <div className="bg-[#1c2541] border border-white/10 rounded-3xl p-6 w-full max-w-md shadow-2xl relative">
            
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-black text-white flex items-center gap-2 m-0 uppercase tracking-wide">
                <span className="text-lg">💬</span> Share Feedback
              </h3>
              <button 
                onClick={() => setFormState(p => ({ ...p, showFeedback: false }))}
                className="text-white/40 hover:text-white bg-white/5 hover:bg-white/10 h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer border-0 transition-colors"
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
                  className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-white/20"
                  value={formState.name}
                  onChange={(e) => setFormState(p => ({ ...p, name: e.target.value }))}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/40 block mb-1.5">Email Address</label>
                <input 
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-white/20"
                  value={formState.email}
                  onChange={(e) => setFormState(p => ({ ...p, email: e.target.value }))}
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/40 block mb-1.5">Feedback Message</label>
                <textarea 
                  required
                  rows="3"
                  placeholder="Type your review or bugs suggestions here..."
                  className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder-white/20 resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState(p => ({ ...p, message: e.target.value }))}
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end pt-2">
                <button 
                  type="button"
                  onClick={() => setFormState(p => ({ ...p, showFeedback: false }))}
                  className="px-4 py-2 text-xs font-bold text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors cursor-pointer border-0"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 text-xs font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all cursor-pointer shadow-md border-0"
                >
                  Submit Review
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  )
}

export default Header
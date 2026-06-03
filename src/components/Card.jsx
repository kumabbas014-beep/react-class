import React from 'react'

function Card() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <h2 className="text-2xl font-black tracking-tight uppercase text-[15px] text-white/40">
          Advanced Weather Matrix
        </h2>
      </div>
      
      {/* --- RESPONSIVE BENTO GRID SYSTEM --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-auto md:auto-rows-[140px]">
        
        {/* 1. Temperature Card (Bento Big - 2x2) */}
        <div className="sm:col-span-2 md:row-span-2 bg-linear-to-br from-cyan-500/10 to-transparent border border-cyan-400/20 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group min-h-55 md:min-h-auto">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">Current Metrics</p>
              <h3 className="text-xl font-bold text-white mt-1">Temperature Overview</h3>
            </div>
            <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">🌡️</span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-5xl md:text-6xl font-black text-white tracking-tighter group-hover:scale-105 transition-transform duration-300 origin-left">28°C</p>
            <p className="text-sm text-white/50 mt-2">Thermal state feels like <span className="text-white font-medium">30°C</span> with standard pressure atmospheric conditions.</p>
          </div>
        </div>
        
        {/* 2. Humidity Card (Bento Tall - 1x2) */}
        <div className="md:row-span-2 bg-black/20 border border-white/5 rounded-3xl p-6 flex flex-col justify-between backdrop-blur-lg transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(52,211,153,0.1)] min-h-45 md:min-h-auto">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Moisture</span>
            <span className="text-2xl">💧</span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-5xl font-extrabold text-white tracking-tight">65%</p>
            <h3 className="text-base font-semibold text-white mt-4">Humidity Layer</h3>
            <p className="text-xs text-emerald-400 font-medium mt-1">✓ Comfortable moisture index</p>
          </div>
        </div>
        
        {/* 3. Wind Speed Card */}
        <div className="bg-black/20 border border-white/5 rounded-3xl p-5 flex items-center justify-between backdrop-blur-lg transition-all duration-300 hover:border-indigo-400/40 min-h-25 md:min-h-auto">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Velocity</span>
            <h3 className="text-base font-bold text-white mt-0.5">Wind Speed</h3>
            <p className="text-xs text-white/40 mt-1">Gentle Breeze</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-black text-white">15<span className="text-xs font-normal text-white/60 ml-0.5">km/h</span></p>
          </div>
        </div>

        {/* 4. UV Index Card */}
        <div className="bg-black/20 border border-white/5 rounded-3xl p-5 flex items-center justify-between backdrop-blur-lg transition-all duration-300 hover:border-amber-400/40 min-h-25 md:min-h-auto">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Radiation</span>
            <h3 className="text-base font-bold text-white mt-0.5">UV Index</h3>
            <p className="text-xs text-amber-400/60 mt-1 font-medium">Moderate Risk</p>
          </div>
          <p className="text-3xl font-black text-white">5</p>
        </div>

        {/* 5. Sunrise & Sunset Card */}
        <div className="sm:col-span-2 bg-black/20 border border-white/5 rounded-3xl p-5 flex items-center justify-between backdrop-blur-lg transition-all duration-300 hover:border-orange-400/40 min-h-25 md:min-h-auto">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-2xl bg-orange-500/10 flex items-center justify-center text-xl border border-orange-500/20">🌅</div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400">Solar Cycle</span>
              <h3 className="text-base font-bold text-white">Sunrise / Sunset</h3>
            </div>
          </div>
          <div className="text-right flex flex-col justify-center">
            <p className="text-sm font-bold text-white">05:12 AM <span className="text-white/40 font-normal">⬆</span></p>
            <p className="text-sm font-bold text-orange-400 mt-0.5">07:04 PM <span className="text-orange-400/40 font-normal">⬇</span></p>
          </div>
        </div>

        {/* 6. Air Quality Index */}
        <div className="bg-black/20 border border-white/5 rounded-3xl p-5 flex items-center justify-between backdrop-blur-lg transition-all duration-300 hover:border-lime-400/40 min-h-25 md:min-h-auto">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-lime-400">Pollution</span>
            <h3 className="text-base font-bold text-white mt-0.5">AQI Index</h3>
            <p className="text-xs text-lime-400 font-medium mt-1">Excellent Air</p>
          </div>
          <p className="text-3xl font-black text-white">32</p>
        </div>

        {/* 7. Air Pressure Card */}
        <div className="bg-black/20 border border-white/5 rounded-3xl p-5 flex items-center justify-between backdrop-blur-lg transition-all duration-300 hover:border-purple-400/40 min-h-25 md:min-h-auto">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Atmosphere</span>
            <h3 className="text-base font-bold text-white mt-0.5">Baro Pressure</h3>
            <p className="text-xs text-white/40 mt-1">Standard level</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-black text-white">1012<span className="text-xs font-normal text-white/40 ml-0.5">hPa</span></p>
          </div>
        </div>

        {/* 8. Visibility Card */}
        <div className="bg-black/20 border border-white/5 rounded-3xl p-5 flex items-center justify-between backdrop-blur-lg transition-all duration-300 hover:border-teal-400/40 min-h-25 md:min-h-auto">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">Optics</span>
            <h3 className="text-base font-bold text-white mt-0.5">Visibility</h3>
            <p className="text-xs text-teal-400 font-medium mt-1">Perfect view</p>
          </div>
          <p className="text-2xl font-black text-white">10<span className="text-xs font-normal text-white/40 ml-0.5">km</span></p>
        </div>
      
      </div>
    </div>
  )
}

export default Card
import React from 'react'

// 💡 Arrow Function syntax implemented here perfectly!
const Card = () => {
  const topCities = [
    { name: "Skardu", temp: "18°C", condition: "Clear 🏔️", bg: "from-cyan-500/10" },
    { name: "Karachi", temp: "34°C", condition: "Humid 🌊", bg: "from-amber-500/10" },
    { name: "Lahore", temp: "38°C", condition: "Sunny ☀️", bg: "from-orange-500/10" },
    { name: "Islamabad", temp: "26°C", condition: "Rainy 🌧️", bg: "from-emerald-500/10" },
    { name: "London", temp: "16°C", condition: "Cloudy ☁️", bg: "from-indigo-500/10" }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      
      {/* 🏙️ SECTION 1: TOP CITIES QUICK ACCESS */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping"></span>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
            Popular Destinations
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {topCities.map((city, index) => (
            <div 
              key={index}
              className={`bg-linear-to-br ${city.bg} to-transparent bg-black/10 border border-white/5 hover:border-white/20 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] cursor-pointer group`}
            >
              <div>
                <p className="text-[10px] font-semibold text-white/40 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                  City Node
                </p>
                <h4 className="text-base font-bold text-white mt-0.5">{city.name}</h4>
              </div>
              <div className="mt-4 flex justify-between items-end">
                <span className="text-xl font-black text-white">{city.temp}</span>
                <span className="text-xs text-white/60 font-medium">{city.condition}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📊 SECTION 2: ADVANCED WEATHER MATRIX (BENTO GRID) */}
      <div>
        <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <h2 className="text-2xl font-black tracking-tight uppercase text-[15px] text-white/40">
            Advanced Weather Matrix
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-auto md:auto-rows-[140px]">
          
          {/* Temperature */}
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
          
          {/* Humidity */}
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
          
          {/* Wind Speed */}
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

          {/* UV Index */}
          <div className="bg-black/20 border border-white/5 rounded-3xl p-5 flex items-center justify-between backdrop-blur-lg transition-all duration-300 hover:border-amber-400/40 min-h-25 md:min-h-auto">
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Radiation</span>
              <h3 className="text-base font-bold text-white mt-0.5">UV Index</h3>
              <p className="text-xs text-amber-400/60 mt-1 font-medium">Moderate Risk</p>
            </div>
            <p className="text-3xl font-black text-white">5</p>
          </div>

          {/* Sunrise / Sunset */}
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

          {/* AQI */}
          <div className="bg-black/20 border border-white/5 rounded-3xl p-5 flex items-center justify-between backdrop-blur-lg transition-all duration-300 hover:border-lime-400/40 min-h-25 md:min-h-auto">
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-lime-400">Pollution</span>
              <h3 className="text-base font-bold text-white mt-0.5">AQI Index</h3>
              <p className="text-xs text-lime-400 font-medium mt-1">Excellent Air</p>
            </div>
            <p className="text-3xl font-black text-white">32</p>
          </div>

          {/* Pressure */}
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

          {/* Visibility */}
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

    </div>
  )
}

export default Card
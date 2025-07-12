import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollGallery from './components/ScrollGallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Media from './pages/Media';
import Download from './pages/Download';
import Features from './pages/Features';


function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ScrollGallery />
              {/* YouTube Video Section */}
              <section className="flex flex-col items-center justify-center py-8 sm:py-12 px-2 sm:px-4 bg-black w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-white">Gameplay Preview</h2>
                <div className="w-full max-w-2xl md:max-w-3xl rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video min-h-[200px] sm:min-h-[300px] md:min-h-[360px]">
                  <iframe
                    className="w-full h-full bg-black min-h-[200px] sm:min-h-[300px] md:min-h-[360px]"
                    src="https://www.youtube-nocookie.com/embed/oiLJFeL1c1U?loop=1&autoplay=1&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>
              {/* Additional YouTube Video Section 2 */}
              <section className="flex flex-col items-center justify-center py-8 sm:py-12 px-2 sm:px-4 bg-black w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-white">Watch the Trailer</h2>
                <div className="w-full max-w-2xl md:max-w-3xl rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video min-h-[200px] sm:min-h-[300px] md:min-h-[360px]">
                  <iframe
                    className="w-full h-full bg-black min-h-[200px] sm:min-h-[300px] md:min-h-[360px]"
                    src="https://www.youtube-nocookie.com/embed/RSEtcHDDhcg?loop=1&autoplay=1&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>
              {/* Additional YouTube Video Section 3 */}
              <section className="flex flex-col items-center justify-center py-8 sm:py-12 px-2 sm:px-4 bg-black w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-white">Developer Insights</h2>
                <div className="w-full max-w-2xl md:max-w-3xl rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video min-h-[200px] sm:min-h-[300px] md:min-h-[360px]">
                  <iframe
                    className="w-full h-full bg-black min-h-[200px] sm:min-h-[300px] md:min-h-[360px]"
                    src="https://www.youtube-nocookie.com/embed/aM7ejHbJ0RU?loop=1&autoplay=1&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>
              {/* Features Description Section */}
              <section id="features" className="py-10 sm:py-16 px-2 sm:px-4 max-w-6xl mx-auto w-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8">Game Features</h2>
                <p className="text-base sm:text-lg">Windlight Island is a third-person exploration and puzzle-adventure game set in a beautifully crafted Mediterranean coastal environment. Players embark on a peaceful journey across a sunlit island, where nature, wind, and ancient ruins intertwine to form a quiet but compelling narrative experience.

Guided only by the elements, the player must collect mystical shards scattered throughout the island to awaken the central shrine and restore balance to the land. The core mechanics revolve around wind-based interactions, light environmental puzzles, and scenic exploration designed to encourage mindfulness and curiosity rather than combat or competition.

Built using Unreal Engine 5, the game leverages advanced features like Nanite virtualized geometry, Lumen global lighting, and a fully dynamic wind system to create a visually stunning and immersive world. Combined with natural soundscapes and ambient audio, Windlight Island offers players a relaxing yet engaging experience that appeals to fans of meditative indie titles.

Whether walking under olive trees, gliding wind-powered objects across rivers, or solving ancient stone puzzles, players will uncover secrets of a forgotten civilization and reconnect with the calm power of nature.</p>
              </section>
            </>
          } />
          <Route path="/media" element={<Media />} />
          <Route path="/download" element={<Download />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

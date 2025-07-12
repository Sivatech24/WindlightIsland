import React from 'react';

const features = [
  {
    title: 'Stunning Mediterranean World',
    description: 'Explore a sunlit island with lush forests, ancient ruins, and beautiful coastlines.'
  },
  {
    title: 'Wind & Light Puzzles',
    description: 'Solve environmental puzzles using wind mechanics and light-based interactions.'
  },
  {
    title: 'Relaxing Exploration',
    description: 'No combat, no timers just peaceful discovery and mindfulness.'
  },
  {
    title: 'Next-Gen Graphics',
    description: 'Powered by Unreal Engine 5 with Nanite, Lumen, and dynamic wind systems.'
  },
  {
    title: 'Immersive Soundscapes',
    description: 'Enjoy ambient audio and natural soundscapes for a meditative experience.'
  },
];

const Features = () => (
  <section className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Game Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
      {features.map((f, idx) => (
        <div key={idx} className="bg-gray-900 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
          <p className="text-gray-300">{f.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;

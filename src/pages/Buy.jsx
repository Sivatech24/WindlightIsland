import React from 'react';

const Download = () => (
  <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Download Windlight Island</h2>
    <div className="bg-gray-900 rounded-xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center">
      <p className="text-lg mb-6 text-center">Windlight Island and start your adventure today!</p>
      <a
        href="#"
        className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition"
        download
      >
        Download Now
      </a>
      <p className="text-sm text-gray-400 mt-4">* Download is a demo.</p>
    </div>
  </section>
);

export default Download;

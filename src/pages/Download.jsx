import React from 'react';

const Download = () => (
  <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10 px-2 sm:px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Download Windlight Island</h2>
    <div className="bg-gray-900 rounded-xl shadow-2xl p-4 sm:p-8 w-full max-w-md sm:max-w-lg flex flex-col items-center">
      <p className="text-lg mb-6 text-center">Download Windlight Island and start your adventure today!</p>
      <a
        href="#"
        className="inline-block w-full sm:w-auto px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition text-center"
        download
      >
        Download Now
      </a>
      <p className="text-sm text-gray-400 mt-4 text-center">* Windlight Island is an adventure game currently in development. Explore a mysterious island, uncover hidden lanterns, and unlock ancient secrets.</p>
    </div>
  </section>
);

export default Download;

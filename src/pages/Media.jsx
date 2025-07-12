import React from 'react';

const images = [
  'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/main/Images/4.png',
  'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/main/Images/6.png',
  'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/main/Images/7.png',
  'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/main/Images/1.png',
'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/main/Images/2.png',
'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/main/Images/3.png',
'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/main/Images/5.png',
'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/main/Images/59c3cf16-f304-423f-955f-4356847d120b.jpg',
'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/main/Images/AlbedoBase_XL_Create_a_round_vintagestyle_emblem_logo_for_a_re_3-modified.png',
'https://raw.githubusercontent.com/Sivatech24/Windlight-Island/main/Images/f7bd4ab4-689e-47a2-bf13-7fd2b5d24c5c.jpg',

  // Add more image URLs as needed
];

const Media = () => (
  <section className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Media Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
      {images.map((src, idx) => (
        <div key={idx} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <img src={src} alt={`Screenshot ${idx + 1}`} className="w-full h-64 object-cover" />
        </div>
      ))}
    </div>
  </section>
);

export default Media;

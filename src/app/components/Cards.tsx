import React from 'react'

const Cards = () => {
  return (
  <div className='bg-black flex items-center justify-center min-h-screen container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='card'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
              <img src="/dahlia.png" alt="Dahlia" />
            </div>
            <h5 className='text-pink-400 text-2xl md:text-3xl font-medium'>Dahlia Flower</h5>
            <p className='text-pink-300 text-lg mt-3'>
            "Graceful Petals Unfold In Radiant Display,
            A Symbol Of Elegance And Inner Strength Always." 🌸</p>
          <a href="#" className='text-center bg-red-900 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
          </div>
          </div>

          <div className='card'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
              <img src="/rose.jpg" alt="Rose" />
            </div>
            <h5 className='text-red-600 text-2xl md:text-3xl font-medium'>Rose Flower</h5>
            <p className='text-red-900 text-lg mt-3'>
               "Delicate Petals Whisper Secrets Of The Heart,
                A Timeless Bloom Where Love And Beauty Start." 🌹</p>
          <a href="#" className='text-center bg-red-900 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
          </div>
          </div>

          <div className='card'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
              <img src="/jasmine2.png" alt="Jasmine" />
            </div>
            <h5 className='text-green-800 text-2xl md:text-3xl font-medium'>Jasmine Flower</h5>
            <p className='text-white text-lg mt-3'>
            "Sweet Aroma Fills The Evening Air,
            A Timeless Symbol Of Purity And Care." 🌼</p>
          <a href="#" className='text-center bg-red-900 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
          </div>
          </div>

          <div className='card'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
              <img src="/lilly.png" alt="Lilly" />
            </div>
            <h5 className='text-yellow-800 text-2xl md:text-3xl font-medium'>Lilly Flower</h5>
            <p className='text-yellow-100 text-lg mt-3'>
            "Elegant Blooms Grace The Morning Light,
            A Beacon Of Peace And Pure Delight." 🌺</p>
          <a href="#" className='text-center bg-red-900 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
          </div>
          </div>

          <div className='card'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
              <img  src="/mari.png" alt="MariGold" />
            </div>
            <h5 className='text-yellow-200 text-2xl md:text-3xl font-medium'>MariGold Flower</h5>
            <p className='text-yellow-500 text-lg mt-3'>
               "Golden Hues Dance Beneath The Sun,
               A Symbol Of Passion And Joy Well-Spun." 🌼</p>
          <a href="#" className='text-center bg-red-900 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
          </div>
          </div>
          <div className='card'>
            <div className='p-5 flex flex-col'>
              <div className='rounded-xl overflow-hidden'>
              <img src="/sunflower.png" alt="Sunflower" />
            </div>
            <h5 className='text-orange-400 text-2xl md:text-3xl font-medium'>SunFlower</h5>
            <p className='text-orange-700 text-lg mt-3'>
            "The Sunflower Reaches For The Sky, Its Golden Petals Glowing Bright.
            With A Sturdy Stem, It Stands Tall, A Symbol Of Warmth And Light."</p>
          <a href="#" className='text-center bg-red-900 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
          </div>
          </div>
        </div>
  </div>
  )
}

export default Cards







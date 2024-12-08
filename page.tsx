// app/page.js
import Image from 'next/image';


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Image container with margins */}
        <div className="rounded-lg overflow-hidden shadow-lg relative h-[500px]">
          <Image 
            src="/image/image.png"
            alt="shoe pic"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        {/* Text content below image */}
        <div className="mt-8 text-center">
          <p className="text-sm">First Look</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            NIKE AIR MAX PULSE
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Extreme Comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br></br> - designed to push you past your limits and help you go to the max. 
          </p>
          
          {/* Added buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Notify Me
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>


     
    </div>
    
  );
}

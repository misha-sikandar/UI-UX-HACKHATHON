// app/product/page.jsx
import { ShoppingCartIcon } from '@heroicons/react/24/outline' // Make sure to install @heroicons/react
import Image from 'next/image';

export default function ProductDetail() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/nike-air-force.jpg" // Add your image to public/images
            alt="Nike Air Force 1 PLT.AF.ORM"
            className="w-[653px] h-[653px] object-cover"
          />
        </div>

        {/* Right Column - Product Details */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Nike Air Force 1</h1>
            <h2 className="text-3xl font-bold">PLT.AF.ORM</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid.
            Its inside out-inspired construction, including unique layering and 
            exposed foam accents, ups the ante on this timeless Jordan Brand silhouette.
            Details like the deco stitching on the Swoosh add coveted appeal, while
            the unexpected shading, rich mixture of materials and aged midsole
            aesthetic give this release on astisan finish.
          </p>

          <h3 className="text-3xl font-bold">$160</h3>

          <button className="flex items-center justify-center space-x-2 bg-black text-white py-4 px-8 rounded-md hover:bg-gray-800 transition-colors">
            <ShoppingCartIcon className="w-6 h-6" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

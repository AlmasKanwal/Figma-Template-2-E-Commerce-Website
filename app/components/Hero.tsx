import Image from 'next/image';


export default function Hero() {
  return (
    <div className="w-[1440px] h-[704px] bg-white flex justify-center items-center">
      {/* Inner Container */}
      <div className="w-[1280px] h-[584px] flex">
        {/* Left Side - Text */}
        <div className="flex-1 bg-[#2A254B] text-white px-12 py-16 flex flex-col justify-between">
          {/* Heading and Button */}
          <div>
            <h1 className="text-3xl font-bold leading-tight">
              The furniture brand for the future <br /> with timeless designs
            </h1>
            <button className="w-[170px] h-[56px] bg-[#4E4D93] text-white font-bold mt-8 hover:bg-gray-700 transition duration-200">
              View collection
            </button>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base">
            A new era in eco-friendly furniture with Avion, the French luxury retail brand
            <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
            <br /> using modern web technologies.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-[520px] h-[584px] bg-gray-200 flex justify-center items-center">
          <Image
            src="/right-img.png"
            width={400}
            height={400}
            alt="Chair"
            className="object-contain"
          />
        </div>
      </div>
    </div>



  );
}

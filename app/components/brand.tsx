import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

export default function Brand(){
  return (
      <section>
        <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          {/* Title */}
          <h1 className="text-center text-xl md:text-2xl font-semibold">
            What makes our brand different
          </h1>

          {/* Features */}
          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
            {/* Feature 1 */}
            <div className="flex flex-col items-center md:w-[25%] p-6 bg-white shadow-lg rounded-lg">
              <TbTruckDelivery size={40} className="text-[#2A254B] mb-4" />
              <p className="py-2 font-semibold">Next day as standard</p>
              <p className="text-center">Order before 3pm and get your order the next day as standard.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center md:w-[25%] p-6 bg-white shadow-lg rounded-lg">
              <IoIosCheckmarkCircleOutline size={40} className="text-[#2A254B] mb-4"/>
              <p className="py-2 font-semibold">Made by true artisans</p>
              <p className="text-center">Hand-crafted goods made with real passion and craftsmanship.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center md:w-[25%] p-6 bg-white shadow-lg rounded-lg">
              <MdOutlinePriceChange size={40} className="text-[#2A254B] mb-4"/>
              <p className="py-2 font-semibold">Unbeatable prices</p>
              <p className="text-center">For our material and quality, you won&apos;t find better prices anywhere.</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center md:w-[25%] p-6 bg-white shadow-lg rounded-lg">
              <LuSprout size={40} className="text-[#2A254B] mb-4"/>
              <p className="py-2 font-semibold">Recycled packaging</p>
              <p className="text-center">We use 100% recycled packaging to ensure our footprint is manageable.</p>
            </div>
          </div>
        </div>
      </section>
  );
}

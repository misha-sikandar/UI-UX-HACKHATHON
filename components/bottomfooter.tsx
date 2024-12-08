import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function BottomNavbar() {
  return (
    <div className=" fixed bottom-0 w-[1372px] h-[62px] bg-black text-white px-6">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center space-x-2">
          <IoLocationOutline className="text-white" />
          <span>India</span>
          <div className="ml-4 flex items-center space-x-1">
            <AiOutlineCopyrightCircle />
            <span>Nike, Inc. All Rights Reserved</span>
          </div>
        </div>

        <ul className="flex items-center space-x-6">
          <li className="cursor-pointer hover:text-gray-300">Guides</li>
          <li className="cursor-pointer hover:text-gray-300">Terms of Sale</li>
          <li className="cursor-pointer hover:text-gray-300">Terms of Use</li>
          <li className="cursor-pointer hover:text-gray-300">Nike Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}

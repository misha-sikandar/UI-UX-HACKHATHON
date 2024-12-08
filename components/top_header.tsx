
export default function TopHeader(){
    return(
        <div className=" bg-[#f5f5f5] text-black w-[1349px] h-[48px]">
               <div className="w-98.5px h-34px pt-10px pb-10px pl-12px pr-6.13px flex justify-end space-x-6">
        <ul className="flex space-x-6">
            <li><a href="/find_a_store" className="hover:underline">Find a Store</a></li><div className="w-3px h-14px font-[400] text-[12px] text-[#111111] font-Helvetica Neue leading-[14px]">|</div>
            <li><a href="/help" className="hover:underline">Help</a></li><div className="w-3px h-14px font-[400] text-[12px] text-[#111111] font-Helvetica Neue leading-[14px]">|</div>
            <li><a href="/join_us" className="hover:underline">Join Us</a></li><div className="w-3px h-14px font-[400] text-[12px] text-[#111111] font-Helvetica Neue leading-[14px]">|</div>
            <li><a href="/signin" className="hover:underline">Sign In</a></li>
        </ul>
        </div>
      </div>
    );
}
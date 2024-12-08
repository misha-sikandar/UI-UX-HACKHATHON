// app/components/Footer.jsx
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
      <footer className="fixed bottom-0 bg-black w-[1372px] h-[400px] mx-auto text-white">
        <div className="container mx-auto px-4 py-8 h-full">
          {/* Social Media Icons */}
          <div className="flex justify-end gap-4 mb-6">
            <FaTwitter className="w-6 h-6 cursor-pointer hover:text-blue-400" />
            <FaFacebook className="w-6 h-6 cursor-pointer hover:text-blue-600" />
            <FaYoutube className="w-6 h-6 cursor-pointer hover:text-red-600" />
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-500" />
          </div>

          <div className="grid grid-cols-4 gap-8 h-full">
            {/* Rest of your existing footer content */}
            <div>
              <h4 className="font-bold text-lg mb-4">FIND A STORE</h4>
              <h4 className="font-bold text-lg mb-4">BECOME A MEMBER</h4>
              <h4 className="font-bold text-lg mb-4">SIGN UP FOR EMAIL</h4>
              <h4 className="font-bold text-lg mb-4">SEND US FEEDBACK</h4>
              <h4 className="font-bold text-lg mb-4">STUDENT DISCOUNTS</h4>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">GET HELP</h3>
              <ul className="space-y-2">
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us on Nike.com Inquiries</li>
                <li>Contact Us on All Other Inquiries</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">ABOUT NIKE</h3>
              <ul className="space-y-2">
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Sustainability</li>
              </ul>
            </div>
        
          </div>
          
        </div>
      </footer>
    )
}

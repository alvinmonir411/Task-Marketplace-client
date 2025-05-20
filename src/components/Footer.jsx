import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>Email: support@freelancehub.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline text-gray-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-500 text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-blue-400 text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="hover:text-blue-600 text-xl" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-gray-300 text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} FreelanceHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

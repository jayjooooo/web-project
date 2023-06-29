import Home from ".././view/home";
import about from ".././view/about";
import contact from ".././view/contact";
import logo_pnj from ".././view/4.png";

function header() {
  return (
    <div className="bg-blue-950 text-white Poppins">
      <div className="flex justify-between items-center top-0 left-0 right-0 py-4">
        <div className="ml-10">
          <img src={logo_pnj} alt="" className="w-20 rounded-full" />
        </div>
        <a className="text-2xl mr-48 text-left">
          Department of <br/> Informatics and Computer engineering
        </a>
        <div className="inline-block text-xl">
          <a
            className="mx-4 hover:text-pink-500 transition-colors duration-300"
            href="/"
          >
            Home
          </a>
          <a
            className="mx-4 hover:text-pink-500 transition-colors duration-300"
            href="/Academic"
          >
            Academic
          </a>
          <a
            className="mx-4 hover:text-blue-700 transition-colors duration-300"
            href="/about"
          >
            About Us
          </a>
          <a
            className="mx-4 hover:text-pink-500 transition-colors duration-300"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default header;

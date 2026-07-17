import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-8">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-2xl font-bold text-cyan-400">
          Shreyas Awdhal
        </h2>

        <p className="text-gray-400 mt-4 md:mt-0">
          © 2026 All Rights Reserved.
        </p>

        <div className="flex items-center gap-5 mt-4 md:mt-0">

          <a
            href="https://github.com/shreyas-awdal-7"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} className="hover:text-cyan-400" />
          </a>

          <a
            href="https://linkedin.com/in/shreyasawdhal"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={24} className="hover:text-cyan-400" />
          </a>

          <a href="#home">
            <FaArrowUp
              size={22}
              className="bg-cyan-500 p-1 rounded-full hover:bg-cyan-600"
            />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
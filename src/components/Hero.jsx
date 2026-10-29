import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="text-cyan-400 text-xl mb-2">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Shreyas
            <span className="text-cyan-400"> Awdhal</span>
          </h1>

          <h2 className="text-3xl text-gray-300 mt-5">
            Java Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-8 leading-8 text-lg">

            Motivated Java Full Stack Developer with hands-on
            experience in Java, Spring Boot, REST APIs,
            React.js, Node.js, Express.js, MySQL and MongoDB.
            Passionate about building scalable web applications
            and solving real-world problems.

          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 duration-300 px-8 py-3 rounded-lg font-semibold"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf?v=3"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan-500 hover:text-black duration-300"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          <div className="flex gap-7 mt-10 text-3xl">

            <a
              href="https://github.com/shreyas-awdal-7"
              target="_blank"
            >
              <FaGithub className="hover:text-cyan-400 duration-300"/>
            </a>

            <a
              href="https://linkedin.com/in/shreyasawdhal"
              target="_blank"
            >
              <FaLinkedin className="hover:text-cyan-400 duration-300"/>
            </a>

            <a href="mailto:awdhalshreyas@gmail.com">
              <FaEnvelope className="hover:text-cyan-400 duration-300"/>
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <img
            src="/profile.jpg"
            alt="profile"
            className="w-[400px] h-[400px] rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_60px_#06b6d4]"
          />

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

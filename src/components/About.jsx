import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaUserGraduate } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-slate-900 py-24 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* About */}

          <div className="bg-slate-800 rounded-xl p-8">

            <FaUserGraduate
              size={40}
              className="text-cyan-400 mb-6"
            />

            <h3 className="text-3xl font-bold mb-6">
              Who Am I?
            </h3>

            <p className="text-gray-300 leading-8">

              Motivated Java Full Stack Developer with hands-on experience
              in Java, Spring Boot, REST APIs, React.js, Node.js,
              Express.js, MySQL and MongoDB.

              Strong foundation in Object-Oriented Programming,
              Data Structures & Algorithms, DBMS and Operating Systems.

              Passionate about developing scalable web applications,
              solving real-world problems and continuously learning
              modern technologies.

            </p>

          </div>

          {/* Education */}

          <div className="space-y-8">

            <div className="bg-slate-800 rounded-xl p-8">

              <FaGraduationCap
                size={35}
                className="text-cyan-400 mb-5"
              />

              <h3 className="text-3xl font-bold mb-6">
                Education
              </h3>

              <div className="mb-8">

                <h4 className="text-xl font-semibold">
                  Master of Computer Applications (MCA)
                </h4>

                <p className="text-gray-400">
                  JSPM's Narhe Technical Campus, Pune
                </p>

                <p className="text-gray-500">
                  2025 | CGPA : 7.66
                </p>

              </div>

              <div>

                <h4 className="text-xl font-semibold">
                  Bachelor of Science in Computer Science
                </h4>

                <p className="text-gray-400">
                  Balbhim College, Beed
                </p>

                <p className="text-gray-500">
                  2023 | 82%
                </p>

              </div>

            </div>

            {/* Experience */}

            <div className="bg-slate-800 rounded-xl p-8">

              <FaBriefcase
                size={35}
                className="text-cyan-400 mb-5"
              />

              <h3 className="text-3xl font-bold mb-6">
                Experience
              </h3>

              <div className="mb-6">

                <h4 className="text-xl font-semibold">
                  Frontend Developer Intern
                </h4>

                <p className="text-gray-400">
                  Labmentix Pvt. Ltd.
                </p>

                <p className="text-gray-500">
                  Dec 2025 – Mar 2026
                </p>

              </div>

              <div>

                <h4 className="text-xl font-semibold">
                  Frontend Developer Intern
                </h4>

                <p className="text-gray-400">
                  CodeElevate Technologies
                </p>

                <p className="text-gray-500">
                  Jun 2024 – Jul 2024
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
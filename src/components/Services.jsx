import { FaCode, FaLaptopCode, FaServer, FaBug } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCode size={40} />,
    title: "Java Development",
    desc: "Java applications with Spring Boot and REST APIs.",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "React Development",
    desc: "Modern responsive websites using React.js.",
  },
  {
    icon: <FaServer size={40} />,
    title: "Backend Development",
    desc: "Spring Boot, Node.js, Express.js and MySQL.",
  },
  {
    icon: <FaBug size={40} />,
    title: "Bug Fixing",
    desc: "Debugging, API integration and performance optimization.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl text-center font-bold text-cyan-400 mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 rounded-xl p-8 border border-slate-700 text-center"
            >
              <div className="text-cyan-400 flex justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;
import { motion } from "framer-motion";

const skills = [
  "Java",
  "Spring Boot",
  "Spring Data JPA",
  "Hibernate",
  "REST APIs",
  "React.js",
  "Node.js",
  "Express.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Postman",
  "IntelliJ IDEA",
  "VS Code",
  "Data Structures",
  "Algorithms",
  "OOP",
  "DBMS",
  "Operating Systems",
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.6 }}
          className="text-5xl text-center font-bold text-cyan-400 mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill,index)=>(
            <motion.div
              key={index}
              whileHover={{ scale:1.05 }}
              className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700 hover:border-cyan-400 duration-300"
            >
              <h3 className="text-lg font-semibold">
                {skill}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;
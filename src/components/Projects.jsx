import { motion } from "framer-motion";

const projects = [

{
title:"Employee Management System",

tech:"Java • Spring Boot • MySQL • REST APIs",

desc:"Developed an Employee Management System with CRUD operations, REST APIs, input validation and exception handling using Spring Boot and MySQL.",

github:"#",

demo:"#"
},

{
title:"Category Product Management",

tech:"Java • Spring Boot • MySQL",

desc:"Developed a Category Product Management System with one-to-many relationship, CRUD operations and Spring Data JPA integration.",

github:"#",

demo:"#"
},

{
title:"Portfolio Website",

tech:"React.js • Tailwind CSS",

desc:"Designed and developed a fully responsive portfolio website showcasing projects, skills, resume and contact information.",

github:"#",

demo:"#"
}

];

const Projects=()=>{

return(

<section id="projects" className="bg-slate-900 py-24">

<div className="max-w-7xl mx-auto px-6">

<motion.h2

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.6}}

className="text-5xl font-bold text-center text-cyan-400 mb-16"

>

Projects

</motion.h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{projects.map((project,index)=>(

<motion.div

key={index}

whileHover={{y:-10}}

className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700"

>

<img

src={`https://picsum.photos/600/400?random=${index}`}

alt=""

className="h-52 w-full object-cover"

/>

<div className="p-6">

<h3 className="text-2xl font-bold mb-3">

{project.title}

</h3>

<p className="text-cyan-400 mb-4">

{project.tech}

</p>

<p className="text-gray-300 leading-7">

{project.desc}

</p>

<div className="flex gap-4 mt-6">

<a

href={project.github}

className="bg-cyan-500 px-5 py-2 rounded-lg"

>

GitHub

</a>

<a

href={project.demo}

className="border border-cyan-400 px-5 py-2 rounded-lg"

>

Live

</a>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>

)

}

export default Projects;
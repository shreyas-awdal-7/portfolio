import { motion } from "framer-motion";

const projects = [

{
title:"Shri Vighnaharta Mitra Mandal – Live Web Platform",

tech:"React.js • Node.js • Express • MongoDB • Tailwind CSS",

desc:"Live production website for a 36-year-old Ganeshotsav mandal in Beed, independently built and maintained. Bilingual (English/Marathi) UI, JWT-secured admin dashboard for donations, members and volunteers, UPI QR payments and automated PDF receipts.",

github:"",

demo:"https://www.vighnhartamitramandal.com"
},

{
title:"Event Booking Management System",

tech:"Java • Spring Boot • React.js • MySQL • JWT",

desc:"Full-stack event booking platform with Spring Security, JWT role-based auth (User/Admin), double-booking prevention using pessimistic and optimistic locking, auto-release of unpaid bookings and an admin dashboard with JUnit/Mockito tests.",

github:"https://github.com/shreyas-awdal-7/event-booking-system",

demo:"https://event-booking-system-gilt-one.vercel.app"
},

{
title:"Employee Management System",

tech:"React.js • Node.js • Express • MongoDB • JWT",

desc:"MERN HR platform with role-based access for Admin, Manager and Employee, attendance check-in/out, leave approvals, Recharts dashboards and one-click monthly payroll with PDF payslips.",

github:"https://github.com/shreyas-awdal-7/employee-management-system",

demo:"https://ems-shreyas.vercel.app"
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

{project.github && (

<a

href={project.github}

target="_blank"

rel="noopener noreferrer"

className="bg-cyan-500 px-5 py-2 rounded-lg"

>

GitHub

</a>

)}

<a

href={project.demo}

target="_blank"

rel="noopener noreferrer"

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
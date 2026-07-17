import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900 py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Let's Work Together
            </h3>

            <div className="space-y-6 text-lg">

              <p className="flex items-center gap-3">
                <FaPhone className="text-cyan-400" />
                +91 9272302356
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                awdhalshreyas@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaGithub className="text-cyan-400" />
                github.com/shreyas-awdal-7
              </p>

              <p className="flex items-center gap-3">
                <FaLinkedin className="text-cyan-400" />
                linkedin.com/in/shreyasawdhal
              </p>

            </div>

          </div>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none"
            ></textarea>

            <button className="bg-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-600 duration-300">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;
import {
  Mail,
  MapPin,
  Copy,
  Download,
  Send,
  ArrowUp,
} from "lucide-react";
import {
    FaGithub,
  FaLinkedin
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-100"
    >
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300 blur-[150px] opacity-30" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-sky-200 blur-[170px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-8 pt-20 pb-20">

        <div className="mb-12">

          <span
            className="
              inline-block
              px-4
              py-1.5
              rounded-full
              bg-white/70
              backdrop-blur-lg
              border
              border-blue-100
              text-blue-500
              text-xs
              font-semibold
              tracking-[0.2em]
            "
          >
            CONTACT
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Let's build something reliable
          </h2>

          <p className="mt-4 text-gray-500">
            Open to Full Stack Developer, Software Engineer, QA Engineer,
            and SDET roles.
          </p>

        </div>


        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-2 gap-6">


          <div
            className="
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              border
              border-white
              shadow-sm
              p-7
              hover:shadow-lg
              transition-all
              duration-500
            "
          >

            {/* EMAIL */}

            <div className="flex items-center gap-4 mb-5">

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-cyan-100
                  flex
                  items-center
                  justify-center
                "
              >
                <Mail
                  size={18}
                  className="text-slate-700"
                />
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Email
                </p>

                <p className="text-sm font-medium text-slate-800">
                  juhig8113@gmail.com
                </p>
              </div>

            </div>


            {/* LOCATION */}

            <div className="flex items-center gap-4 mb-5">

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-cyan-100
                  flex
                  items-center
                  justify-center
                "
              >
                <MapPin
                  size={18}
                  className="text-slate-700"
                />
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Location
                </p>

                <p className="text-sm font-medium text-slate-800">
                  Noida, India
                </p>
              </div>

            </div>


            {/* LINKEDIN */}

            <a
              href="www.linkedin.com/in/juhi-gupta-3921593a4"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-4
                mb-5
                group
              "
            >

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-cyan-100
                  flex
                  items-center
                  justify-center
                  group-hover:bg-blue-500
                  transition-all
                  duration-700
                "
              >
                <FaLinkedin
                  size={18}
                  className="
                    text-slate-700
                    group-hover:text-white
                    transition-all
                    duration-700
                  "
                />
              </div>

              <p className="text-sm text-slate-800">
                linkedin.com/in/juhi-gupta
              </p>

            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/Coderjuhi"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-4
                mb-7
                group
              "
            >

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-cyan-100
                  flex
                  items-center
                  justify-center
                  group-hover:bg-blue-500
                  transition-all
                  duration-700
                "
              >
                <FaGithub
                  size={18}
                  className="
                    text-slate-700
                    group-hover:text-white
                    transition-all
                    duration-700
                  "
                />
              </div>

              <p className="text-sm text-slate-800">
                github.com/Coderjuhi
              </p>

            </a>


            {/* ACTION BUTTONS */}

            <div className="flex flex-wrap gap-3">

              {/* EMAIL */}

              <a
                href="mailto:juhig8113@gmail.com"
                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-sky-400
                  text-white
                  text-sm
                  font-medium
                  shadow-sm
                  hover:shadow-md
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                <Mail size={16} />
                Email Me
              </a>


              {/* COPY EMAIL */}

              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    "juhig8113@gmail.com"
                  )
                }
                className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-full
                  bg-white
                  border
                  border-gray-200
                  text-slate-700
                  text-sm
                  font-medium
                  hover:border-blue-300
                  hover:text-blue-500
                  transition-all
                  duration-300
                "
              >
                <Copy size={16} />
                Copy Email
              </button>


              {/* RESUME */}

              <a
                href="/resume.pdf"
                download
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  text-slate-700
                  text-sm
                  font-medium
                  hover:text-blue-500
                  transition
                "
              >
                <Download size={16} />
                Resume
              </a>

            </div>

          </div>


          {/* ================= RIGHT CARD ================= */}

          <div
            className="
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              border
              border-white
              shadow-sm
              p-7
              hover:shadow-lg
              transition-all
              duration-500
            "
          >

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >

              {/* NAME + EMAIL */}

              <div className="grid sm:grid-cols-2 gap-4">

                <div>

                  <label className="block text-sm font-medium text-slate-800 mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-full
                      border
                      border-gray-200
                      bg-white
                      text-sm
                      outline-none
                      focus:border-blue-400
                      focus:ring-2
                      focus:ring-blue-100
                      transition
                    "
                  />

                </div>


                <div>

                  <label className="block text-sm font-medium text-slate-800 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-full
                      border
                      border-gray-200
                      bg-white
                      text-sm
                      outline-none
                      focus:border-blue-400
                      focus:ring-2
                      focus:ring-blue-100
                      transition
                    "
                  />

                </div>

              </div>


              {/* MESSAGE */}

              <div className="mt-4">

                <label className="block text-sm font-medium text-slate-800 mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about the role or project..."
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    text-sm
                    outline-none
                    resize-none
                    focus:border-blue-400
                    focus:ring-2
                    focus:ring-blue-100
                    transition
                  "
                />

              </div>


              {/* SEND BUTTON */}

              <button
                type="submit"
                className="
                  mt-4
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-sky-400
                  text-white
                  text-sm
                  font-medium
                  shadow-sm
                  hover:shadow-md
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                <Send size={16} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>


      {/* ================= FOOTER ================= */}

      <footer
        className="
          relative
          border-t
          border-gray-200/70
          py-10
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          {/* LEFT */}

          <p className="text-sm text-gray-500">
            Designed & Developed by{" "}
            <span className="font-medium text-slate-700">
              Juhi Gupta
            </span>
          </p>


          {/* SOCIAL ICONS */}

          <div className="flex gap-3">

            <a
              href="https://github.com/Coderjuhi"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10
                h-10
                rounded-full
                border
                border-gray-200
                bg-white
                flex
                items-center
                justify-center
                hover:bg-blue-500
                hover:text-white
                transition-all
                duration-500
              "
            >
              <FaGithub size={16} />
            </a>

            <a
              href="www.linkedin.com/in/juhi-gupta-3921593a4"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10
                h-10
                rounded-full
                border
                border-gray-200
                bg-white
                flex
                items-center
                justify-center
                hover:bg-blue-500
                hover:text-white
                transition-all
                duration-500
              "
            >
              <FaLinkedin size={16} />
            </a>

          </div>


          {/* COPYRIGHT */}

          <p className="text-sm text-gray-500">
            © 2026 Juhi Gupta
          </p>

        </div>

      </footer>


      {/* SCROLL TO TOP */}

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          fixed
          bottom-6
          right-6
          w-12
          h-12
          rounded-full
          bg-white
          border
          border-gray-200
          shadow-sm
          flex
          items-center
          justify-center
          text-slate-700
          hover:bg-blue-500
          hover:text-white
          transition-all
          duration-500
        "
      >
        <ArrowUp size={18} />
      </button>

    </section>
  );
}
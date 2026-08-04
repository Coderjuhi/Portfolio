import { GraduationCap } from "lucide-react";

const education = [
  {

    degree: "Bachelor of Computer Applications",
    institute: "United Institute of Management (FUGS), Prayagraj",
    score: "80.87%",
  },
  {

    degree: "Class XII (PCM)",
    institute: "KNICE",
    score: "84%",
  },
  {

    degree: "Class X",
    institute: "KNICE",
    score: "92%",
  },
];
const Education = () => {
  return (
    <>
      <section
        id="education"
        className="relative min-h-[50rem] overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-100"
      >
        {/* Blur Background */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300 blur-[150px] opacity-40"></div>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200 blur-[170px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-8 pt-20 items-center">

          <span className="inline-block px-2 py-1 font-semibold rounded-full bg-white/60 backdrop-blur-lg border border-gray-300 text-blue-500 text-sm tracking-widest shadow">
            EDUCATION
          </span>
          <h1 className="mt-5 text-5xl text-black font-bold max-w-2xl">A consistent academic foundation</h1>
          <p className="mt-5  text-gray-400  max-w-2xl">Strong fundamentals in computer applications, mathematics, and problem solving.</p>

          <div className="relative mt-7">

            {/* Vertical Line */}
            <div className="absolute left-5 top-0 h-full w-[2px] bg-blue-200 "></div>

            <div className="space-y-14">
              {education.map((item, index) => (

                <div className="relative flex items-center  overflow-hidden
              transition-all
              duration-500
              hover:-translate-y-3">

                  {/* Timeline Icon */}
                  <div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
                    <GraduationCap size={18} />
                  </div>

                  <div className="ml-16 flex w-full justify-between rounded-2xl border border-white/50 bg-white p-7 shadow-lg">
                    <div>
                      <h1 className="text-xl font-semibold text-black">
                        {item.degree}
                      </h1>
                      <p className="text-gray-500">
                        {item.institute}
                      </p>
                    </div>

                    <div className="text-3xl font-bold text-blue-600">
                      {item.score}
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>


    </>
  )
}

export default Education;
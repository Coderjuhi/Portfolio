
export default function Skills() {

    return(
        <>
              <section
        id="education"
        className="relative min-h-[55rem] overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-100"
      >
        {/* Blur Background */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300 blur-[150px] opacity-40"></div>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200 blur-[170px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-8 pt-20 items-center">

          <span className="inline-block px-2 py-1 font-semibold rounded-full bg-white/60 backdrop-blur-lg border border-gray-300 text-blue-500 text-sm tracking-widest shadow">
            Skills
          </span>
          <h1 className="mt-5 text-5xl text-black font-bold max-w-2xl">Development and quality, side by side</h1>
          <p className="mt-5  text-gray-400  max-w-2xl">A toolkit that spans the full MERN stack plus the manual and automation testing stack used to validate it.</p>




        </div>
        </section>
        </>
    )

}
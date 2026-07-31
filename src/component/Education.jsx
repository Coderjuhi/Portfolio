

const Education = () => {
    return (
        <>
            <section
                id="home"
                className="relative min-h-[55rem] overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-100"
            >
                {/* Blur Background */}
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300 blur-[150px] opacity-40"></div>

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200 blur-[170px] opacity-40"></div>

                <div className="max-w-7xl mx-auto px-8 pt-20 items-center">

                    <span className="inline-block px-2 py-1 font-semibold rounded-full bg-white/60 backdrop-blur-lg border border-gray-300 text-blue-500 text-sm tracking-widest shadow">
                        EDUCATION
                    </span>
                </div>
            </section>


        </>
    )
}

export default Education;
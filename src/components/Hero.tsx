function Hero() {
    return (
        <section className="flex justify-center px-6 sm:px-20 xl:px-0 w-full">
            <div className="glass-card bg-zinc-50/60 mt-10 w-full max-w-7xl h-[80vh] p-8 sm:p-12 lg:p-20 rounded-2xl">
                <div className="h-full flex flex-col justify-center space-y-8 items-center md:items-start">
                    <h1 className="text-5xl jetbrains-mono-bold text-zinc-800">Alexandru Bunea</h1>

                    <h2 className="text-2xl text-zinc-700 poppins-light">
                        Software Developer – Web & Embedded Systems
                    </h2>

                    <blockquote className="text-lg text-zinc-800 max-w-3xl leading-relaxed poppins-regular-italic">
                        Bridging the gap between software and hardware to build robust, high-performance solutions.
                    </blockquote>

                    <div className="pt-8">
                        <a href="#projects"
                            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-600 
                            hover:from-emerald-600 hover:to-teal-700 px-8 py-4 rounded-full text-white 
                            poppins-bold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                            <span>View My Work</span>
                            <div className="w-0 group-hover:w-2 h-0.5 bg-white rounded-full transition-all duration-300"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
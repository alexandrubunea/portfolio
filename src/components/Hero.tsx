function Hero() {
    return (
        <section className="flex justify-center min-h-screen px-6 sm:px-20 xl:px-0 overflow-hidden">
            <div className="glass-card bg-zinc-50/60 mt-12 sm:mt-20 w-full max-w-7xl h-[80vh] p-8 sm:p-12 lg:p-20">
                <div className="h-full flex flex-col justify-center space-y-8 items-center md:items-start">
                    <h1 className="text-5xl jetbrains-mono-bold text-zinc-800">Alexandru Bunea</h1>

                    <h2 className="text-2xl text-zinc-700 poppins-light">
                        Software Developer – Web & Embedded Systems
                    </h2>

                    <blockquote className="text-lg text-zinc-800 max-w-3xl leading-relaxed poppins-regular-italic">
                        Bridging the gap between software and hardware to build robust, high-performance solutions.
                    </blockquote>

                    <div className="pt-8">
                        <button className="shiny-black-glass-button px-8 py-4 rounded-full poppins-bold text-lg hover:cursor-pointer">
                            View My Work
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
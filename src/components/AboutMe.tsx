import { ArrowsOutSimpleIcon, MinusIcon, QuestionIcon, StarIcon, XIcon } from "@phosphor-icons/react";
import ProfilePhoto from '../assets/profile_photo.png';

const TECHNICAL_SKILLS = [
    "C",
    "C++",
    "C#",
    "Python",
    "PHP",
    ".NET",
    "Avalonia",
    "Laravel",
    "JavaScript",
    "React",
    "TailwindCSS",
    "Express.js",
    "Flask",
    "HTML",
    "CSS",
    "Embedded Systems (ESP32, Raspberry Pi)",
    "Computer Networking Basics",
    "Database Management",
    "APIs & Web Services",
    "Cryptography Basics",
    "Linux"
];

function AboutMe() {
    return (
        <section id="aboutme" className="flex justify-center px-6 sm:px-20 xl:px-0">
            <div className="glass-card outline-zinc-800 outline-1 bg-zinc-50/90 rounded-2xl w-full max-w-7xl min-h-[80vh] mx-auto shadow-2xl overflow-hidden">
                <div className="flex justify-between items-center bg-gradient-to-r from-slate-100 to-slate-50 rounded-t-3xl h-14 border-b border-slate-200/70 px-4 sm:px-6">
                    <div className="flex items-center space-x-3">
                        <button
                            className="group w-4 h-4 rounded-full bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 transition-all duration-200 flex items-center justify-center shadow-sm">
                            <XIcon size={8} weight="bold" className="text-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button
                            className="group w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 transition-all duration-200 flex items-center justify-center shadow-sm">
                            <MinusIcon size={8} weight="bold" className="text-amber-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button
                            className="group w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600 transition-all duration-200 flex items-center justify-center shadow-sm">
                            <ArrowsOutSimpleIcon size={8} weight="bold" className="text-emerald-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="bg-white/50 backdrop-blur-sm rounded-lg px-4 py-1.5 border border-slate-200/50">
                            <h5 className="font-mono font-bold text-sm text-slate-700">about_me.txt</h5>
                        </div>
                    </div>

                    <button className="w-8 h-8 rounded-full bg-slate-200/50 hover:bg-slate-300/50 transition-colors duration-200 flex items-center justify-center">
                        <QuestionIcon size={14} weight="bold" className="text-slate-600" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-10">
                    <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                        <h1 className="jetbrains-mono-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-zinc-800 tracking-wider">
                            About me
                            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                        </h1>

                        <div className="space-y-4">
                            <p className="poppins-light text-sm sm:text-base lg:text-md text-justify leading-relaxed text-zinc-700">
                                Versatile Computer Science graduate with hands-on experience designing and building end-to-end solutions. My expertise bridges the gap between software and hardware, with proven skills in full-stack web development (React, Laravel, Express) and embedded systems programming (ESP-IDF, FreeRTOS).
                            </p>

                            <p className="poppins-light text-sm sm:text-base lg:text-md text-justify leading-relaxed text-zinc-700">
                                I thrive on tackling complex, real-world problems, from creating secure IoT architectures to developing scalable community platforms and cross-platform desktop applications. I am passionate about low-level implementation and am always eager to learn and apply new technologies to deliver robust, high-performance solutions.
                            </p>

                            <p className="poppins-light text-sm sm:text-base lg:text-md text-justify leading-relaxed text-zinc-700">
                                I enjoy learning and exploring new things, diving into topics that spark my curiosity. I like reflecting on ideas, understanding people and the world around me, and thinking critically about different perspectives. I also enjoy creative hobbies that let me experiment, play with concepts, and just let my mind wander.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="jetbrains-mono-bold text-lg text-slate-800">Technical Skills</h3>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {TECHNICAL_SKILLS.map((skill, index) => (
                                    <div
                                        key={`${index}-${skill}`}
                                        className="group relative bg-gradient-to-br from-emerald-400/80 to-teal-500/80 backdrop-blur-sm 
                                                         px-3 py-2 rounded-xl border border-emerald-300/50 shadow-sm
                                                         hover:from-emerald-500/90 hover:to-teal-600/90 hover:shadow-md hover:-translate-y-0.5
                                                         transition-all duration-200">
                                        <div className="flex items-center space-x-2">
                                            <StarIcon
                                                weight="fill"
                                                className="text-amber-500 group-hover:text-amber-200 transition-colors duration-200"
                                                size={14}
                                            />
                                            <p className="poppins-bold text-xs sm:text-sm text-white uppercase tracking-wide">
                                                {skill}
                                            </p>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-start lg:items-center order-1 lg:order-2 pt-4 lg:pt-0">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <img
                                className="relative rounded-3xl w-64 sm:w-80 lg:w-96 drop-shadow-2xl ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300 transform group-hover:scale-[1.02]"
                                src={ProfilePhoto}
                                alt="Picture of myself"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
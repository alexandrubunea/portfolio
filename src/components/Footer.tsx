import {
    GithubLogoIcon,
    LinkedinLogoIcon,
    EnvelopeIcon,
    HeartIcon,
    CodeIcon,
    ArrowUpIcon
} from "@phosphor-icons/react";

function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const quickLinks = [
        { name: 'Home', href: '#start' },
        { name: 'About', href: '#aboutme' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/alexandrubunea',
            icon: GithubLogoIcon,
            color: 'hover:text-gray-300'
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/alexandruwbunea/',
            icon: LinkedinLogoIcon,
            color: 'hover:text-blue-400'
        },
        {
            name: 'Email',
            href: 'mailto:alexandrubunea03.contact@gmail.com',
            icon: EnvelopeIcon,
            color: 'hover:text-emerald-400'
        }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-100 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-400 rounded-full blur-2xl"></div>
            </div>

            <div className="relative flex justify-center px-6 sm:px-20 xl:px-0">
                <div className="w-full max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">

                        <div className="lg:col-span-2 space-y-4">
                            <div className="space-y-2">
                                <h3 className="jetbrains-mono-bold text-2xl text-white">
                                    Alexandru Bunea
                                </h3>
                                <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                            </div>
                            <p className="poppins-light text-zinc-300 leading-relaxed max-w-md">
                                Full-stack developer passionate about creating innovative solutions that bridge
                                software and hardware. Always exploring new technologies and pushing boundaries.
                            </p>
                            <div className="flex items-center space-x-2 text-sm poppins-light text-zinc-400">
                                <CodeIcon size={16} weight="fill" />
                                <span>Built with React & Tailwind CSS</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="jetbrains-mono-bold text-lg text-white">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="poppins-regular text-zinc-300 hover:text-emerald-400 
                                                     transition-colors duration-200 flex items-center group">
                                            <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 
                                                           transition-all duration-200 mr-0 group-hover:mr-2"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="jetbrains-mono-bold text-lg text-white">Let's Connect</h4>
                            <p className="poppins-light text-zinc-300 text-sm">
                                Follow my work and connect with me on these platforms.
                            </p>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target={social.name !== 'Email' ? '_blank' : undefined}
                                        rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                        className={`group p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50 
                                                  hover:border-zinc-600 hover:bg-zinc-700/50 transition-all duration-200 
                                                  ${social.color}`}
                                        aria-label={social.name}>
                                        <social.icon
                                            size={20}
                                            weight="fill"
                                            className="transition-transform duration-200 group-hover:scale-110" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

                    <div className="flex flex-col md:flex-row justify-between items-center py-6 space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 text-sm poppins-light text-zinc-400">
                            <span>© {currentYear} Alexandru Bunea. Made with</span>
                            <HeartIcon size={14} weight="fill" className="text-red-400 animate-pulse" />
                        </div>

                        <div className="flex items-center space-x-6">
                            <p className="text-sm poppins-light text-zinc-400">
                                Thanks for visiting!
                            </p>
                            <button
                                onClick={scrollToTop}
                                className="group p-2 bg-emerald-600/20 rounded-lg border border-emerald-500/30 
                                         hover:bg-emerald-600/30 hover:border-emerald-500/50 transition-all duration-200"
                                aria-label="Scroll to top">
                                <ArrowUpIcon
                                    size={16}
                                    weight="bold"
                                    className="text-emerald-400 group-hover:text-emerald-300 
                                             transition-all duration-200 group-hover:-translate-y-0.5 hover:cursor-pointer"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
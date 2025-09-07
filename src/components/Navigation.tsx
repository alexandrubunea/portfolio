import { GithubLogoIcon, LinkedinLogoIcon, List, X } from "@phosphor-icons/react";
import { useState } from "react";

function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="flex justify-center px-6 sm:px-20 xl:px-0 mt-5 sticky">
            <nav className="glass-card bg-zinc-50/60 backdrop-blur-sm border border-zinc-200/20 shadow-lg h-auto w-full px-5 max-w-7xl rounded-lg">

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-between items-center h-16">
                    <ul className="flex flex-row gap-x-3 items-center text-2xl">
                        <li>
                            <a href="https://www.github.com/alexandrubunea/" target="_blank" aria-label="GitHub Profile">
                                <GithubLogoIcon
                                    className="p-2 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300"
                                    weight="fill"
                                    size={40}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/alexandruwbunea/" target="_blank" aria-label="LinkedIn Profile">
                                <LinkedinLogoIcon
                                    className="p-2 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300"
                                    weight="fill"
                                    size={40}
                                />
                            </a>
                        </li>
                    </ul>

                    <ul className="flex flex-row gap-x-3 items-center poppins-light">
                        <li>
                            <a className="text-md p-3 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300" href="#start">
                                Start
                            </a>
                        </li>
                        <li>
                            <a className="text-md p-3 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300" href="#aboutme">
                                About me
                            </a>
                        </li>
                        <li>
                            <a className="text-md p-3 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300" href="#skills">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a className="text-md p-3 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300" href="#projects">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a className="text-md p-3 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    {/* Mobile Header */}
                    <div className="flex justify-between items-center h-16">
                        <ul className="flex flex-row gap-x-3 items-center text-2xl">
                            <li>
                                <a href="#" aria-label="GitHub Profile">
                                    <GithubLogoIcon
                                        className="p-2 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300"
                                        weight="fill"
                                        size={32}
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="LinkedIn Profile">
                                    <LinkedinLogoIcon
                                        className="p-2 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300"
                                        weight="fill"
                                        size={32}
                                    />
                                </a>
                            </li>
                        </ul>

                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300"
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
                            {isMobileMenuOpen ? (
                                <X size={24} weight="bold" />
                            ) : (
                                <List size={24} weight="bold" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <ul className="flex flex-col py-4 border-t border-zinc-200/30 poppins-light">
                            <li>
                                <a
                                    className="block text-md p-3 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300"
                                    href="#start"
                                    onClick={closeMobileMenu}>
                                    Start
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block text-md p-3 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300"
                                    href="#aboutme"
                                    onClick={closeMobileMenu}>
                                    About me
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block text-md p-3 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300"
                                    href="#skills"
                                    onClick={closeMobileMenu}>
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block text-md p-3 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300"
                                    href="#projects"
                                    onClick={closeMobileMenu}>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block text-md p-3 hover:bg-zinc-900/80 hover:text-white rounded-sm transition-colors duration-300"
                                    href="#contact"
                                    onClick={closeMobileMenu}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
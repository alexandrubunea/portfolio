import { GithubLogoIcon, LinkedinLogoIcon, List, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 0);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dynamic classes based on scroll state
    const navClasses = isScrolled
        ? "glass-card bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/30 shadow-lg text-zinc-50 top-0 rounded-lg rounded rounded-tl-none rounded-tr-none"
        : "glass-card bg-zinc-50/60 backdrop-blur-sm border border-zinc-200/20 shadow-lg text-zinc-900 top-4 rounded-lg";

    const linkHoverClasses = isScrolled
        ? "hover:bg-zinc-50/20 hover:text-zinc-50"
        : "hover:bg-zinc-900/80 hover:text-white";

    const iconHoverClasses = isScrolled
        ? "hover:bg-zinc-50/20 hover:text-zinc-50"
        : "hover:bg-zinc-900/80 hover:text-white";

    const mobileMenuBorderClasses = isScrolled
        ? "border-zinc-700/30"
        : "border-zinc-200/30";

    return (
        <div className="flex justify-center px-6 sm:px-20 xl:px-0 sticky top-0 z-50">
            <nav className={`${navClasses} h-auto w-full px-5 max-w-7xl transition-all duration-300`}>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-between items-center h-16">
                    <ul className="flex flex-row gap-x-3 items-center text-2xl">
                        <li>
                            <a href="https://www.github.com/alexandrubunea/" target="_blank" aria-label="GitHub Profile">
                                <GithubLogoIcon
                                    className={`p-2 ${iconHoverClasses} rounded-sm transition-colors duration-300`}
                                    weight="fill"
                                    size={40}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/alexandruwbunea/" target="_blank" aria-label="LinkedIn Profile">
                                <LinkedinLogoIcon
                                    className={`p-2 ${iconHoverClasses} rounded-sm transition-colors duration-300`}
                                    weight="fill"
                                    size={40}
                                />
                            </a>
                        </li>
                    </ul>

                    <ul className="flex flex-row gap-x-3 items-center poppins-light">
                        <li>
                            <a className={`text-md p-3 ${linkHoverClasses} rounded-sm transition-colors duration-300`} href="#start">
                                Start
                            </a>
                        </li>
                        <li>
                            <a className={`text-md p-3 ${linkHoverClasses} rounded-sm transition-colors duration-300`} href="#aboutme">
                                About me
                            </a>
                        </li>
                        <li>
                            <a className={`text-md p-3 ${linkHoverClasses} rounded-sm transition-colors duration-300`} href="#skills">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a className={`text-md p-3 ${linkHoverClasses} rounded-sm transition-colors duration-300`} href="#projects">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a className={`text-md p-3 ${linkHoverClasses} rounded-sm transition-colors duration-300`} href="#contact">
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
                                <a href="https://www.github.com/alexandrubunea/" target="_blank" aria-label="GitHub Profile">
                                    <GithubLogoIcon
                                        className={`p-2 ${iconHoverClasses} rounded-sm transition-colors duration-300`}
                                        weight="fill"
                                        size={32}
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/alexandruwbunea/" target="_blank" aria-label="LinkedIn Profile">
                                    <LinkedinLogoIcon
                                        className={`p-2 ${iconHoverClasses} rounded-sm transition-colors duration-300`}
                                        weight="fill"
                                        size={32}
                                    />
                                </a>
                            </li>
                        </ul>

                        <button
                            onClick={toggleMobileMenu}
                            className={`p-2 ${iconHoverClasses} rounded-sm transition-colors duration-300`}
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
                        <ul className={`flex flex-col py-4 border-t ${mobileMenuBorderClasses} poppins-light`}>
                            <li>
                                <a
                                    className={`block text-md p-3 ${linkHoverClasses} rounded-sm transition-colors duration-300`}
                                    href="#start"
                                    onClick={closeMobileMenu}>
                                    Start
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`block text-md p-3 ${linkHoverClasses} rounded-sm transition-colors duration-300`}
                                    href="#aboutme"
                                    onClick={closeMobileMenu}>
                                    About me
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`block text-md p-3 ${linkHoverClasses} rounded-sm transition-colors duration-300`}
                                    href="#skills"
                                    onClick={closeMobileMenu}>
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`block text-md p-3 ${linkHoverClasses} rounded-sm transition-colors duration-300`}
                                    href="#projects"
                                    onClick={closeMobileMenu}>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`block text-md p-3 ${linkHoverClasses} rounded-sm transition-colors duration-300`}
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
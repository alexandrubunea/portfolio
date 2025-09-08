import { useState, useEffect } from 'react';
import { GithubLogoIcon, StarIcon, GitForkIcon, CalendarIcon, LinkIcon } from "@phosphor-icons/react";

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    updated_at: string;
    topics: string[];
    homepage?: string;
}

function Projects() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await fetch('https://api.github.com/users/alexandrubunea/repos?sort=updated&per_page=4');
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                setRepositories(data);
            } catch (err) {
                setError('Failed to load projects');
                console.error('Error fetching repositories:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchRepositories();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const getLanguageColor = (language: string) => {
        const colors: { [key: string]: string } = {
            'JavaScript': 'bg-yellow-400',
            'TypeScript': 'bg-blue-500',
            'Python': 'bg-green-500',
            'C++': 'bg-blue-600',
            'C': 'bg-gray-600',
            'C#': 'bg-purple-500',
            'PHP': 'bg-indigo-500',
            'HTML': 'bg-orange-500',
            'CSS': 'bg-blue-400',
            'Java': 'bg-red-500',
            'Rust': 'bg-orange-600',
            'Go': 'bg-cyan-500',
        };
        return colors[language] || 'bg-gray-500';
    };

    if (loading) {
        return (
            <section className="flex justify-center px-6 sm:px-20 xl:px-0">
                <div className="bg-zinc-50/80 w-full max-w-7xl min-h-[80vh] p-8 sm:p-12 lg:p-20 rounded-2xl">
                    <div className="h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="projects" className="flex justify-center px-6 sm:px-20 xl:px-0">
                <div className="bg-zinc-50/80 w-full max-w-7xl min-h-[80vh] p-8 sm:p-12 lg:p-20 rounded-2xl">
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-red-500 poppins-regular mb-4">{error}</p>
                            <p className="text-zinc-600 poppins-light">Please check back later or visit my GitHub directly.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="flex justify-center px-6 sm:px-20 xl:px-0">
            <div className="bg-zinc-50/80 w-full max-w-7xl min-h-[80vh] p-8 sm:p-12 lg:p-20 rounded-2xl">
                <div className="h-full space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="jetbrains-mono-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-zinc-800 tracking-wider">
                            Recent Projects
                            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto mt-2"></div>
                        </h1>
                        <p className="poppins-light text-sm sm:text-base lg:text-lg text-zinc-700 max-w-2xl mx-auto">
                            A showcase of my latest work, featuring full-stack applications, embedded systems, and innovative solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
                        {repositories.map((repo) => (
                            <div
                                key={repo.id}
                                className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-zinc-200/50 shadow-sm
                                         hover:shadow-lg hover:bg-white/80 hover:-translate-y-1 transition-all duration-300">
                                {/* Project Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="jetbrains-mono-bold text-lg text-zinc-800 group-hover:text-emerald-600 transition-colors duration-200">
                                        {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                    </h3>
                                    <div className="flex items-center space-x-2">
                                        {repo.homepage && (
                                            <a
                                                href={repo.homepage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-colors duration-200"
                                                aria-label="Live Demo">
                                                <LinkIcon size={16} weight="bold" />
                                            </a>
                                        )}
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors duration-200"
                                            aria-label="View on GitHub">
                                            <GithubLogoIcon size={16} weight="fill" />
                                        </a>
                                    </div>
                                </div>

                                {/* Project Description */}
                                <p className="poppins-light text-sm text-zinc-600 mb-4 line-clamp-2">
                                    {repo.description || 'No description available'}
                                </p>

                                {/* Project Stats */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-4">
                                        {repo.language && (
                                            <div className="flex items-center space-x-2">
                                                <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                                                <span className="poppins-regular text-xs text-zinc-600">{repo.language}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center space-x-1 text-zinc-500">
                                            <StarIcon size={14} weight="fill" />
                                            <span className="poppins-regular text-xs">{repo.stargazers_count}</span>
                                        </div>
                                        <div className="flex items-center space-x-1 text-zinc-500">
                                            <GitForkIcon size={14} weight="fill" />
                                            <span className="poppins-regular text-xs">{repo.forks_count}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-1 text-zinc-500">
                                        <CalendarIcon size={14} weight="fill" />
                                        <span className="poppins-regular text-xs">{formatDate(repo.updated_at)}</span>
                                    </div>
                                </div>

                                {/* Topics */}
                                {repo.topics && repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-1">
                                        {repo.topics.slice(0, 3).map((topic, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs poppins-regular">
                                                {topic}
                                            </span>
                                        ))}
                                        {repo.topics.length > 3 && (
                                            <span className="px-2 py-1 bg-zinc-100 text-zinc-500 rounded-full text-xs poppins-regular">
                                                +{repo.topics.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center pt-8">
                        <a
                            href="https://github.com/alexandrubunea"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-600 
                                     hover:from-emerald-600 hover:to-teal-700 px-8 py-4 rounded-full text-white 
                                     poppins-bold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                            <GithubLogoIcon size={20} weight="fill" />
                            <span>Explore More Projects</span>
                            <div className="w-0 group-hover:w-2 h-0.5 bg-white rounded-full transition-all duration-200"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
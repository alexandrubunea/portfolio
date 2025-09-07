import { useState } from 'react';
import {
    EnvelopeIcon,
    LinkedinLogoIcon,
    GithubLogoIcon,
    PaperPlaneIcon,
    UserIcon,
    ChatCircleIcon,
    CheckCircleIcon,
    WarningCircleIcon
} from "@phosphor-icons/react";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState<FormStatus>({
        type: 'idle',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus({ type: 'loading', message: 'Sending message...' });

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '7994ff87-ad94-49d9-a585-2058183752a8',
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    from_name: formData.name,
                    replyto: formData.email,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setFormStatus({
                    type: 'success',
                    message: 'Message sent successfully! I\'ll get back to you soon.'
                });
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or contact me directly via email.'
            });
        }

        // Clear status after 5 seconds
        setTimeout(() => {
            setFormStatus({ type: 'idle', message: '' });
        }, 5000);
    };

    const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

    return (
        <section className="flex justify-center px-6 sm:px-20 xl:px-0">
            <div className="glass-card bg-zinc-50/80 w-full max-w-7xl min-h-[80vh] p-8 sm:p-12 lg:p-20 rounded-2xl">
                <div className="h-full space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="jetbrains-mono-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-zinc-800 tracking-wider">
                            Let's Connect
                            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto mt-2"></div>
                        </h1>
                        <p className="poppins-light text-sm sm:text-base lg:text-lg text-zinc-700 max-w-2xl mx-auto">
                            Have a project in mind or just want to chat about technology? I'd love to hear from you!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h2 className="jetbrains-mono-bold text-xl text-zinc-800">Send a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="poppins-regular text-sm text-zinc-700 block">
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <UserIcon
                                            size={18}
                                            weight="regular"
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400"
                                        />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-white/70 border border-zinc-200 rounded-lg 
                                                     focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent
                                                     transition-all duration-200 poppins-regular text-sm"
                                            placeholder="John Doe" />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="poppins-regular text-sm text-zinc-700 block">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <EnvelopeIcon
                                            size={18}
                                            weight="regular"
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-white/70 border border-zinc-200 rounded-lg 
                                                     focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent
                                                     transition-all duration-200 poppins-regular text-sm"
                                            placeholder="john@example.com" />
                                    </div>
                                </div>

                                {/* Subject Input */}
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="poppins-regular text-sm text-zinc-700 block">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/70 border border-zinc-200 rounded-lg 
                                                 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent
                                                 transition-all duration-200 poppins-regular text-sm"
                                        placeholder="Project Collaboration"
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="poppins-regular text-sm text-zinc-700 block">
                                        Message
                                    </label>
                                    <div className="relative">
                                        <ChatCircleIcon
                                            size={18}
                                            weight="regular"
                                            className="absolute left-3 top-4 text-zinc-400" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full pl-10 pr-4 py-3 bg-white/70 border border-zinc-200 rounded-lg 
                                                     focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent
                                                     transition-all duration-200 poppins-regular text-sm resize-none"
                                            placeholder="Tell me about your project or just say hello!" />
                                    </div>
                                </div>

                                {/* Status Message */}
                                {formStatus.message && (
                                    <div className={`flex items-center space-x-2 p-3 rounded-lg ${formStatus.type === 'success' ? 'bg-green-100 text-green-700' :
                                        formStatus.type === 'error' ? 'bg-red-100 text-red-700' :
                                            'bg-blue-100 text-blue-700'
                                        }`}>
                                        {formStatus.type === 'success' && <CheckCircleIcon size={18} weight="fill" />}
                                        {formStatus.type === 'error' && <WarningCircleIcon size={18} weight="fill" />}
                                        {formStatus.type === 'loading' && (
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                                        )}
                                        <span className="poppins-regular text-sm">{formStatus.message}</span>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={!isFormValid || formStatus.type === 'loading'}
                                    className="group w-full bg-gradient-to-r from-emerald-500 to-teal-600 
                                             hover:from-emerald-600 hover:to-teal-700 disabled:from-zinc-400 disabled:to-zinc-500
                                             px-6 py-3 rounded-lg text-white poppins-bold
                                             transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5
                                             disabled:hover:shadow-none disabled:hover:translate-y-0 hover:cursor-pointer disabled:cursor-not-allowed
                                             flex items-center justify-center space-x-2">
                                    <PaperPlaneIcon
                                        size={18}
                                        weight="fill"
                                        className={`transition-transform duration-200 ${formStatus.type !== 'loading' ? 'group-hover:translate-x-1' : ''
                                            }`} />
                                    <span>
                                        {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                                    </span>
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <h2 className="jetbrains-mono-bold text-xl text-zinc-800">Get In Touch</h2>

                            <div className="grid grid-rows-3 gap-6 w-full">
                                {/* Email */}
                                <div className="group p-6 bg-white/60 rounded-xl border border-zinc-200/50 
                                     hover:bg-white/80 hover:shadow-md transition-all duration-200 
                                        flex flex-col h-full min-h-[120px]">
                                    <div className="flex items-center space-x-4 flex-1">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 
                                            rounded-lg flex items-center justify-center flex-shrink-0">
                                            <EnvelopeIcon size={20} weight="fill" className="text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="poppins-bold text-zinc-800 mb-1">Email</h3>
                                            <a
                                                href="mailto:alexandrubunea03.contact@gmail.com"
                                                className="poppins-regular text-emerald-600 hover:text-emerald-700 
                                                transition-colors break-all text-sm">
                                                alexandrubunea03.contact@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <div className="group p-6 bg-white/60 rounded-xl border border-zinc-200/50 
                                     hover:bg-white/80 hover:shadow-md transition-all duration-200 
                                        flex flex-col h-full min-h-[120px]">
                                    <div className="flex items-center space-x-4 flex-1">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 
                                            rounded-lg flex items-center justify-center flex-shrink-0">
                                            <LinkedinLogoIcon size={20} weight="fill" className="text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="poppins-bold text-zinc-800 mb-1">LinkedIn</h3>
                                            <a
                                                href="https://www.linkedin.com/in/alexandruwbunea/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="poppins-regular text-blue-600 hover:text-blue-700 
                                                transition-colors text-sm">
                                                /in/alexandruwbunea
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* GitHub */}
                                <div className="group p-6 bg-white/60 rounded-xl border border-zinc-200/50 
                                hover:bg-white/80 hover:shadow-md transition-all duration-200 
                                    flex flex-col h-full min-h-[120px]">
                                    <div className="flex items-center space-x-4 flex-1">
                                        <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 
                                            rounded-lg flex items-center justify-center flex-shrink-0">
                                            <GithubLogoIcon size={20} weight="fill" className="text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="poppins-bold text-zinc-800 mb-1">GitHub</h3>
                                            <a
                                                href="https://github.com/alexandrubunea"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="poppins-regular text-gray-600 hover:text-gray-700 
                             transition-colors text-sm">
                                                /alexandrubunea
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200/50">
                                <h3 className="poppins-bold text-emerald-800 mb-2">Quick Response</h3>
                                <p className="poppins-light text-sm text-emerald-700">
                                    I typically respond to emails within 24-48 hours. Messages sent through this form
                                    are delivered directly to my inbox.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
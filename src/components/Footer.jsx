import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="border-t border-[#5454546e] bg-gray-800 dark:bg-gray-800/50 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between  px-6 py-4">

                    {/* Left Text */}
                    <p className="text-sm text-gray-400">
                        © 2024 Your Company, Inc. All rights reserved.
                    </p>

                    {/* Right Icons */}
                    <div className="flex items-center gap-5">
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <FaFacebookF size={16} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <FaInstagram size={16} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <FaXTwitter size={16} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <FaGithub size={16} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <FaYoutube size={16} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer
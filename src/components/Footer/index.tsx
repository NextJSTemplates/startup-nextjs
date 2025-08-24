"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-gradient-to-b from-white via-gray-50/80 to-gray-100/90 pt-14 dark:from-gray-dark dark:via-dark/80 dark:to-gray-900/90 md:pt-18 lg:pt-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Logo & Description Section */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-10 max-w-[360px] lg:mb-14">
                <Link href="/" className="mb-6 inline-block group">
                  <Image
                    src="/images/logo/logo-2.svg"
                    alt="VideoEdit - Your Career Partner"
                    className="w-full dark:hidden transition-transform duration-300 group-hover:scale-105"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.svg"
                    alt="VideoEdit - Your Career Partner"
                    className="hidden w-full dark:block transition-transform duration-300 group-hover:scale-105"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Empowering Assistant Video Editors with comprehensive job opportunities, 
                  career guidance, and essential tools to succeed in the video editing industry.
                </p>
                
                {/* Enhanced Social Media Icons */}
                <div className="flex items-center space-x-3">
                  <a
                    href="https://twitter.com/assistantvideoeditor"
                    aria-label="Follow us on Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                    >
                      <path
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  
                  <a
                    href="https://linkedin.com/company/assistantvideoeditor"
                    aria-label="Connect on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-600/25"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 17 16"
                      className="fill-current transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                  
                  <a
                    href="https://youtube.com/@assistantvideoeditor"
                    aria-label="Watch on YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/25"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a>
                  
                  <a
                    href="https://github.com/assistantvideoeditor"
                    aria-label="View on GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-gray-700/25"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className="fill-current transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-10 lg:mb-12">
                <h2 className="mb-8 text-xl font-bold text-black dark:text-white relative group">
                  <span className="bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-600 group-hover:to-primary">
                    Quick Links
                  </span>
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary via-blue-500 to-blue-600 rounded-full transition-all duration-300 group-hover:w-16 group-hover:from-blue-600 group-hover:to-primary"></div>
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/jobs"
                      className="group inline-flex items-center text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 px-2 py-1 rounded-md -ml-2"
                    >
                      <span className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">→</span>
                      Browse Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guides"
                      className="group inline-flex items-center text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 px-2 py-1 rounded-md -ml-2"
                    >
                      <span className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">→</span>
                      Career Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tools"
                      className="group inline-flex items-center text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 px-2 py-1 rounded-md -ml-2"
                    >
                      <span className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">→</span>
                      Tools & Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="group inline-flex items-center text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 px-2 py-1 rounded-md -ml-2"
                    >
                      <span className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">→</span>
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal Section */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-10 lg:mb-12">
                <h2 className="mb-8 text-xl font-bold text-black dark:text-white relative group">
                  <span className="bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-600 group-hover:to-primary">
                    Legal
                  </span>
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary via-blue-500 to-blue-600 rounded-full transition-all duration-300 group-hover:w-16 group-hover:from-blue-600 group-hover:to-primary"></div>
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/privacy"
                      className="group inline-flex items-center text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 px-2 py-1 rounded-md -ml-2"
                    >
                      <span className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">→</span>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="group inline-flex items-center text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 px-2 py-1 rounded-md -ml-2"
                    >
                      <span className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">→</span>
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookies"
                      className="group inline-flex items-center text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 px-2 py-1 rounded-md -ml-2"
                    >
                      <span className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">→</span>
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support Section */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-10 lg:mb-12">
                <h2 className="mb-8 text-xl font-bold text-black dark:text-white relative group">
                  <span className="bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-600 group-hover:to-primary">
                    Support
                  </span>
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary via-blue-500 to-blue-600 rounded-full transition-all duration-300 group-hover:w-16 group-hover:from-blue-600 group-hover:to-primary"></div>
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 px-2 py-1 rounded-md -ml-2"
                    >
                      <span className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">→</span>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/help"
                      className="group inline-flex items-center text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 px-2 py-1 rounded-md -ml-2"
                    >
                      <span className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">→</span>
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="group inline-flex items-center text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 px-2 py-1 rounded-md -ml-2"
                    >
                      <span className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">→</span>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/feedback"
                      className="group inline-flex items-center text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-all hover:bg-gray-50 dark:hover:bg-gray-800/50 px-2 py-1 rounded-md -ml-2"
                    >
                      <span className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0">→</span>
                      Send Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enhanced Separator */}
          <div className="relative my-10">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 via-primary/40 via-gray-300 to-transparent"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-primary to-blue-600 rounded-full shadow-lg ring-2 ring-white dark:ring-gray-800"></div>
          </div>

          {/* Copyright Section */}
          <div className="text-center pb-6">
            <p className="text-base text-body-color dark:text-body-color-dark">
              © 2024{" "}
              <span className="font-semibold bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent">
                VideoEdit
              </span>
              . All rights reserved. Empowering Assistant Video Editors worldwide.
            </p>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute right-0 top-14 z-[-1] opacity-70">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-primary/30 via-blue-500/20 to-primary/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-primary/20 via-blue-500/15 to-primary/20 rounded-full blur-2xl animate-ping"></div>
            <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-500/25 to-primary/25 rounded-full blur-lg animate-bounce"></div>
          </div>
        </div>
        
        <div className="absolute bottom-24 left-0 z-[-1] opacity-70">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500/30 via-primary/20 to-blue-500/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-blue-500/20 via-primary/15 to-blue-500/20 rounded-full blur-2xl animate-ping"></div>
            <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-primary/25 to-blue-500/25 rounded-full blur-lg animate-bounce"></div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute left-1/4 top-1/2 z-[-1] opacity-40">
          <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-lg animate-pulse"></div>
        </div>
        
        <div className="absolute right-1/4 bottom-1/3 z-[-1] opacity-50">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500/25 to-primary/25 rounded-full blur-md animate-bounce"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

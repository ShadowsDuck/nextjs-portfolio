import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative" id="contact">
      {/* Blurry Background */}
      <div
        className="absolute top-10 left-[-600px] w-[570px] h-[264px] blur-[140px] z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(63, 233, 196, .6), transparent)",
        }}
      />
      <div
        className="absolute -bottom-10 right-[-600px] w-[570px] h-[264px] blur-[150px] z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(63, 100, 233, .6), transparent)",
        }}
      />

      <footer className="py-10 mx-auto container max-w-[54rem] text-neutral-300 px-4 md:px-0 md:py-20 z-50 opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
        <div className="border rounded-lg p-6 flex flex-col md:flex-row justify-between">
          {/* Logo Section */}
          <div className="flex flex-col justify-end mb-6 md:mb-0">
            <p className="font-avantgarde font-bold text-5xl">
              Tanaphat
              <br />
              Partoom.
            </p>
          </div>

          {/* Navigation and Contact Links */}
          <div className="flex flex-row space-x-12">
            {/* Explore Menu */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-neutral-300 mb-4 inter font-regular tracking-tight">
                Explore
              </h3>
              <ul className="flex flex-col text-neutral-500 inter font-light tracking-tight">
                <li>
                  <Link
                    href="/"
                    className="hover:underline hover:text-neutral-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="hover:underline hover:text-neutral-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:underline hover:text-neutral-300"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacts Section */}
            <div className="contacts">
              <h3 className="text-neutral-300 mb-4 inter font-regular tracking-tight">
                Let&apos;s Connect
              </h3>
              <ul className="flex flex-col text-neutral-500 inter font-light tracking-tight">
                <li>
                  <Link
                    href="mailto:tanaphat.partoom.work@gmail.com"
                    className="hover:underline hover:text-neutral-300"
                  >
                    Gmail
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/tanaphat.kung.7/"
                    className="hover:underline hover:text-neutral-300"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/ShadowsDuck"
                    className="hover:underline hover:text-neutral-300"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/0hmpixng/"
                    className="hover:underline hover:text-neutral-300"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-4 text-neutral-700 text-thin flex justify-between inter font-light tracking-tight">
          <p>© 2025</p>
          <p>Tanaphat Partoom.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

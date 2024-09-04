import React from "react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team",
  description: "",
  // other metadata
};

const TeamPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Team
          </h2>
        </div>

        <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
          <div className="items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
            <a href="#">
              <Image
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/images/team/CEO.jpeg"
                alt="Muhammed Umar"
                width={500}
                height={500}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Umar Imran</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                CEO & Full Stack developer
              </span>
              <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                Muhammed Umar, an enthusiastic student diving into the world of
                Web 3.0.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.linkedin.com/in/umar-imran-4b3889278"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    target="_blank"
                  >
                    <Image
                      src="/images/linkedin.png"
                      alt="Linkedin Icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
            <a href="#">
              <Image
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/images/team/Intern.jpeg"
                alt="ASHIKUR RAHMAN"
                width={500}
                height={500}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">ASHIKUR RAHMAN</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Web Developer Intern
              </span>
              <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                Quick learner with a keen eye for detail and a strong desire to
                contribute to creating user friendly websites.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.linkedin.com/in/ashik2005"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    target="_blank"
                  >
                    <Image
                      src="/images/linkedin.png"
                      alt="Linkedin Icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex">
            <a href="#">
              <Image
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="/images/team/ShanzaRafiq.jpg"
                alt="Shanza Rafiq"
                width={500}
                height={500}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Shanza Rafiq</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Graphics Designer
              </span>
              <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
                Passionate about creating visually appealing and impactful
                designs that help businesses and individuals stand out.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a
                    href="https://www.linkedin.com/in/sr-graphics-graphic-002306287"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    target="_blank"
                  >
                    <Image
                      src="/images/linkedin.png"
                      alt="Linkedin Icon"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;

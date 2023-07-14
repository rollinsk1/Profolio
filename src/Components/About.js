import React from "react";

/* this is a test
*/
export default function About() {
    return (
        <section id = "about">
            <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Kevin
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Welcome to my portfolio! I'm passionate about creating unique digital experiences that leave a lasting impact. With a strong background in web development, I specialize in building responsive and user-friendly websites. My creative approach combined with technical expertise allows me to craft visually stunning designs that engage and captivate users. Whether it's developing dynamic applications or designing intuitive interfaces, I strive to deliver exceptional results. Join me on this journey as we bring ideas to life and shape the digital landscape together. Let's create something extraordinary.
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact Me
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    )
}
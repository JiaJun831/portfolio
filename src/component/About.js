import React from "react";
import { Container } from "react-bootstrap";
import Skills from "./Skills";
// import NavHead from "./NavHead";
import Project from "./Project";


export default function About() {
    return (
        <>
            <section id="about">
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-center mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-white">
                            Hi, I'm Jun.
                            <br className="hidden lg:inline-block" />I'm a Software Developer.
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                            Laborum, voluptas natus?
                        </p>
                        <div className="flex place-content-center">
                            <a
                                href="#contact"
                                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Work With Me
                            </a>
                            <a
                                href="#projects"
                                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                Project I Have Done
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
        </>
    )
}
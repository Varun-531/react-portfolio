import { Button } from "../components/ui/button";
import SparklesText from "../components/magicui/sparkles-text";
import TypingAnimation from "../components/magicui/typing-animation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";
import { Link } from "react-router-dom";
import WordFadeIn from "../components/magicui/word-fade-in";
import Globe from "../components/magicui/globe";

const Home = () => {
  const scrollToEducation = () => {
    document.getElementById("Education").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="md:h-[45vw] h-[90vh] md:p-5 md:flex justify-between items-center md:mt-0 mt-20">
        <img
          src="assets/learning-concept-illustration.png"
          className="md:hidden md:w-[40vw]"
        />
        <div className="flex flex-col items-center justify-center md:w-[50vw] gap-3">
          <SparklesText
            className="text-center text-4xl md:text-6xl font-semibold"
            text="CH Gopi Varun"
          />
          <TypingAnimation
            className="text-xl font-semibold text-black dark:text-white"
            text="Full Stack Developer"
          />
          <div className="flex gap-5">
            <Button onClick={scrollToEducation}>
              <PiGraduationCap className="text-2xl" />
            </Button>
            <Button>
              <Link to="https://github.com/Varun-531/">
                <FaGithub className="text-2xl" />
              </Link>
            </Button>
          </div>
        </div>
        <img
          src="assets/learning-concept-illustration.png"
          className="hidden md:block md:w-[40vw]"
        />
      </section>
      <section id="Education" className=" md:h-[100vh] p-5 md:pl-[5vw]">
        <WordFadeIn words="Education" />
        <div className="md:flex  justify-around">
          <img
            src="assets\book-lover-concept-illustration.png"
            className="md:w-[40vw]"
            alt=""
          />
          <div className="flex flex-col md:gap-6 gap-2">
            <div>
              <h1 className="md:font-bold md:text-2xl font-semibold text-xl">
                Bachelor of Technology - CSE
              </h1>
              <h2 className="md:text-xl text-lg pl-5 font-semibold text-gray-400">
                Vishnu Institute of Technology (2021-2025)
              </h2>
              <h2 className="md:text-xl text-lg pl-5 font-semibold text-gray-400">
                Bhimavaram, AP
              </h2>
              <h2 className="pl-5 font-semibold text-lg md:text-xl">
                Current CGPA - 9.0
              </h2>
            </div>
            <div>
              <h1 className="md:font-bold md:text-2xl font-semibold text-xl">
                Higher Secondary - MPC
              </h1>
              <h2 className="md:text-xl text-lg pl-5 font-semibold text-gray-400">
                Aditya Junior Colleger (2019-2021)
              </h2>
              <h2 className="md:text-xl text-lg pl-5 font-semibold text-gray-400">
                Kakinada, AP
              </h2>
              <h2 className="pl-5 font-semibold text-lg md:text-xl">
                Percentage - 95%
              </h2>
            </div>
            <div>
              <h1 className="md:font-bold md:text-2xl font-semibold text-xl">
                Secondary
              </h1>
              <h2 className="md:text-xl text-lg pl-5 font-semibold text-gray-400">
                Sri Chaitanya School (2018-2019)
              </h2>
              <h2 className="md:text-xl text-lg pl-5 font-semibold text-gray-400">
                Kakinada, AP
              </h2>
              <h2 className="pl-5 font-semibold text-lg md:text-xl">
                GPA - 10GPA
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="relative flex h-full w-full  items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Varun
          </span>
          <Globe className="top-28" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
      </section> */}
    </div>
  );
};

export default Home;

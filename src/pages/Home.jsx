import { Button } from "../components/ui/button";
import SparklesText from "../components/magicui/sparkles-text";
import TypingAnimation from "../components/magicui/typing-animation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";
import { Link } from "react-router-dom";
import WordFadeIn from "../components/magicui/word-fade-in";

const Home = () => {
  const scrollToEducation = () => {
    document.getElementById("Education").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="md:h-[45vw] h-[90vh] md:p-5 md:flex justify-between items-center md:mt-0 mt-20">
        <img
          src="src/assets/learning-concept-illustration.png"
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
          src="src/assets/learning-concept-illustration.png"
          className="hidden md:block md:w-[40vw]"
        />
      </section>
      <section id="Education" className=" md:h-[100vh] p-5 md:pl-[5vw]">
        <WordFadeIn words="Education" />
        <div className="md:flex  justify-around">
          <img
            src="src\assets\book-lover-concept-illustration.png"
            className="md:w-[40vw]"
            alt=""
          />
          <div className="flex flex-col md:gap-6 gap-2">
            <div>
              <h1 className="md:font-bold md:text-3xl font-semibold text-xl">
                Bachelor of Technology - CSE
              </h1>
              <h2 className="md:text-xl text-lg pl-5 font-semibold text-gray-400">
                Vishnu Institute of Technology (2021-2025)
              </h2>
              <h2 className="md:text-xl text-lg pl-5 font-semibold text-gray-400">
                Bhimavaram, AP
              </h2>
              <h2 className="pl-5 font-semibold text-lg md:text-xl">
                Current CGPA: 9.0
              </h2>
            </div>
            <div>
              <h1 className="md:font-bold md:text-3xl font-semibold text-xl">
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
              <h1 className="md:font-bold md:text-3xl font-semibold text-xl">
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
    </div>
  );
};

export default Home;

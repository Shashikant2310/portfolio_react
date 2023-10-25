import React from "react";
import "./about.css";
import profile from "../../img/avatar.jpeg";

const About = () => {
  return (
    <div className="flex flex-col justify-center gap-4 h-screen items-center mt-6">
      <div className="flex justify-center items-end">
        <img
          src="https://shashikant2310.github.io/resume/images/myImg.jpg"
          alt=""
          srcset=""
          className="w-[100px] h-[100px] rounded-[50%] object-cover"
        />
      </div>
      <div className=" w-full md:w-[60%] px-6 flex text-center flex-col items-center justify-center">
        <h1 className=" font-normal text-3xl">About Me</h1>
        <p className=" my-5 text-lg">
          I'm a Full stack web Developer. I specialized in HTML, CSS,
          Tailwindcss, JavaScript, Reactjs, Git and Github, API, Nodejs,
          Express, and many more.
        </p>
        <p className=" hidden md:block font-light text-lg">
          I am skilled in creating user-friendly and responsive web applications
          using React and its ecosystem. I have experience working on a variety
          of projects, including building and maintaining single page
          applications, integrating with REST APIs, and implementing responsive
          design principles. I am also proficient in using tools such as npm,
          and Git for development and deployment. I am able to work effectively
          with cross-functional teams and am comfortable taking on new
          challenges and learning new technologies as needed.
        </p>
      </div>
    </div>
  );
};

export default About;

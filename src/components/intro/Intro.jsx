import React from "react";
import profile from "../../img/profile.png";
import { BsSun } from "react-icons/bs";
import { BiMoon, BiSolidDownload } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import resume from "../../img/Shashikant_Resume.pdf";

const Intro = ({ isDarkMode, onDarkMode }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex relative flex-col items-center md:items-start text-center md:text-start justify-between w-full h-full md:h-[60%] p-2 md:p-12">
            <h2 className=" text-3xl font-light">Hello, My name is</h2>
            <h1 className="text-[2.5rem] font-medium leading-[2.7rem]">
              Shashikant Malashetty
            </h1>
            <div className=" h-[50px] overflow-hidden">
              <div className="h-full animate-move">
                <div className="flex justify-center md:justify-start items-center h-[50px] text-3xl font-bold text-body-color">
                  Programmery
                </div>
                <div className="flex justify-center md:justify-start items-center h-[50px] text-3xl font-bold text-body-color">
                  Web Developer
                </div>
                <div className="flex justify-center md:justify-start items-center h-[50px] text-3xl font-bold text-body-color">
                  Frontend Developer
                </div>
                <div className="flex justify-center md:justify-start items-center h-[50px] text-3xl font-bold text-body-color">
                  UI/UX Designer
                </div>
              </div>
            </div>
            <p className=" hidden md:block text-lg">
              Passionate web developer with a creative flair, dedicated to
              crafting visually stunning and highly functional websites that
              deliver seamless user experiences
            </p>
            <div className="flex items-center">
              <a
                href={resume}
                download={resume}
                type="button"
                class="text-body-color dark:text-white hover:text-white border border-body-color hover:bg-body-color dark:hover:bg-black dark:border-white focus:ring-2 focus:outline-none focus:ring-body-color font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-3 mb-2 duration-200"
              >
                Resume
                <BiSolidDownload className="text-xl ml-2 " />
              </a>
              <a
                href="https://github.com/Shashikant2310?tab=repositories"
                target="_blank"
                className="flex gap-2 text-body-color hover:text-black dark:hover:text-white dark:text-white cursor-pointer"
              >
                <AiFillGithub className="text-2xl" />
                github
              </a>
            </div>
          </div>
          <svg
            className="h-8 w-8 hidden md:block absolute bottom-5 cursor-pointer"
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            stroke="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="scroll">
              <path
                id="Vector"
                d="M40.5 15L34.5 9L28.5 15"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M28.5 24L34.5 30L40.5 24"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="Group">
                <path
                  id="Vector_3"
                  d="M9 37.5H60"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <path
                id="Vector_4"
                d="M34.5 27V9"
                stroke-width="2.9895"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="Group_2">
                <path
                  id="Vector_5"
                  d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="flex-1 flex justify-center">
          <div
            onClick={onDarkMode}
            className="absolute top-4 right-6 md:top-8 md:right-16 cursor-pointer"
          >
            {isDarkMode ? (
              <p className="text-2xl text-gray-300">
                <BsSun />
              </p>
            ) : (
              <p className="text-2xl text-body-color">
                <BiMoon />
              </p>
            )}
          </div>
          <img
            src={profile}
            alt=""
            className=" w-10/12 md:w-8/12  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

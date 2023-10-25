import React, { useRef, useState } from "react";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = () => {
  const [sucessMsg, setSucessMsg] = useState(false);
  const [username, setUsername] = useState("");
  const [userSub, setUserSub] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const formRef = useRef();

  function handlSubmit(e) {
    e.preventDefault();

    if (username && userEmail && userSub && userMsg) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setSucessMsg(true);
            setTimeout(() => {
              setSucessMsg(false);
            }, 2000);
            console.log(result.text);
            setUsername("");
            setUserSub("");
            setUserEmail("");
            setUserMsg("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setErrMsg("Enter valid details");
      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    }
  }
  return (
    <div className="md:h-screen relative">
      <div className=" hidden md:block w-5 h-full bg-body-color absolute"></div>
      <div className="flex flex-col md:flex-row py-0 px-2 md:p-12">
        <div className="flex-1">
          <h1 className=" text-3xl md:text-6xl w-4/5">
            Let's discuss your project
          </h1>
          <div className="c-info">
            <div className="w-[70%] flex items-center my-8 md:my-12">
              <img src={phone} alt="" className=" w-7 h-7 mr-5" />
              +91 8390377439
            </div>
            <div className="w-[70%] flex items-center my-8 md:my-12">
              <img src={email} alt="" className=" w-7 h-7 mr-2" />
              shashikantmalashetty23@gmail.com
            </div>
            <div className="w-[70%] flex items-center my-8 md:my-12">
              <img src={address} className=" w-7 h-7 mr-5" alt="" />
              43 Villa Vihar Chandansar Rd Virar, Mumbai,Pune,401303,India
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <p className=" hidden md:block font-extralight">
            <b>What's your story?</b> Get in touch Always available for
            freelancing if the right project comes along me.
          </p>
          <form
            ref={formRef}
            onSubmit={handlSubmit}
            className=" md:mt-5 flex flex-wrap md:gap-4"
            action="#"
          >
            <input
              className="dark:bg-gray-800 w-2/5 md:w-1/2 h-10 md:h-12 mr-4 my-2 pl-2 border-b border-black text-sm outline-none"
              type="text"
              placeholder="Name"
              name="user_name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="dark:bg-gray-800 w-2/5 md:w-1/2 h-10 md:h-12 my-2 pl-2 border-b border-black text-sm outline-none"
              type="text"
              placeholder="Subject"
              name="user_subject"
              value={userSub}
              onChange={(e) => setUserSub(e.target.value)}
            />
            <input
              className="dark:bg-gray-800 w-full md:w-1/2 h-10 md:h-12 my-2 pl-2 border-b border-black text-sm outline-none"
              type="email"
              placeholder="Email"
              name="user_email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <textarea
              className="dark:bg-gray-800 w-full my-2 pl-2 border border-gray-400 dark:border-0 text-sm outline-none"
              name="message"
              rows="5"
              placeholder="Message"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
            ></textarea>
            <div>
              <div className="h-4 -mt-2">
                {errMsg && <p className="text-red-500">{errMsg}</p>}
              </div>
              <div className="flex gap-2 items-center mt-4">
                <button
                  class="text-white bg-body-color font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Send
                </button>
                {sucessMsg && (
                  <motion.p
                    initial={{ color: "white", opacity: 0 }}
                    whileInView={{ color: "green", opacity: 1 }}
                    transition={{
                      opacity: { duration: 1 },
                      duration: 1,
                      ease: "easeIn",
                    }}
                    className="flex gap-2 items-center"
                  >
                    <AiOutlineCheckCircle className="text-3xl" />
                    <span>Email send succesfully</span>
                  </motion.p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

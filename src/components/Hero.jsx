import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import avatar from "../assets/IMG_E4992-nen.jpg";

const Hero = ({ onContactClick }) => {
  return (
    <div className="container pb-20 overflow-hidden pt-20">
      <div className="grid grid-cols-1 md:grid-cols-5  md:gap-5 items-center w-full">
        <motion.div
          className="w-full  col-span-2 "
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex md:justify-end justify-center lg:mt-16 md:mr-10">
            <div className="flex md:w-[400px] w-[200px] h-auto justify-center items-center">
              <motion.img
                src={avatar}
                alt=""
                className="inline-block md:h-[400px] md:w-[400px] w-full h-[200px] rounded-full object-cover border-2 border-neutral-700 "
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full col-span-3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="md:text-6xl text-5xl font-extralight tracking-tight lg:mt-16 lg:text-6xl text-white">
              Triệu Tiến Đạt
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text md:text-4xl text-3xl tracking-tight text-transparent md:m-6 m-3">
              Frontend Developer
            </span>
            <p className="m-3 mt-0 w-full py-6 font-light md:tracking-tight text-justify text-sm ">
              {HERO_CONTENT}
            </p>
          </div>
          <div className=" flex md:justify-start justify-center items-center gap-5">
            <button className="cursor-pointer group relative flex gap-1.5 md:px-8 md:py-4 px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
              >
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Download">
                    {" "}
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      id="Vector"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Download CV
              <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                Download
              </div>
            </button>
            <button
              onClick={onContactClick}
              className="cursor-pointer group relative flex gap-1.5 md:px-8 md:py-4 px-6 py-4 bg-white text-black border-2 border-purple-500 rounded-3xl  transition font-semibold shadow-md"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

import {
  FaReact,
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiFigma,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiSass,
  SiTailwindcss,
  SiWebpack,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const icons = [
  { component: FaReact, color: "text-cyan-500" },
  { component: FaAngular, color: "text-red-600" },
  { component: FaBootstrap, color: "text-purple-600" },
  { component: FaCss3Alt, color: "text-blue-600" },
  { component: SiExpress, color: "text-gray-600" },
  { component: SiFigma, color: "text-pink-500" },
  { component: FaGitAlt, color: "text-red-600" },
  { component: FaHtml5, color: "text-orange-600" },
  { component: FaJsSquare, color: "text-yellow-500" },
  { component: SiMongodb, color: "text-green-600" },
  { component: SiMysql, color: "text-blue-600" },
  { component: FaNodeJs, color: "text-green-600" },
  { component: FaPhp, color: "text-indigo-600" },
  { component: SiPostman, color: "text-orange-600" },
  { component: SiSass, color: "text-pink-600" },
  { component: SiTailwindcss, color: "text-cyan-500" },
  { component: SiWebpack, color: "text-blue-600" },
];

const Technologies = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const iconVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <div
      className="border-b border-neutral-800 p-6 md:p-12 lg:p-24 h-screen"
      ref={ref}
    >
      <h1 className="my-10 md:my-16 lg:my-20 text-center text-2xl md:text-3xl lg:text-4xl">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 max-w-6xl mx-auto">
        {icons.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <motion.div
              key={index}
              className="rounded-2xl border-4 border-neutral-800 p-2 md:p-4"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={iconVariants}
              whileHover="hover"
            >
              <IconComponent
                className={`text-5xl md:text-6xl lg:text-7xl ${icon.color}`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;

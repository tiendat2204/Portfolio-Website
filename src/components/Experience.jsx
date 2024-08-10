import { EXPERIENCES } from "@/constants";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      className="border-b border-neutral-900 p-4 h-screen "
    >
      <motion.h1 variants={itemVariants} className="my-20 text-center text-4xl">
        Experience
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto container">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            transition={{ duration: 1 }}
            key={index}
            variants={itemVariants}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full max-w-2xl">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  variants={itemVariants}
                  className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

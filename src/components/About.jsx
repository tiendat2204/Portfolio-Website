import { ABOUT_TEXT } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import aboutImg from "../assets/z5706083198085_17ea9f2038ab706a83d8a30d099d35ab.jpg";
import aboutImg2 from "../assets/z5706083857872_1548e0c370cb1009c7abc42fa207bba8.jpg";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

const About = () => {
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
    <div className="flex place-content-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="border-b border-neutral-900 container pb-24"
      >
        <motion.h1
          variants={itemVariants}
          className="md:my-20 my-10 text-center text-4xl"
        transition={{ duration: 1 }}

        >
          About <span className="text-neutral-500">Me</span>{" "}
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-7">
          <motion.div
            variants={itemVariants}
        transition={{ duration: 1 }}

            className="w-full flex justify-center"
          >
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full max-w-2xl ring-2 ring-neutral-800 rounded-2xl"
            >
              <CarouselContent className="flex w-full">
                <CarouselItem className="w-full flex-shrink-0">
                  <img
                    src={aboutImg}
                    className="rounded-2xl w-full"
                    alt="About Image 1"
                  />
                </CarouselItem>
                <CarouselItem className="w-full flex-shrink-0">
                  <img
                    src={aboutImg2}
                    className="rounded-2xl w-full"
                    alt="About Image 2"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute -left-10 md:top-52 md:block hidden cursor-pointer" />
              <CarouselNext className="absolute -right-10 md:top-52 md:block hidden cursor-pointer" />
            </Carousel>
          </motion.div>
          <motion.div
            variants={itemVariants}
        transition={{ duration: 1 }}

            className="w-full flex justify-center"
          >
            <div className="max-w-xl">
              <p className="md:text-start text-justify tracking-tighter md:text-base text-base">{ABOUT_TEXT}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

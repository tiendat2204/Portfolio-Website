import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  const contactRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  console.log(containerRef);

  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
  };

  const { scrollYProgress } = useScroll({ container: containerRef });
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleDevToolsOpen = (e) => {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
      }
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    window.addEventListener("keydown", handleDevToolsOpen);
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("keydown", handleDevToolsOpen);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="h-screen w-full">
      <div className="relative bg-slate-950 overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] pointer-events-none"></div>
        <div className="absolute right-[-20%]  bottom-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] pointer-events-none"></div>


        <div
          ref={containerRef}
          className="text-white overflow-y-scroll h-full md:snap-y md:snap-mandatory"
          style={{ scrollBehavior: "smooth", height: "100vh" }}
        >
          <motion.div
            className="md:snap-always md:snap-center min-h-screen mb-8"
            initial="hidden"
            animate="visible"
          >
        <Navbar  scrollToTop={scrollToTop} />

            <Hero onContactClick={scrollToContact} />
          </motion.div>
          <motion.div
            className="md:snap-always md:snap-center min-h-screen mb-8"
            initial="hidden"
            animate="visible"
          >
            <About />
          </motion.div>
          <motion.div
            className="md:snap-always md:snap-center min-h-screen mb-8"
            initial="hidden"
            animate="visible"
          >
            <Technologies />
          </motion.div>
          <motion.div
            className="md:snap-always md:snap-center min-h-screen mb-8"
            initial="hidden"
            animate="visible"
          >
            <Experience />
          </motion.div>
          <motion.div
            className="md:snap-always md:snap-center min-h-screen mb-8"
            initial="hidden"
            animate="visible"
          >
            <Project />
          </motion.div>
          <motion.div
            className="md:snap-always md:snap-center mb-8"
            initial="hidden"
            animate="visible"
            ref={contactRef}
          >
            <Contact />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App;
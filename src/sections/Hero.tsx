import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-white to-gray-100 py-20 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Left Section (Text) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-0 md:w-1/2 md:pr-10"
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">Om Singh</span>
              <br />
              <span className="mt-2 block text-3xl md:text-4xl">
                Mobile App Developer
              </span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Passionate mobile app developer specializing in both iOS and
              Android. I build user-centric applications, focusing on clean
              architecture, performance, seamless AI implementation, and custom
              model development.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  View My Work
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="rounded-lg border border-gray-300 bg-transparent px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section (Image) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative md:w-1/2"
          >
            <div className="relative z-10">
              {/* Decorative elements */}
              <div className="absolute -left-6 -top-6 h-14 w-14 rounded-xl bg-blue-200 dark:bg-blue-800/50"></div>
              <div className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-indigo-200 dark:bg-indigo-800/50"></div>
              <div className="absolute -right-4 top-1/4 h-12 w-12 rounded-lg bg-purple-200 rotate-12 dark:bg-purple-800/50"></div>

              {/* Profile Image */}
              <div className="mx-auto max-w-sm">
                <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-gray-800 bg-gray-800 shadow-xl">
                  {/* Phone notch */}
                  <div className="absolute left-1/2 top-0 h-6 w-20 -translate-x-1/2 rounded-b-lg bg-gray-800"></div>

                  <div className="relative pt-6">
                    {/* ✅ Now using local image */}
                    <img
                      src="/assets/profile.png"
                      alt="Om Singh - Mobile App Developer"
                      className="aspect-[9/16] w-full object-cover"
                    />

                    {/* Overlay with text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                      <div className="absolute bottom-8 left-0 right-0 text-center text-white">
                        <p className="mb-2 text-xl font-semibold">Om Singh</p>
                        <p className="text-sm text-gray-300">
                          iOS & Android Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

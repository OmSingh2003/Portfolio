import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-12 text-center text-white dark:from-blue-700 dark:to-indigo-900">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold md:text-4xl"
          >
            Ready to Build Your Mobile App?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mb-8 max-w-2xl text-lg text-blue-100"
          >
            Let's collaborate to bring your app idea to life. I specialize in creating beautiful,
            responsive, and feature-rich mobile applications for both iOS and Android platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition-colors hover:bg-gray-100"
              >
                Get in Touch
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/projects"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

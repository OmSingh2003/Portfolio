import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  // Featured projects (selected mobile apps)
  const featuredProjects = [
    {
      id: 1,
      title: 'iChat',
      description: 'An AI-powered iOS chat app that translates messages in real-time using Google Translate API, enabling seamless multilingual communication.',
      image: 'https://i.imgur.com/m0rkgth.png',
      technologies: ['Swift', 'Vapor', 'Cloud Translation API', 'Firebase Cloud Messaging'],
      category: 'ios',
    },
    
    {
      id: 2,
      title: 'AgroBharat',
      description: 'AgroBharat is an AI-powered website that helps farmers optimize their farming practices with smart tools for crop monitoring, soil analysis, and yield prediction.',
      image: 'https://i.imgur.com/nFJ8X40.png',
      technologies: ['Python', 'Jupyter Notebook', 'Flask'],
      category: 'Web',
    },
    {
      id: 3,
      title: 'YatriOS',
      description: 'YatriOS is a lightweight and optimized operating system designed for low-end PCs, ensuring smooth performance with minimal resources.',
      image: 'https://i.imgur.com/ICdtcsA.png',
      technologies: ['C#', 'VMWare'],
      category: 'All',
      },
    {
      id: 5,
      title: 'FlappyBird',
      description: 'A simple yet challenging side-scrolling game where you guide a bird through obstacles.',
      image: 'https://i.imgur.com/iowFTnd.png',
      technologies: ['Swift','SprikeKit'],
      category: 'IOS',
    }
    
  ];

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto h-1 rounded bg-blue-600 dark:bg-blue-400"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-600 dark:text-gray-300"
          >
            Check out some of my latest mobile application projects
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-700"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white dark:bg-blue-500">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-800 dark:bg-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/projects"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

import { useState } from 'react';

const Projects = () => {
  // Filter categories
  const categories = ['All', 'Web', 'Mobile', 'UI/UX'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Project data
  const allProjects = [
    {
      id: 1,
      title: 'iChat',
      description: 'An AI-powered iOS chat app that translates messages in real-time using Google Translate API, enabling seamless multilingual communication. It supports voice and text input for effortless cross-language conversations.',
      //image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Swift', 'Vapor', 'Cloud Translation API', 'Firebase Cloud Messaging'],
      category: 'ios',
      demoLink: '#',
      codeLink: 'https://github.com/OmSingh2003/iChat',
    },
    {
      id: 2,
      title: 'AgroBharat',
      description: 'AgroBharat is an AI-powered website that helps farmers optimize their farming practices with smart tools for crop monitoring, soil analysis, and yield prediction. It leverages advanced AI to boost productivity and sustainability.',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      technologies: ['Python', 'Jupyter Notebook', 'Flask'],
      category: 'Web',
      demoLink: '#',
      codeLink: 'https://github.com/OmSingh2003/AgroBharat',
    },
    {
      id: 3,
      title: 'YatriOS',
      description: 'YatriOS is a lightweight and optimized operating system designed for low-end PCs, ensuring smooth performance with minimal resources. It offers a clean UI, essential apps, and efficient resource management for a lag-free experience.',
      image: 'https://images.unsplash.com/photo-1581172983521-5de20c87abcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      technologies: ['C#', 'VMWare'],
      category: 'OS',
      demoLink: '#',
      codeLink: 'https://github.com/OmSingh2003/YatriOS',
    },
    {
      id: 4,
      title: 'SpaceWars',
      description: 'SpaceWars is an action-packed 2D space shooter game built with C# and Unity, featuring intense battles, power-ups, and dynamic enemy AI. Players navigate through space, dodging asteroids and defeating enemies to conquer the galaxy.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      technologies: ['C#', 'Unity'],
      category: 'PC Game',
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 5,
      title: 'AI-PowerEngineed Smart Search ',
      description: 'AI-PowerEngineered Smart Search is an advanced AI-driven search engine that delivers highly relevant and context-aware results. It leverages machine learning and NLP to understand queries better and enhance user experience.',
      image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Swift', 'Kotlin', 'Flutter', 'Google cloud APIs'],
      category: 'Android and IOS',
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 6,
      title: 'AI-Enhanced Code Autocompletion and Debugging App',
      description: 'An AI-enhanced code autocompletion and debugging app that boosts developer productivity with intelligent suggestions and real-time error detection.',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Python', 'OpenAI API', 'LLM'],
      category: 'Android and IOS',
      demoLink: '#',
      codeLink: '#',
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>
          <div className="mx-auto h-1 w-24 rounded bg-blue-600 dark:bg-blue-400"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Take a look!
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-end gap-3 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
                    aria-label="View demo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
                    aria-label="View code"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project details */}
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {project.category}
                </span>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See more projects button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-transparent px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            See More Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

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
      description: 'An AI-powered iOS chat app that translates messages in real-time using Google Translate API.',
      image: '/assets/chat.png',
      technologies: ['Swift', 'Vapor', 'Cloud Translation API', 'Firebase'],
      category: 'ios',
      demoLink: '#',
      codeLink: 'https://github.com/OmSingh2003/iChat',
    },
    {
      id: 2,
      title: 'AgroBharat',
      description: 'An AI-powered website that helps farmers optimize farming with smart tools.',
      image: '/assets/agro.png',
      technologies: ['Python', 'Jupyter', 'Flask'],
      category: 'Web',
      demoLink: '#',
      codeLink: 'https://github.com/OmSingh2003/AgroBharat',
    },
    {
      id: 3,
      title: 'YatriOS',
      description: 'A lightweight OS for low-end PCs, ensuring smooth performance with minimal resources.',
      image: '/assets/yatrios.png',
      technologies: ['C#', 'VMWare'],
      category: 'OS',
      demoLink: '#',
      codeLink: 'https://github.com/OmSingh2003/YatriOS',
    },
    {
      id: 4,
      title: 'SpaceWars',
      description: 'A 2D space shooter game with intense battles, power-ups, and dynamic enemy AI.',
      image: '/assets/spacewars.png',
      technologies: ['C#', 'Unity'],
      category: 'PC Game',
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
          <h2 className="mb-4 text-3xl font-bold">My Projects</h2>
          <p className="mt-6 text-gray-600">Here are some of my recent projects. Take a look!</p>
        </div>

        {/* Filter buttons */}
        <div className="mb-12 flex justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 px-2 py-1 text-xs text-gray-800">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Demo</a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See more projects button */}
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center px-6 py-3 font-medium text-gray-700 border border-gray-300 hover:bg-gray-100">
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
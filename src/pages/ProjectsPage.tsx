import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'iOS' | 'Android' | 'Full Stack';
}

const ProjectsPage = () => {
  // Filter categories
  const categories = ['All', 'iOS', 'Android', 'Full Stack'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Projects data
  const allProjects: Project[] = [
    {
      id: 1,
      title: 'iChat',
      description: 'An AI-powered iOS chat app that translates messages in real-time using Google Translate API, enabling seamless multilingual communication.',
      image: 'https://imgur.com/a/iCvZ8qu',
      technologies: ['Swift', 'UIKit', 'HealthKit', 'Core Data'],
      category: 'iOS',
    },
    {
      id: 2,
      title: 'MediRemind',
      description: 'A medication reminder and health management app for Android users with customizable notifications and dosage tracking.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'WorkManager'],
      category: 'Android',
    },
    {
      id: 3,
      title: 'SecureChat',
      description: 'End-to-end encrypted messaging app available for both iOS and Android with focus on privacy and security.',
      image: 'https://images.unsplash.com/photo-1622556498246-755f44ca76f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      technologies: ['React Native', 'Firebase', 'Redux', 'Encryption Algorithms'],
      category: 'Full Stack',
    },
    {
      id: 4,
      title: 'WeatherNow',
      description: 'A beautiful weather app for iOS with interactive animations, accurate forecasts, and location-based alerts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Swift', 'SwiftUI', 'MapKit', 'Weather API'],
      category: 'iOS',
    },
    {
      id: 5,
      title: 'EcoTracker',
      description: 'Android app that helps users track and reduce their carbon footprint through daily habit suggestions and statistics.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      technologies: ['Kotlin', 'Material Design', 'Maps SDK', 'Firebase Analytics'],
      category: 'Android',
    },
    {
      id: 6,
      title: 'TravelCompanion',
      description: 'A cross-platform travel app with itinerary planning, offline maps, and local recommendations.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Flutter', 'Dart', 'Google Maps API', 'Firebase'],
      category: 'Full Stack',
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h1>
          <div className="mx-auto h-1 w-24 rounded bg-blue-600 dark:bg-blue-400"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Explore my mobile applications for iOS and Android platforms
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
            <div
              key={project.id}
              className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <Link
                  to={`/projects/${project.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View details for ${project.title}`}
                >
                  <span className="sr-only">View project details</span>
                </Link>
              </div>

              {/* Project details */}
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {project.category}
                </span>

                <Link to={`/projects/${project.id}`}>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                    {project.title}
                  </h3>
                </Link>

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

                <div className="mt-6">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;

import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Type definitions
interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  overviewImage: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  challenges: string;
  solutions: string;
  results: string;
  screenshots: {
    image: string;
    caption: string;
  }[];
  appStoreLink?: string;
  playStoreLink?: string;
  githubLink?: string;
  websiteLink?: string;
}

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This would normally be an API call to fetch project details
    // For this example, we'll use mock data
    setLoading(true);

    // Simulate API fetch
    setTimeout(() => {
      const projectData = projectsData.find(p => p.id === Number(id));
      setProject(projectData || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="flex h-96 items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">Project Not Found</h1>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Header with back button */}
        <div className="mb-10 flex items-center">
          <Link
            to="/projects"
            className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="sr-only">Back to Projects</span>
          </Link>
          <div>
            <span className="mb-1 block text-sm font-medium text-blue-600 dark:text-blue-400">{project.category}</span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">{project.title}</h1>
          </div>
        </div>

        {/* Main image */}
        <div className="mb-12 overflow-hidden rounded-2xl">
          <img
            src={project.overviewImage}
            alt={project.title}
            className="h-auto w-full object-cover shadow-lg"
          />
        </div>

        {/* Project details grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Main content */}
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Project Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 dark:prose-invert">
                <p>{project.fullDescription}</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Features</h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-1 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Development Process</h2>

              <div className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Challenges</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.challenges}</p>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.solutions}</p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">Results</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.results}</p>
              </div>
            </section>

            {/* Screenshots */}
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Screenshots</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-md">
                    <img src={screenshot.image} alt={screenshot.caption} className="h-auto w-full" />
                    <div className="p-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{screenshot.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 space-y-8 rounded-xl bg-gray-100 p-6 dark:bg-gray-800">
              {/* Technologies */}
              <section>
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-white px-3 py-1 text-sm text-gray-700 shadow-sm dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Links */}
              <section>
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">App Links</h3>
                <div className="space-y-3">
                  {project.appStoreLink && (
                    <a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                    </a>
                  )}

                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186.18 18.754 6.93 12 .18 5.246 3.61 1.814zM20.4 12l-3.6 4H9.6l3.6-4-3.6-4h7.2l3.6 4zM6.2 12L9.8 8h7.2l-3.6 4 3.6 4H9.8L6.2 12z"/>
                      </svg>
                      Google Play
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub Repo
                    </a>
                  )}

                  {project.websiteLink && (
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Website
                    </a>
                  )}
                </div>
              </section>

              {/* Contact CTA */}
              <section className="rounded-lg bg-blue-600 p-5 text-white dark:bg-blue-700">
                <h3 className="mb-2 text-lg font-semibold">Interested in a similar app?</h3>
                <p className="mb-4 text-blue-100">Let's discuss how I can help you build your next mobile application.</p>
                <Link
                  to="/contact"
                  className="block rounded-lg bg-white px-4 py-2 text-center font-medium text-blue-600 transition-colors hover:bg-blue-50"
                >
                  Get in Touch
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock data for projects - in a real app, this would come from an API
const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: "iChat",
    category: "iOS",
    description: "An AI-powered iOS chat app that translates messages in real-time using Google Translate API, enabling seamless multilingual communication.",
    overviewImage: "https://i.imgur.com/m0rkgth.png",
    fullDescription: "iChat is a cutting-edge iOS chat application designed to bridge language barriers by providing real-time translation during conversations. It integrates Google Translate API for accurate multilingual communication, ensuring users can connect effortlessly across the globe. The app also features voice-to-text translation, customizable language preferences, and end-to-end encryption for secure messaging.",
    features: [
      "Real-time translation of messages using Google Translate API",
      "Automatic language detection for seamless communication",
      "Voice-to-text and text-to-speech translation support",
      "Multi-language support for over 100 languages",
      "Customizable translation preferences and tone selection",
      "End-to-end encryption for secure messaging",
      "Push notifications for instant chat updates",
      "Cloud-based chat history syncing across devices"
    ],
    technologies: [
      "Swift", "SwiftUI", "UIKit", "Vapor", "Cloud Translation API", "Firebase Cloud Messaging", "Core Data", "CloudKit"
    ],
    challenges: "Ensuring real-time message translation while maintaining fast response times and securing user data was a key challenge. Additionally, optimizing API requests to reduce latency and handling diverse language structures required careful implementation.",
    solutions: "To minimize translation delays, we optimized API requests with caching mechanisms and efficient data processing. Secure encryption protocols were integrated to protect user privacy. The app uses Vapor for a high-performance backend, ensuring a smooth and reliable chat experience.",
    results: "iChat has been well-received by early adopters, significantly improving cross-language communication efficiency. Users report enhanced messaging experiences, accurate translations, and improved engagement with international contacts.",
    // screenshots: [
    //   {
    //     image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //     caption: "Seamless Chat - Real-time translations within the conversation"
    //   },
    //   {
    //     image: "https://images.unsplash.com/photo-1601132359868-2a85b551ab4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //     caption: "Voice Translation - Speak messages and get instant translations"
    //   },
    //   {
    //     image: "https://images.unsplash.com/photo-1593642532454-e1a60f44a86b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //     caption: "Multi-Language Support - Chat in over 100 languages"
    //   },
    //   {
    //     image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //     caption: "Secure Messaging - End-to-end encryption for privacy"
    //   }
    // ],
    //appStoreLink: "https://apps.apple.com",
    githubLink: "https://github.com/OmSingh2003/iChat",
    screenshots: []
  },
  {
    id: 2,
    title: "AgroBharat",
    category: "Web",
    description: "An AI-powered Android application designed to assist farmers with smart tools for crop monitoring, soil analysis, and yield prediction.",
    overviewImage: "https://i.imgur.com/nFJ8X40.png",
    fullDescription: "AgroBharat is a powerful Android application that leverages AI and data analytics to help farmers optimize their agricultural practices. The app provides real-time insights on crop health, weather forecasts, and soil conditions to enhance productivity. With intelligent recommendations and predictive analytics, AgroBharat empowers farmers to make data-driven decisions for better yield and resource management.",
    features: [
     "AI-driven crop health monitoring and disease detection",
      "Real-time weather forecasting and climate impact analysis",
      "Soil quality assessment with recommendations for fertilizers",
      "Smart irrigation management for efficient water usage",
      "Market price tracking for better selling decisions",
      "Government scheme updates and agricultural news feed"
    ],
    technologies: [
      "Python","Jupyter Notebook","Flask"
    ],
    challenges: "The main challenge was integrating real-time weather and soil data while ensuring the AI models provide accurate predictions for different regions. Additionally, delivering AI-powered recommendations in an offline mode for remote areas was a key focus.",
    solutions: "We implemented a hybrid approach using TensorFlow Lite for offline AI processing while synchronizing with Firebase for cloud-based updates. Weather and soil data were optimized using efficient API requests, and a caching system was introduced to ensure accessibility in low-connectivity areas.",
    results: "AgroBharat has been adopted by thousands of farmers, leading to an increase in crop yield efficiency. User feedback highlights improved decision-making, better resource management, and enhanced profitability through AI-driven insights.",
    //screenshots: [
     // {
       // image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        //caption: "Medication Dashboard - Overview of daily medication schedule"
     // },
     // {
       // image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        //caption: "Add Medication - Simple form for adding new medications"
   //   },
    //  {
      //  image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
       // caption: "Reminder Notification - Clear alerts for medication times"
     // },
     // {
       // image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
       // caption: "Health Metrics - Tracking vital signs and health data"
      //}
   // ]
    //playStoreLink: "https://play.google.com",
    githubLink: "https://github.com",
    screenshots: []
  },
  {
    id: 5,
    title: "FlappyBird",
    category: "iOS",
    description: "A simple yet challenging side-scrolling game where you guide a bird through obstacles.",
    overviewImage: "https://i.imgur.com/iowFTnd.png",
    fullDescription: "FlappyBird is a classic endless runner game built for iOS, where players tap to keep the bird airborne and navigate through a series of obstacles. The game tests players' reflexes and precision while maintaining a fun and engaging experience.",
    features: [
      "Tap-based controls for easy gameplay",
      "Randomly generated obstacles for infinite replayability",
      "Pixel-art style graphics for a nostalgic feel",
      "High-score tracking and leaderboard integration",
      "Smooth physics-based movement"
    ],
    technologies: ["Swift", "SpriteKit"],
    challenges: "Optimizing collision detection and physics interactions while maintaining smooth gameplay.",
    solutions: "We fine-tuned the physics engine and optimized asset rendering to ensure a lag-free experience, even on older devices.",
    results: "FlappyBird has received positive feedback for its addictive gameplay and fluid mechanics. Players enjoy the challenging yet rewarding nature of the game.",
    // screenshots: [
    //   {
    //     image: "https://i.imgur.com/example1.png",
    //     caption: "Gameplay - Guide the bird through obstacles"
    //   },
    //   {
    //     image: "https://i.imgur.com/example2.png",
    //     caption: "Game Over - Retry and beat your high score"
    //   }
    // ],
    appStoreLink: "https://apps.apple.com",
    githubLink: "https://github.com/OmSingh2003/flappybird",
    // websiteLink: "https://example.com"
    screenshots:[]
  },
  
  
];

export default ProjectDetailPage;

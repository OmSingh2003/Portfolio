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
    fullDescription: "FitTracker Pro is a comprehensive iOS fitness application designed to help users track their workouts, monitor nutrition, and achieve their fitness goals. The app provides personalized workout plans, detailed activity tracking, and nutritional guidance all in one seamless experience.",
    features: [
      "Personalized workout plans based on user goals",
      "Real-time activity tracking with Apple HealthKit integration",
      "Detailed nutrition tracking and meal planning",
      "Progress visualization with interactive charts",
      "Social features for connecting with friends and sharing achievements",
      "Apple Watch companion app for on-the-go tracking"
    ],
    technologies: [
      "Swift", "UIKit", "SwiftUI", "Core Data", "HealthKit", "CloudKit", "CoreML"
    ],
    challenges: "One of the main challenges was integrating with HealthKit while ensuring data privacy and reliable synchronization across devices. We also needed to optimize battery usage while maintaining accurate tracking for extended workout sessions.",
    solutions: "We implemented a sophisticated data synchronization system using CloudKit to ensure seamless updates across devices. For battery optimization, we used intelligent background processing and adaptive sampling rates based on activity intensity.",
    results: "The app has achieved over 100,000 downloads in the App Store with a 4.8-star rating. Users report an average of 30% better adherence to their fitness routines and improved satisfaction with their progress tracking.",
    screenshots: [
      {
        image: "https://images.unsplash.com/photo-1575310866542-71d0593e22e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Dashboard View - User can see daily progress at a glance"
      },
      {
        image: "https://images.unsplash.com/photo-1604764454781-288c8a7a8f8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Workout Tracking - Real-time stats during exercises"
      },
      {
        image: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Nutrition Tracker - Easy meal logging with calorie breakdown"
      },
      {
        image: "https://images.unsplash.com/photo-1601678979565-6af453c2f588?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Progress Charts - Visual representation of fitness journey"
      }
    ],
    appStoreLink: "https://apps.apple.com",
    githubLink: "https://github.com"
  },
  {
    id: 2,
    title: "MediRemind",
    category: "Android",
    description: "A medication reminder and health management app for Android users with customizable notifications and dosage tracking.",
    overviewImage: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    fullDescription: "MediRemind is an Android application designed to help users manage their medications, schedule appointments, and track health metrics. The app focuses on improving medication adherence through smart reminders and simplified tracking, while also providing comprehensive health management tools.",
    features: [
      "Intelligent medication reminders with custom scheduling",
      "Medication inventory tracking with refill alerts",
      "Doctor appointment scheduling and reminders",
      "Symptom and side effect tracking",
      "Family sharing for caregivers",
      "Export medical data for healthcare providers"
    ],
    technologies: [
      "Kotlin", "Jetpack Compose", "MVVM Architecture", "Room Database", "WorkManager", "Hilt Dependency Injection"
    ],
    challenges: "The biggest challenge was creating a reliable notification system that would work across different Android versions and manufacturers' custom OS modifications. Additionally, we needed to implement a secure system for storing sensitive health information.",
    solutions: "We developed a robust notification system using Android's WorkManager API with fallback mechanisms. For data security, we implemented encryption and followed HIPAA-inspired guidelines for protecting user health information.",
    results: "The app has over 50,000 installs on Google Play with a 4.6-star rating. Users report a 40% improvement in medication adherence, and the app has been recommended by healthcare professionals for patient use.",
    screenshots: [
      {
        image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Medication Dashboard - Overview of daily medication schedule"
      },
      {
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Add Medication - Simple form for adding new medications"
      },
      {
        image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Reminder Notification - Clear alerts for medication times"
      },
      {
        image: "https://images.unsplash.com/photo-1579208570378-8c970854bc23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Health Metrics - Tracking vital signs and health data"
      }
    ],
    playStoreLink: "https://play.google.com",
    githubLink: "https://github.com"
  },
  {
    id: 3,
    title: "SecureChat",
    category: "Full Stack",
    description: "End-to-end encrypted messaging app available for both iOS and Android with focus on privacy and security.",
    overviewImage: "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    fullDescription: "SecureChat is a cross-platform messaging application built with React Native that provides end-to-end encryption for all communications. The app prioritizes user privacy and security while delivering a smooth, intuitive messaging experience with features comparable to mainstream messaging apps.",
    features: [
      "End-to-end encryption for all messages and calls",
      "Self-destructing messages with customizable timers",
      "Secure group chats with advanced permissions",
      "Encrypted voice and video calls",
      "Two-factor authentication",
      "Local encryption of message database",
      "No-logs policy - minimal data storage on servers"
    ],
    technologies: [
      "React Native", "TypeScript", "Firebase", "WebRTC", "Signal Protocol", "Redux", "Node.js"
    ],
    challenges: "Implementing true end-to-end encryption across platforms while maintaining performance was challenging. Additionally, balancing security features with user experience required careful design considerations.",
    solutions: "We used the Signal Protocol for encryption, implemented as a native module for optimal performance. The UX was carefully crafted through multiple rounds of user testing to ensure security features were intuitive and didn't hinder the messaging experience.",
    results: "The app has been adopted by privacy-conscious users and organizations, with over 200,000 combined downloads. It has received recognition from security experts and privacy advocates for its implementation of encryption standards.",
    screenshots: [
      {
        image: "https://images.unsplash.com/photo-1563674847932-52d3d2a0a058?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Chat Interface - Clean messaging UI with encryption indicators"
      },
      {
        image: "https://images.unsplash.com/photo-1611746869696-d09bce200020?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Security Settings - Advanced encryption configuration options"
      },
      {
        image: "https://images.unsplash.com/photo-1590674899484-d5a66121c3f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Video Call - Encrypted video communication"
      },
      {
        image: "https://images.unsplash.com/photo-1604004215402-e0be233f39be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        caption: "Group Chat - Secure multi-person conversations"
      }
    ],
    appStoreLink: "https://apps.apple.com",
    playStoreLink: "https://play.google.com",
    githubLink: "https://github.com",
    websiteLink: "https://example.com"
  }
];

export default ProjectDetailPage;

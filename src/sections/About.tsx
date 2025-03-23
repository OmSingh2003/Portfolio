const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="mx-auto h-1 w-24 rounded bg-blue-600 dark:bg-blue-400"></div>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          {/* Info cards */}
          <div className="grid w-full grid-cols-1 gap-6 md:w-1/2 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium text-blue-600 dark:text-blue-400">2022 - 2026</p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">BTech in Computer Science</p>
                  <p className="text-gray-600 dark:text-gray-400">Vellore Institute Of Technology - Bhopal</p>
                </li>
                <br />
                <li>
                <p className="font-medium text-blue-600 dark:text-blue-400">2021</p>
                <p className="font-medium text-gray-800 dark:text-gray-200">High School Diploma</p>
                <p className="text-gray-600 dark:text-gray-400">City Montessori School - Lucknow</p>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Interests</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>- Mobile App Development</li>
                <li>- AI & Machine Learning</li>
                <li>- Open Source Contribution</li>
                <li>- Cloud Computing</li>
              </ul>
            </div>
          </div>

          {/* Bio */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Who am I?</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Hello! I'm Om Singh, a passionate mobile app developer currently in my third year of 
                  pursuing a BTech in Computer Science. I specialize in developing iOS and Android 
                  applications, with a keen interest in integrating AI/ML into mobile solutions.
                </p>
                <br />
                <p>
                  My journey in mobile development began during my studies, where I developed a deep 
                  fascination for building applications that enhance user experiences. Since then, I have 
                  worked on several projects, ranging from AI-powered chat applications to cloud-based 
                  mobile solutions.
                </p>
                <br />
                <p>
                  I specialize in native iOS development with Swift and SwiftUI, Android development 
                  with Kotlin and Jetpack Compose, and cross-platform solutions using React Native 
                  and Flutter. Additionally, I have hands-on experience in AI model deployment and 
                  cloud computing, allowing me to create intelligent and scalable mobile applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

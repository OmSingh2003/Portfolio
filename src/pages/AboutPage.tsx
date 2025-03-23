const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          About Me
        </h1>
        <div className="mx-auto h-1 w-24 rounded bg-blue-600 dark:bg-blue-400"></div>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Left Section - About Text */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
            Who I Am
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              Hello! I'm <strong>Om Singh</strong>, a passionate mobile app
              developer currently in my third year of pursuing a BTech in
              Computer Science. I specialize in developing iOS and Android
              applications, with a keen interest in integrating AI/ML into
              mobile solutions.
            </p>
            <p>
              My journey in mobile development began during my studies, where I
              developed a deep fascination for building applications that
              enhance user experiences. Since then, I have worked on several
              projects, ranging from AI-powered chat applications to
              cloud-based mobile solutions.
            </p>
            <p>
              I specialize in native iOS development with Swift and SwiftUI,
              Android development with Kotlin and Jetpack Compose, and
              cross-platform solutions using React Native and Flutter.
              Additionally, I have hands-on experience in AI model deployment
              and cloud computing, allowing me to create intelligent and
              scalable mobile applications.
            </p>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <img
              src="/assets/profile.png"
              alt="Om Singh - Mobile App Developer"
              className="aspect-[9/16] w-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 dark:text-white">
          My Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Mobile Development Skills */}
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Mobile Development
            </h3>
            <div className="space-y-4">
              {[
                { name: "iOS Development (Swift/Vapor)", level: 90 },
                { name: "Android Development (Kotlin/Kotr)", level: 90 },
                { name: "React Native", level: 85 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Programming Languages
            </h3>
            <div className="space-y-4">
              {[
                { name: "Swift", level: 95 },
                { name: "Kotlin", level: 90 },
                { name: "JavaScript/TypeScript", level: 85 },
                { name: "C/C++", level: 95 },
                { name: "Java", level: 80 },
                { name: "Python", level: 90 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Other Skills
            </h3>
            <div className="space-y-4">
              {[
                { name: "Firebase", level: 90 },
                { name: "GitHub", level: 85 },
                { name: "OpenAI APIs", level: 90 },
                { name: "Google Cloud", level: 90 },
                { name: "SQL", level: 75 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

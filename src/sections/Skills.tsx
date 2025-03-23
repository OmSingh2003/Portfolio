const Skills = () => {
  // Skill categories with their respective skills
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Kotlin', level: 90 },
        { name: 'Swift', level: 75 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        //{ name: 'Express', level: 75 },
        { name: 'Ktor', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'SQL', level: 65 },
        { name: 'REST API', level: 85 },
        { name: 'Vapor', level: 75 },
      ],
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 60 },
       { name: 'Jest', level: 70 },
        //{ name: 'CI/CD', level: 65 },
        //{ name: 'Figma', level: 75 },
        { name: 'AWS', level: 75 },
        { name: 'Google Cloud', level: 75 },
        { name: 'OpenAI API', level: 75 },
        { name: 'Firebase', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">My Skills</h2>
          <div className="mx-auto h-1 w-24 rounded bg-blue-600 dark:bg-blue-400"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Here are my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.name} className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
              <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
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
          ))}
        </div>

        {/* Technology icons */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-xl font-semibold text-gray-900 dark:text-white">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Replace with actual technology icons or use text for simplicity */}
            {['Kotlin', 'Kotr', 'Swift', 'Vapor', 'Git', 'Docker', 'SQL'].map((tech) => (
              <div
                key={tech}
                className="flex h-24 w-32 items-center justify-center rounded-lg bg-white p-4 shadow-md dark:bg-gray-900"
              >
                <span className="text-center font-medium text-gray-800 dark:text-gray-200">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { Library, Layout, Database, Workflow } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Libraries & Frameworks',
      icon: Library,
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'Next.js', level: 60 },
        { name: 'Material-UI (MUI)', level: 85 },
        { name: 'Ant Design', level: 85 },
        { name: 'Shadcn/UI', level: 80 },
        { name: 'Tailwind CSS', level: 60 },
        { name: 'next-intl', level: 70 },
      ]
    },
    {
      title: 'State Management & Data Fetching',
      icon: Workflow,
      skills: [
        { name: 'Redux', level: 65 },
        { name: 'React Query', level: 80 },
        { name: 'Axios', level: 85 },
      ]
    },
    {
      title: 'Form Management & Validation',
      icon: Layout,
      skills: [
        { name: 'React Hook Form', level: 80 },
        { name: 'Formik', level: 70 },
        { name: 'Zod', level: 60 },
        { name: 'Yup', level: 80 },
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 60 },
        { name: 'Express.js', level: 60 },
        { name: 'MongoDB', level: 70 },
        { name: 'RESTful APIs', level: 60 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Database,
      skills: [
        { name: 'npm/yarn', level: 95 },
        { name: 'Git', level: 90 },
        { name: 'Webpack', level: 80 },
        { name: 'Leaflet Maps', level: 85 },
      ]
    },
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency in various technologies.
            </p>
          </div>

          <div className="space-y-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <category.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-900/50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-emerald-400 h-2 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
import Link from 'next/link';

const lessons = [
  { 
    id: 1, 
    title: "Basic Greetings",
    description: "Learn essential greetings and introductions",
    examples: ["¡Hola!", "Buenos días", "¿Cómo estás?"],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 14C8.91221 15.2144 10.3645 16 12.0004 16C13.6362 16 15.0885 15.2144 16.0007 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 10H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 10H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    id: 2, 
    title: "Common Phrases",
    description: "Master everyday expressions and phrases",
    examples: ["Por favor", "Gracias", "De nada"],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10H16M8 14H16M12 18H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    id: 3, 
    title: "Basic Conversation",
    description: "Start having simple conversations in Spanish",
    examples: ["¿Qué tal?", "¿De dónde eres?", "¿Cómo te llamas?"],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 8H19C20.1046 8 21 8.89543 21 10V16C21 17.1046 20.1046 18 19 18H17V22L13 18H9C8.44772 18 7.94772 17.7761 7.58579 17.4142M7.58579 17.4142L11 14H15C16.1046 14 17 13.1046 17 12V6C17 4.89543 16.1046 4 15 4H5C3.89543 4 3 4.89543 3 6V12C3 13.1046 3.89543 14 5 14H7V18L7.58579 17.4142Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function LessonsList() {
  return (
    <div className="max-w-4xl mx-auto p-4 min-h-screen bg-[#FAFAFA]">
      <h1 className="text-[2.5rem] font-bold text-[#1A1A1A] mb-12 text-center tracking-tight">
        Lessons
      </h1>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link href={`/lessons/${lesson.id}`}>
              <div className="group h-full p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out border border-gray-100">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-green-500 p-2 bg-green-50 rounded-xl">
                      {lesson.icon}
                    </div>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-green-500 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>

                  <div>
                    <h2 className="text-xl font-medium text-[#1A1A1A] group-hover:text-green-600 transition-colors duration-300 mb-2">
                      {lesson.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {lesson.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {lesson.examples.map((example, index) => (
                        <span 
                          key={index}
                          className="inline-block px-2 py-1 bg-gray-50 text-gray-600 text-sm rounded-lg"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

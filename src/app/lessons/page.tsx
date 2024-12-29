import Link from 'next/link';

const lessons = [
  { id: 1, title: "Basic Greetings" },
  { id: 2, title: "Common Phrases" },
  { id: 3, title: "Basic Conversation" },
];

export default function LessonsList() {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Lessons</h1>
      <ul className="space-y-4">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="transition-all duration-300 hover:transform hover:scale-105">
            <Link href={`/lessons/${lesson.id}`}>
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-800">{lesson.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


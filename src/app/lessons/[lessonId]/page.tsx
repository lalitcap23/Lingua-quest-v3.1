'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import LessonComponent from "@/app/components/LessonComponent/lessoncomponent";

const lessons = [
  { id: 1, title: "Basic Greetings" },
  { id: 2, title: "Common Phrases" },
  { id: 3, title: "Basic Conversation" },
]

// completion box
const CompletionBox = ({ title, onClose }: { title: string, onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-8 max-w-sm w-full shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Lesson Completed!</h2>
      <p className="text-gray-600 mb-6">Congratulations! You've completed the lesson: "{title}"</p>
      <button 
        onClick={onClose}
        className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
      >
        Continue
      </button>
    </div>
  </div>
);
// completion box

const LessonPage = ({ params }: { params: { lessonId: string } }) => {
  const router = useRouter();
  const [showCompletion, setShowCompletion] = useState(false);
  const lessonData = lessons.find((lesson) => lesson.id === Number(params.lessonId));

  if (!lessonData) {
    notFound(); 
  }

  const handleLessonComplete = () => {
    setShowCompletion(true);
  };

  const handleCloseCompletion = () => {
    setShowCompletion(false);
    router.push('/lessons');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LessonComponent 
        lessonId={Number(params.lessonId)} 
        onLessonComplete={handleLessonComplete} 
      />
      {showCompletion && (
        <CompletionBox 
          title={lessonData.title}
          onClose={handleCloseCompletion}
        />
      )}
    </div>
  );
};

export default LessonPage;



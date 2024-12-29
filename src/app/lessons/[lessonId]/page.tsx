'use client';

import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import LessonComponent from "@/app/components/LessonComponent/lessoncomponent";

const lessons = [
  { id: 1, title: "Basic Greetings" },
  { id: 2, title: "Common Phrases" },
  { id: 3, title: "Basic Conversation" },
]

const LessonPage = ({ params }: { params: { lessonId: string } }) => {
  const router = useRouter();
  const lessonData = lessons.find((lesson) => lesson.id === Number(params.lessonId));

  if (!lessonData) {
    notFound(); 
  }

  const handleLessonComplete = () => {
    alert(`Lesson "${lessonData.title}" completed!`);
    router.push('/lessons');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <LessonComponent 
        lessonId={Number(params.lessonId)} 
        onLessonComplete={handleLessonComplete} 
      />
    </div>
  );
};

export default LessonPage;



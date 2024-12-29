'use client'

import React, { useState } from 'react';

const lessons = [
  {
    id: 1,
    title: "Basic Greetings",
    questions: [
      {
        id: 1,
        question: "How do you say 'Hello' in Spanish?",
        options: ["Hola", "Gracias", "Por favor", "Adios"],
        correctAnswer: "Hola",
        explanation: "¡Hola! is the most common way to say hello in Spanish"
      },
      {
        id: 2,
        question: "What does 'Buenos días' mean?",
        options: ["Good night", "Good afternoon", "Good morning", "Goodbye"],
        correctAnswer: "Good morning",
        explanation: "Buenos días is used as a greeting in the morning"
      }
    ]
  },
  {
    id: 2,
    title: "Common Phrases",
    questions: [
      {
        id: 1,
        question: "How do you say 'Thank you' in Spanish?",
        options: ["Por favor", "Gracias", "De nada", "Mucho gusto"],
        correctAnswer: "Gracias",
        explanation: "Gracias is used to express gratitude"
      },
      {
        id: 2,
        question: "What does 'Por favor' mean?",
        options: ["You're welcome", "Please", "Thank you", "Goodbye"],
        correctAnswer: "Please",
        explanation: "Por favor is used when making polite requests"
      }
    ]
  },
  {
    id: 3,
    title: "Basic Conversation",
    questions: [
      {
        id: 1,
        question: "How do you ask 'How are you?' in Spanish?",
        options: ["¿Cómo te llamas?", "¿Qué tal?", "¿Dónde estás?", "¿Por qué?"],
        correctAnswer: "¿Qué tal?",
        explanation: "¿Qué tal? is a casual way to ask how someone is doing"
      }
    ]
  }
];

interface LessonComponentProps {
  lessonId: number;
  onLessonComplete: (lessonId: number) => void;
}

const LessonComponent = ({ lessonId, onLessonComplete }: LessonComponentProps) => {
  const [currentLesson, setCurrentLesson] = useState(lessonId - 1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [lessonProgress, setLessonProgress] = useState(0);

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === lessons[currentLesson].questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    // Update progress
    if (correct) {
      const newProgress = ((currentQuestion + 1) / lessons[currentLesson].questions.length) * 100;
      setLessonProgress(newProgress);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < lessons[currentLesson].questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentLesson + 1 < lessons.length) {
      // Move to next lesson
      setCurrentLesson(currentLesson + 1);
      setCurrentQuestion(0);
      onLessonComplete(lessons[currentLesson].id);
    }
    setSelectedAnswer(null);
    setShowFeedback(false);
    setLessonProgress(0);
  };

  const currentLessonData = lessons[currentLesson];
  const currentQuestionData = currentLessonData.questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-800">{currentLessonData.title}</h2>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-green-500 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${lessonProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-4 text-gray-700">{currentQuestionData.question}</h3>
            <div className="space-y-3">
              {currentQuestionData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelection(option)}
                  className={`w-full text-left p-4 rounded-lg transition-colors duration-300 ${
                    selectedAnswer === option
                      ? isCorrect
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-200'
                  }`}
                  disabled={showFeedback}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {showFeedback && (
            <div className="mb-6">
              <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100 border border-green-500' : 'bg-red-100 border border-red-500'}`}>
                <div className="flex items-center">
                  {isCorrect ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className={`${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {isCorrect ? "¡Correcto! " : "Not quite. "}
                    {currentQuestionData.explanation}
                  </span>
                </div>
              </div>
            </div>
          )}

          {showFeedback && (
            <button 
              onClick={handleNext}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              {currentQuestion + 1 < currentLessonData.questions.length ? "Next Question" : "Next Lesson"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonComponent;

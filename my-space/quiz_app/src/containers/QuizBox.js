import React, { useState } from "react";
import QuizList from "../components/QuizList";
import AnswerForm from "../components/AnswerForm";

const QuizBox = () => {
    const [quizContents, setQuizzes] = useState(
        [
            {
                questionText: 'Who is John?',
                answerText: [
                    { option: 'An young man', isAnswerCorrect: "option-a" },
                    { option: 'An Old Man ', isAnswerCorrect: "option-b"  },
                    { option: 'A teenager', isAnswerCorrect: "option-c"  },
                    { option: 'A Donkey', isAnswerCorrect: "option-d"  },
                ],
            },
            {
                questionText: 'Who is Aqib?',
                answerText: [
                    { option: 'A young man who dislikes teenagers', isAnswerCorrect: "option-a"  },
                    { option: 'A young man who doesnt like to take bus', isAnswerCorrect: "option-b"  },
                    { option: 'An Old man', isAnswerCorrect: "option-c"  },
                    { option: 'A Teenager', isAnswerCorrect: "option-d"  },
                ],
            },
            {
                questionText: 'What does John Like?',
                answerText: [
                    { option: 'playing games', isAnswerCorrect: "option-a"  },
                    { option: 'bullying Aqib', isAnswerCorrect: "option-b"  },
                    { option: 'teaching adults', isAnswerCorrect: "option-c"  },
                    { option: 'playing dota', isAnswerCorrect: "option-d"  },
                ],
            },
            {
                questionText: 'What does Aqib Do for Living?',
                answerText: [
                    { option: 'Instructor', isAnswerCorrect: "option-a"  },
                    { option: 'Ballet Dancer', isAnswerCorrect: "option-b"  },
                    { option: 'Footballer', isAnswerCorrect: "option-c"  },
                    { option: 'Pro Gamer', isAnswerCorrect: "option-d"  },
                ],
            },
        ]
    )
    const [currentQuestion, setCurrentQuestion] = useState(0);
    

    

    
    return (
    

        <div className='quiz-app'>
			<>
				<div className='question-section'>
					<div className='question-text'> <QuizList quizContents={quizContents} /> </div>
				</div>
				<div className='answer-section'>
                {/* <AnswerForm quizContents={quizContents} /> */}
				</div>
			</>
		</div>
            
    
    )
}

export default QuizBox;





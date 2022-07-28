import React, { useState } from "react";
import Answer from "./Answer";

const QuizList = ({ quizContents }) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);


    const commentNodes = quizContents.map(quiz => {
        return (
            <Answer questionText={quiz.questionText}>{quiz.answerText}</Answer>
        );
    });

    return (
        <>
            {commentNodes}
        </>
    )

}

export default QuizList;

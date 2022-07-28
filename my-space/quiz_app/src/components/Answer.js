
import React from "react";

const Answer = ({ questionText, children }) => {

    const answers = children.map((answer) => {
        return(
                <p>{answer.option}</p>
        )
    })
    
    return (
        <>
            <p>{questionText}</p>
            <h4>{answers}</h4>
            
        </>
    )

}

export default Answer;
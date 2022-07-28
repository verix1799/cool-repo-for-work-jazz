import React, { useState } from "react";



const CommentForm = ({ onCommentSubmit }) => {
    const [author, setAuthor] = useState("");			// NEW
    const [text, setText] = useState("");

    const handleAuthorChange = (evt) => {
        setAuthor(evt.target.value);
    }

    const handleTextChange = (evt) => {
        setText(evt.target.value);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const authorToSubmit = author.trim();
        const textToSubmit = text.trim();
        if (!authorToSubmit || !textToSubmit) {
            return
        }

        onCommentSubmit({
            author: authorToSubmit,
            text: textToSubmit
        });

        setAuthor("");
        setText("");
    }

    return (
        <form className="comment-form" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Your name"
                value={author}
                onChange={handleAuthorChange}
            />
            <input
                type="text"
                placeholder="Say something..."
                value={text}
                onChange={handleTextChange}
            />
            <input
                type="submit"
                value="Post"
            />
        </form>
    )


}




export default CommentForm;

import { useState } from 'react';

const useCheckbox = (initialState, questions) => {
    const [selectedAnswers, setSelectedAnswers] = useState(initialState);

    const handleAnswerChange = (questionIndex, variantIndex) => {
        setSelectedAnswers((prevState) => {
            const updatedAnswers = [...prevState];
            updatedAnswers[questionIndex] = variantIndex;
            return updatedAnswers;
        });
    };

    const correctAnswersCount = selectedAnswers.filter((answer, questionIndex) => {
        const question = questions[questionIndex];
        return question && answer === question.correct;
    }).length;

    return [selectedAnswers, handleAnswerChange, correctAnswersCount, setSelectedAnswers];
};

export default useCheckbox;

import { useState } from 'react';

const useCheckboxGroup = (initialState) => {
    const [selectedAnswers, setSelectedAnswers] = useState(initialState);

    const handleAnswerChange = (questionIndex, variantIndex) => {
        setSelectedAnswers((prevState) => {
            const updatedAnswers = [...prevState];
            updatedAnswers[questionIndex] = variantIndex;
            return updatedAnswers;
        });
    };

    return [selectedAnswers, handleAnswerChange];
};

export default useCheckboxGroup;

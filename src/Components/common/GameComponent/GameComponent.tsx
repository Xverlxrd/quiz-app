import React, { useState } from 'react';
import { Space, Pagination } from 'antd';
import './GameComponent.css';
import { questions } from '@/Components/common/GameComponent/questions';
import useCheckbox from '@/Components/hooks/useCheckbox';
import ButtonComponent from '@/Components/common/ButtonComponent/ButtonComponent';
import ModalComponent from '@/Components/common/ModalComponent/ModalComponent';
import { CloseCircleOutlined } from '@ant-design/icons';
import GameCard from "@/Components/common/GameCard/GameCard";
import usePagination from "@/Components/hooks/usePagination";

const GameComponent = () => {
    const initialState = Array(questions.length).fill(null);
    const [selectedAnswers, handleAnswerChange, correctAnswersCount, setSelectedAnswers] = useCheckbox(initialState, questions);
    const [finished, setFinished] = useState(false);
    const [resultModal, setResultModal] = useState(true);

    const { currentPage, pageSize, handlePageChange } = usePagination(questions.length);
    const startQuestionIndex = (currentPage - 1) * pageSize;
    const displayedQuestions = questions.slice(startQuestionIndex, startQuestionIndex + pageSize);

    const result = () => {
        if (correctAnswersCount <= 4) {
            return <p>Вы плохо знаете React</p>;
        } else if (correctAnswersCount > 4 && correctAnswersCount <= 8) {
            return <p>Неплохой результат, но можно и лучше</p>;
        } else if (correctAnswersCount > 8 && correctAnswersCount <= 10) {
            return <p>Отличный результат, так держать 👍👍👍</p>;
        } else {
            return null;
        }
    };

    const restartGame = () => {
        setSelectedAnswers(initialState);
        setFinished(false);
        setResultModal(true);
    };

    return (
        <div className="game">
            <Space direction="vertical" align="center" size="large" className="game__container">
                {displayedQuestions.map((quest, questionIndex) => {
                    const questionGlobalIndex = startQuestionIndex + questionIndex;

                    return (
                        <GameCard
                            correct={quest.correct}
                            key={quest.title}
                            title={quest.title}
                            variants={quest.variants}
                            value={selectedAnswers[questionGlobalIndex]}
                            onChange={(selectedOptions) =>
                                handleAnswerChange(questionGlobalIndex, selectedOptions[0])
                            }
                            disabled={finished}
                        />
                    );
                })}
                <Pagination
                    current={currentPage}
                    total={questions.length}
                    pageSize={pageSize}
                    onChange={handlePageChange}
                />
                <Space size={"large"}>
                    <ButtonComponent onClick={() => setFinished(true)} text={'Закончить'} />
                    <ButtonComponent onClick={restartGame} text={'Ещё раз'}/>
                </Space>
                {finished && (
                    <ModalComponent active={resultModal} setActive={setResultModal}>
                        <div className={'result'}>
                            <CloseCircleOutlined
                                className={'result__img'}
                                onClick={() => setResultModal(false)}
                            />
                            <div>
                                {result()}<br/>
                                Вы ответили правильно на {correctAnswersCount} из {questions.length}
                            </div>
                        </div>
                    </ModalComponent>
                )}
            </Space>
        </div>
    );
};

export default GameComponent;
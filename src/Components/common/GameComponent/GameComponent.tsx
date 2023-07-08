import React, { useState } from 'react';
import {Space, Pagination } from 'antd';
import './GameComponent.css';
import { questions } from '@/Components/common/GameComponent/questions';
import useCheckbox from '@/Components/hooks/useCheckbox';
import usePagination from '@/Components/hooks/usePagination';
import GameCard from '@/Components/common/GameCard/GameCard';
import ButtonComponent from '@/Components/common/ButtonComponent/ButtonComponent';
import ModalComponent from '@/Components/common/ModalComponent/ModalComponent';
import { CloseCircleOutlined } from '@ant-design/icons';

const GameComponent = () => {
    const initialState = Array(questions.length).fill(null);
    const [selectedAnswers, handleAnswerChange] = useCheckbox(initialState);
    const [finished, setFinished] = useState<boolean>(false);
    const [resultModal, setResultModal] = useState<boolean>(true);

    const { currentPage, pageSize, handlePageChange } = usePagination(questions.length);

    const startQuestionIndex = (currentPage - 1) * pageSize;
    const displayedQuestions = questions.slice(startQuestionIndex, startQuestionIndex + pageSize);


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
                    showSizeChanger
                    current={currentPage}
                    total={questions.length}
                    pageSize={pageSize}
                    onChange={handlePageChange}
                />
                <ButtonComponent onClick={() => setFinished(true)} text={'Закончить'} />
                {finished && (
                    <ModalComponent active={resultModal} setActive={setResultModal}>
                        <div className={'result'}>
                            <CloseCircleOutlined
                                className={'result__img'}
                                onClick={() => setResultModal(false)}
                            />
                            <p>Правильных ответов: {}</p>
                        </div>
                    </ModalComponent>
                )}
            </Space>
        </div>
    );
};

export default GameComponent;


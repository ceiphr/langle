import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from '@mantine/core';
import Survey from '@components/Survey';

const EndModal = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch();
    const answerWord = useSelector(state => state.answerWord);
    const level = useSelector(state => state.level);
    const gameState = useSelector(state => state.gameState);

    const nextLevel = () => {
        setIsOpen(false);
        dispatch({ type: "NEXT_LEVEL" });
        setTimeout(() => {
            dispatch({ type: "SET_GAMESTATE", payload: null });
        }, 500);
    };

    return (
        <Modal
            opened={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <div className="center">
                <h1>You {gameState === true ? "win" : gameState === false ? "lose" : "____"}!</h1>
                {gameState === false && (<strong>The answer was &quot;{answerWord.toLowerCase()}.&quot;</strong>)}
                {level === 2 ? <p>You&apos;ve completed all levels for today!<br />Come back tomorrow!</p> :
                    <>
                        <p>You&apos;ve finished level {level + 1}/3.<br />There are three levels everyday.</p>
                        {level < 2 && (<>
                            <Button onClick={() => nextLevel()}>Next Level</Button>
                        </>)}</>
                }
            </div>
            <Survey />
        </Modal>
    );
};

export default EndModal;
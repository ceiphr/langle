import React from 'react';
import { Modal, Button } from '@mantine/core';
import Survey from '@components/Survey';

const EndModal = ({ isOpen, setIsOpen, level, nextLevel, gameState }) => {
    return (
        <Modal
            opened={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <div className="center">
                <h1>You {gameState ? "win" : "lose"}!</h1>
                <p>You&apos;ve finished level {level + 1}/3.<br />There are three levels everyday.</p>
                {level < 2 && (<>
                    <Button onClick={() => nextLevel()}>Next Level</Button>
                </>)}
            </div>
            <Survey />
        </Modal>
    );
};

export default EndModal;
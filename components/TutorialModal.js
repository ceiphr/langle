import React from 'react';
import { Modal } from '@mantine/core';

import { Letter } from '@components/WordGrid';
import { LetterType } from '@data/enums';
import styles from '@styles/WordGrid.module.css';

const TutorialModal = ({ isOpen, setIsOpen }) => {
    const examples = ["llamo", "gusta"]

    return (
        <Modal
            opened={isOpen}
            onClose={() => setIsOpen(false)}
            title="Tutorial:"
        >
            <p>Guess the <strong>LANGLE</strong> in four tries.<br /><br /> There are three
                levels everyday. The number of allowed tries is decreased by
                one each level. Word length may increase in higher levels.
            </p>
            <hr />
            <p>Examples:</p>
            <div className={styles.gridRow}>
                {[...examples[0]].map((letter) => {
                    let type = ""
                    letter = letter.toUpperCase()

                    if (letter === "A")
                        type = LetterType.Correct
                    else if (letter === "O")
                        type = LetterType.InWord

                    return <Letter key={letter} type={type} letter={letter} />
                })}
            </div>
            <p>The letter <strong>A</strong> is in the word in the correct spot. The letter <strong>O</strong> is in the word, but in the wrong spot.</p>
            <div className={styles.gridRow}>
                {[...examples[1]].map((letter) => {
                    let type = ""
                    letter = letter.toUpperCase()

                    if (letter === "A")
                        type = LetterType.InWord
                    else if (letter === "U")
                        type = LetterType.Incorrect

                    return <Letter key={letter} type={type} letter={letter} />
                })}
            </div>
            <p>The letter <strong>U</strong> is not in the word. The letter <strong>A</strong> is in the word, but in the wrong spot.</p>
        </Modal>
    );
};

export default TutorialModal;
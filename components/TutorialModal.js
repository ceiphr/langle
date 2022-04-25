import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from '@mantine/core';

import { Letter } from '@components/WordGrid';
import { LetterType } from '@data/enums';
import styles from '@styles/WordGrid.module.css';

const TutorialModal = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch();
    const examples = ["llamo", "gusta"]

    const handleLanguageChange = (language) => {
        dispatch({ type: "SET_LANGUAGE", payload: language });
        setIsOpen(false);
    }

    return (
        <Modal
            opened={isOpen}
            onClose={() => setIsOpen(false)}
            title="Tutorial:"
        >
            <p>
                Guess the <strong>LANGLE</strong> in four tries.<br /> There are three
                levels everyday. The number of allowed tries is decreased each level. Word length may increase in higher levels.
            </p>
            <hr />
            <p>Examples:</p>
            <div className={styles.gridRow}>
                {[...examples[0]].map((letter, i) => {
                    let type = ""
                    letter = letter.toUpperCase()

                    if (letter === "A")
                        type = LetterType.Correct
                    else if (letter === "O")
                        type = LetterType.InWord

                    return <Letter key={letter + i + `tutorial`} type={type} letter={letter} />
                })}
            </div>
            <p>The letter <strong>A</strong> is in the word in the correct spot. The letter <strong>O</strong> is in the word, but in the wrong spot.</p>
            <div className={styles.gridRow}>
                {[...examples[1]].map((letter, i) => {
                    let type = ""
                    letter = letter.toUpperCase()

                    if (letter === "A")
                        type = LetterType.InWord
                    else if (letter === "U")
                        type = LetterType.Incorrect

                    return <Letter key={letter + i + `tutorial`} type={type} letter={letter} />
                })}
            </div>
            <p>The letter <strong>U</strong> is not in the word. The letter <strong>A</strong> is in the word, but in the wrong spot.</p>
            <hr />
            <p>Choose your language:</p>
            <div className={styles.gridRow}>
                <Button className={styles.button} onClick={() => handleLanguageChange("spanish")}>Spanish</Button>
                <Button onClick={() => handleLanguageChange("french")}>French</Button>
            </div>
            <p>You can change your language at any time from the navigation bar.</p>
        </Modal>
    );
};

export default TutorialModal;
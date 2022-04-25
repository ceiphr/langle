import React from 'react';

import { LetterType } from '@data/enums';
import styles from '@styles/Keyboard.module.css';

const Key = ({ letterKey, word, guess, board, onClick }) => {
    let type = "";

    if (letterKey === "")
        type = LetterType.Hidden;
    else
        board.map((row, i) => {
            if (i >= guess)
                return;

            row.map((letter, j) => {
                if (letter !== letterKey)
                    return;
                if (word[j] === letter)
                    type = LetterType.Correct;
                else if (letter !== "" && word.includes(letter))
                    type = LetterType.InWord;
                else if (letter !== "")
                    type = LetterType.Incorrect;
            });
        });

    return (
        <div className={styles.key.concat(` ${type}`)} onClick={onClick}>
            <span>{letterKey}</span>
        </div>
    );
}

const Keyboard = ({ board, word, guess, takeInput }) => {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        row3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"];

    return (
        <div className={styles.keyboard}>
            <div className={styles.keyboardRow}>
                {row1.map((letter, i) => <Key key={i} letterKey={letter} guess={guess} board={board} word={word} onClick={() => takeInput(letter)} />)}
            </div>
            <div className={styles.keyboardRow}>
                {row2.map((letter, i) => <Key key={i} letterKey={letter} guess={guess} board={board} word={word} onClick={() => takeInput(letter)} />)}
            </div>
            <div className={styles.keyboardRow}>
                {row3.map((letter, i) => <Key key={i} letterKey={letter} guess={guess} board={board} word={word} onClick={() => takeInput(letter)} />)}
            </div>
        </div>
    );
};

export default Keyboard;
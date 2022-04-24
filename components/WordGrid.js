import React from 'react';
import { LetterType } from '../data/enums';
import styles from '../styles/WordGrid.module.css';

const Letter = ({ letter, type }) => {
    return (
        <div className={styles.letter.concat(` ${type}`)}>
            <span>{letter}</span>
        </div>
    );
};

const WordGrid = ({ word, board, guess }) => {
    return (
        <>
            {board.map((row, i) => (
                <div key={i} className={styles.gridRow}>
                    {row.map((letter, j) => {
                        let type = "";
                        if (i >= guess)
                            type = "";
                        else if (word[j] === letter)
                            type = LetterType.Correct;
                        else if (letter !== "" && word.includes(letter))
                            type = LetterType.InWord;
                        else if (letter === "")
                            type = "";
                        else
                            type = LetterType.Incorrect;

                        return <Letter key={`${i}${j}`} type={type} letter={letter} />
                    })}
                </div>
            ))}
        </>
    );
};

export default WordGrid;
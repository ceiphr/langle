import React, { useEffect } from 'react';
import anime from 'animejs';

import { LetterType } from '@data/enums';
import styles from '@styles/WordGrid.module.css';

const Letter = ({ letter, stagger, type }) => {
    return (
        <div className={styles.letter.concat(` ${stagger ? type ? 'stagger' : '' : ''} ${type}`)}>
            <span>{letter}</span>
        </div>
    );
};

const WordGrid = ({ word, board, guess }) => {
    // TODO Delay modal while animation is playing
    // TODO Delay keyboard reveal while animation is playing
    useEffect(() => {
        anime({
            targets: '.stagger',
            opacity: [0, 1],
            delay: anime.stagger(250),
            duration: 1000,
            easing: 'easeOutExpo'
        })
    }, [guess]);

    return (
        <>
            {board.map((row, i) => (
                <div key={i} className={styles.gridRow}>
                    {row.map((letter, j) => {
                        let type = "",
                            stagger = false;
                        if (i === guess - 1)
                            stagger = true;

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

                        return <Letter key={`${i}${j}`} stagger={stagger} type={type} letter={letter} />
                    })}
                </div>
            ))}
        </>
    );
};

export default WordGrid;
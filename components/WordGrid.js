import React from 'react';

// Enum for letter types
const LetterType = {
    Correct: 'letter-green',
    InWord: 'letter-yellow',
    Incorrect: 'letter-gray'
}

const Letter = ({ letter, type }) => {
    return (
        <div className={"letter ".concat(type)}>
            <span>{letter}</span>
        </div>
    );
};

const WordGrid = ({ word, board, guess }) => {
    return (
        <>
            {board.map((row, i) => (
                <div key={i} className={i < guess ? "row reveal" :"row"}>
                    {row.map((letter, j) => {
                        let type = "";
                        if (word[j] === letter)
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
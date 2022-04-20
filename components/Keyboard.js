import React from 'react';

// Enum for letter types
const LetterType = {
    Correct: 'letter-green',
    InWord: 'letter-yellow',
    Incorrect: 'letter-gray',
    Hidden: 'blank'
}

const Key = ({ letterKey, word, board, onClick }) => {
    let type = "";

    if (letterKey === "")
        type = LetterType.Hidden;
    else
        board.map((row) => {
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
        <div className={"key ".concat(type)} onClick={onClick}>
            <span>{letterKey}</span>
        </div>
    );
}

const Keyboard = ({ board, word, addLetter, removeLetter, guessWord }) => {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        row2 = ["", "A", "S", "D", "F", "G", "H", "J", "K", "L", ""],
        row3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"];

    return (
        <div className="reveal">
            <div className="keyboard-row1">
                {row1.map((letter, i) => <Key key={i} letterKey={letter} board={board} word={word} onClick={() => addLetter(letter)} />)}
            </div>
            <div className="keyboard-row2">
                {row2.map((letter, i) => <Key key={i} letterKey={letter} board={board} word={word} onClick={() => addLetter(letter)} />)}
            </div>
            <div className="keyboard-row3">
                {row3.map((letter, i) => <Key key={i} letterKey={letter} board={board} word={word} onClick={() => addLetter(letter)} />)}
            </div>
        </div>
    );
};

export default Keyboard;
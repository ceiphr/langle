import { useState, useEffect } from "react";
import Head from "next/head";
import WordGrid from "../components/WordGrid";
import Keyboard from "../components/Keyboard";
import EndModal from "../components/EndModal";
import styles from "../styles/Home.module.css";

const answerWord = "llamo".toUpperCase();

export default function Home() {
    const allowedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // Consts to generate board state
    const rowSize = 3, colSize = 5,
        [board, setBoard] = useState(Array(rowSize).fill(0).map(() => new Array(colSize).fill("")))

    // Consts used for managing game state and input state
    const [gameState, setGameState] = useState(null),
        [endModalIsOpen, setEndModalIsOpen] = useState(false),
        [position, setPosition] = useState(0),
        [guess, setGuess] = useState(0)

    // Handles the input from the virtual or physical keyboard
    // and updates the position and board state
    const takeInput = (input) => {
        if (input === "DELETE") {
            removeLetter();
            return;
        }
        else if (input === "ENTER") {
            guessWord();
            return;
        }
        else if (gameState !== null)
            return;


        if (position < colSize && guess < rowSize) {
            let newBoard = JSON.parse(JSON.stringify(board));
            newBoard[guess][position] = input.toUpperCase();
            setBoard(newBoard);
            setPosition(position + 1);
        }
    };

    // Removes the last letter from the board
    // and updates the position and board state
    const removeLetter = () => {
        if (position > 0 && guess < rowSize) {
            let newBoard = [...board];
            newBoard[guess][position - 1] = "";
            setBoard(newBoard);
            setPosition(position - 1);
        }
    };

    // Guesses the word and updates the guess, position and game state
    const guessWord = () => {
        if (guess === rowSize)
            return;

        if (position === colSize && guess < rowSize - 1) {
            setGuess(guess + 1);
            if (board[guess].join("") === answerWord) {
                setGameState(true);
                setEndModalIsOpen(true);
            }
            setPosition(0);
        }
        else if (position === colSize && guess === rowSize - 1) {
            setGuess(guess + 1);
            if (board[guess].join("") === answerWord)
                setGameState(true);
            else
                setGameState(false);
            setEndModalIsOpen(true);
        }
    };

    // Handles the physical keyboard input
    const handleKeyDown = (event) => {
        if (gameState !== null)
            return;
        if (allowedLetters.includes(event.key.toUpperCase()))
            takeInput(event.key.toUpperCase());
        if (event.key === "Delete" || event.key === "Backspace")
            removeLetter();
        if (event.key === "Enter")
            guessWord();
    };

    // Hack for taking input from the physical keyboard
    useEffect(() => {
        if (gameState === null)
            setInterval(function () {
                document.getElementById("word-input").focus();
            }, 10);
    });

    return (
        <div className={styles.container}>
            <Head>
                <title>Langle</title>
                <meta
                    name="description"
                    content="It's like Wordle, but you learn a language!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Hola, me _____ Gregg.</h1>
                <WordGrid word={answerWord} board={board} guess={guess} />
                <Keyboard word={answerWord} board={board} takeInput={takeInput} guess={guess} />
            </main>
            <EndModal isOpen={endModalIsOpen} setIsOpen={setEndModalIsOpen} gameState={gameState} />
            {/* Hidden input used to take input from physical keyboard */}
            <input
                id="word-input"
                onKeyDown={handleKeyDown}
                type="text"
                className={styles.hiddenInput}
            />
        </div >
    );
}

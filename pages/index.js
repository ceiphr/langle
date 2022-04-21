import { useState, useEffect } from "react";
import Modal from 'react-modal';
import Head from "next/head";
import WordGrid from "../components/WordGrid";
import Keyboard from "../components/Keyboard";
import styles from "../styles/Home.module.css";

const answerWord = "llamo".toUpperCase();

export default function Home() {
    const m = 4, n = 5,
        [board, setBoard] = useState(Array(m).fill(0).map(() => new Array(n).fill(""))),
        [gameState, setGameState] = useState(null),
        [endModalIsOpen, setEndModalIsOpen] = useState(false),
        [position, setPosition] = useState(0),
        [guess, setGuess] = useState(0),
        allowedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const closeEndModal = () => {
        setEndModalIsOpen(false);
    }

    const addLetter = (input) => {
        if (input === "DELETE") {
            removeLetter();
            return;
        }
        else if (input === "ENTER") {
            guessWord();
            return;
        }
        else if (gameState !== null) {
            return;
        }

        if (position < 5 && guess < 4) {
            let newBoard = JSON.parse(JSON.stringify(board));
            newBoard[guess][position] = input.toUpperCase();
            setBoard(newBoard);
            setPosition(position + 1);
        }
    };

    const removeLetter = () => {
        if (position > 0 && guess < 4) {
            let newBoard = [...board];
            newBoard[guess][position - 1] = "";
            setBoard(newBoard);
            setPosition(position - 1);
        }
    };

    const guessWord = () => {
        if (position === 5 && guess < 4) {
            if (board[guess].join("") === answerWord) {
                setGameState(true);
                setEndModalIsOpen(true);
            }
            setPosition(0);
            setGuess(guess + 1);
        }
        if (guess === 3) {
            setGameState(false);
            setEndModalIsOpen(true);
        }
    };

    function handleKeyDown(event) {
        if (gameState !== null)
            return;
        if (allowedLetters.includes(event.key.toUpperCase()))
            addLetter(event.key.toUpperCase());
        if (event.key === "Delete" || event.key === "Backspace")
            removeLetter();
        if (event.key === "Enter")
            guessWord();
    };

    useEffect(() => {
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
                <h1 className={styles.title}>Hola, me _____ es Gregg.</h1>
                <WordGrid word={answerWord} board={board} guess={guess} />
                <Keyboard word={answerWord} board={board} addLetter={addLetter} guess={guess} />
            </main>
            <Modal
                isOpen={endModalIsOpen}
                onRequestClose={closeEndModal}
                ariaHideApp={false}
                contentLabel="Selected Option"
            >
                <div className="modal-close" onClick={closeEndModal}>X</div>
                <h1 className="end-title">You {gameState ? "win" : "lose"}!</h1>
            </Modal>
            <input
                id="word-input"
                onKeyDown={handleKeyDown}
                type="text"
                className="hidden-input"
            />
        </div>
    );
}

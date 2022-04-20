import { useState } from "react";
import Modal from 'react-modal';
import Head from "next/head";
import WordGrid from "../components/WordGrid";
import Keyboard from "../components/Keyboard";
import styles from "../styles/Home.module.css";

const answerWord = "llamo".toUpperCase();

const defaultGameState = {
    win: false,
    lose: false
}

export default function Home() {
    const m = 4, n = 5,
        [board, setBoard] = useState(Array(m).fill(0).map(() => new Array(n).fill(""))),
        [gameState, setGameState] = useState(defaultGameState),
        [endModalIsOpen, setEndModalIsOpen] = useState(false),
        [position, setPosition] = useState(0),
        [guess, setGuess] = useState(0);
    // allowedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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
        else if (gameState.lose || gameState.win) {
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
                setGameState({ ...gameState, win: true });
                setEndModalIsOpen(true);
            }
            setPosition(0);
            setGuess(guess + 1);
        }
        if (guess === 4) {
            setGameState({ ...gameState, lose: true });
            setEndModalIsOpen(true);
        }
    };

    // useEffect(() => {
    //     document.addEventListener("keydown", function (event) {
    //         if (gameState.win || gameState.lose)
    //             return;
    //         if (allowedLetters.includes(event.key.toUpperCase()))
    //             addLetter(event.key.toUpperCase());
    //         if (event.key === "Delete")
    //             removeLetter();
    //         if (event.key === "Enter")
    //             guessWord();
    //     });
    // });

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
                contentLabel="Example Modal"
            >
                <button onClick={closeEndModal}>close</button>
                <h1>You {gameState.win ? "win" : "lose"}!</h1>
            </Modal>
        </div>
    );
}

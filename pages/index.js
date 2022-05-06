import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import Head from "next/head";
import Script from 'next/script'

import Navigation from "@components/Navigation";
import WordGrid from "@components/WordGrid";
import Keyboard from "@components/Keyboard";
import EndModal from "@components/EndModal";
import TutorialModal from "@components/TutorialModal";
import { spanishProblems, frenchProblems } from "@data/problems";
import styles from "@styles/Home.module.css";

export default function Home() {
    const dispatch = useDispatch();
    const allowedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    // Consts used for managing game state and input state
    const language = useSelector(state => state.language),
        day = useSelector(state => state.day),
        gameState = useSelector(state => state.gameState),
        guess = useSelector(state => state.guess),
        level = useSelector(state => state.level),
        prompt = useSelector(state => state.prompt),
        answerWord = useSelector(state => state.answerWord),
        tutorial = useSelector(state => state.tutorial);

    const [endModalIsOpen, setEndModalIsOpen] = useState(false);

    // Handles the input from the virtual or physical keyboard
    // and updates the position and board state
    const takeInput = (input) => {
        if (input === "DELETE") {
            dispatch({ type: "REMOVE_CHAR" });
            return;
        }
        else if (input === "ENTER") {
            dispatch({ type: "CHECK_WORD" });
            setTimeout(() => {
                if (gameState !== null)
                    setEndModalIsOpen(true);
            }, 2500);
            return;
        }
        else if (gameState !== null)
            return;

        dispatch({ type: "ADD_CHAR", payload: input });
    };

    // Handles the physical keyboard input
    const handleKeyDown = (event) => {
        if (gameState !== null)
            return;
        if (allowedLetters.includes(event.key.toUpperCase()))
            takeInput(event.key.toUpperCase());
        if (event.key === "Delete" || event.key === "Backspace")
            dispatch({ type: "REMOVE_CHAR" });
        if (event.key === "Enter") {
            dispatch({ type: "CHECK_WORD" });
        }
    };

    // Hack for taking input from the physical keyboard
    useEffect(() => {
        const focusInput = setInterval(function () {
            document.getElementById("word-input").focus();
        }, 10);
        if (gameState !== null)
            clearInterval(focusInput);
        return () => clearInterval(focusInput);
    }, [gameState]);

    useEffect(() => {
        let problems = language === "spanish" ? spanishProblems : frenchProblems;

        const today = new Date();
        const index = today.getDay() % problems.length;
        let levelString = "easy";

        if (day !== today.getDay()) {
            dispatch({ type: "SET_DAY", payload: today.getDay() });
            setTimeout(() => {
                dispatch({ type: "SET_GAMESTATE", payload: null });
            }, 500);
        }

        if (level === 0)
            levelString = "easy";
        else if (level === 1)
            levelString = "medium";
        else if (level === 2)
            levelString = "hard";

        if (prompt !== problems[index][levelString].question &&
            answerWord !== problems[index][levelString].answer) {
            dispatch({
                type: "SET_PROMPT",
                payload: {
                    question: problems[index][levelString].question,
                    answer: problems[index][levelString].answer.toUpperCase(),
                }
            });
        }
    }, [day, level, language, prompt, answerWord]);

    useEffect(() => {
        if (gameState === null)
            setEndModalIsOpen(false);
        setTimeout(() => {
            if (gameState !== null)
                setEndModalIsOpen(true);
            else
                setEndModalIsOpen(false);
        }, 2500);
    }, [gameState]);

    const preferredColorScheme = useColorScheme();
    const theme = useSelector(state => state.theme);

    return (
        <MantineProvider theme={{ colorScheme: theme !== "" ? theme : preferredColorScheme }} withGlobalStyles>
            <div className={styles.container}>
                <Head>
                    <title>Langle</title>
                    <meta
                        name="description"
                        content="It's like Wordle, but you learn a language!"
                    />
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <TutorialModal isOpen={tutorial} setIsOpen={() => dispatch({ type: "SET_TUTORIAL" })} />
                <Navigation />
                <main className={styles.main}>
                    <h1 className={styles.title}>{prompt}</h1>
                    <WordGrid />
                    <Keyboard takeInput={takeInput} />
                </main>
                <EndModal isOpen={endModalIsOpen} setIsOpen={setEndModalIsOpen} />
                {/* Hidden input used to take input from physical keyboard */}
                <input
                    aria-hidden="true"
                    id="word-input"
                    inputMode="none"
                    onKeyDown={handleKeyDown}
                    type="text"
                    className={styles.hiddenInput}
                />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-X66M623B3H"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        
                        gtag('config', 'G-X66M623B3H');
                    `}
                </Script>
            </div>
        </MantineProvider>
    );
}

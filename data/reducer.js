import { Types } from "@data/enums"

const initialGameState = {
    theme: "",
    surveyCompleted: false,
    day: 0,
    dim: { rows: 4, cols: 5 },
    board: Array(4).fill(0).map(() => new Array(5).fill("")),
    gameState: null,
    language: "spanish",
    prompt: "",
    answerWord: "",
    level: 0,
    position: 0,
    guess: 0,
    tutorial: true,
}

export const gameReducer = (state = initialGameState, { type, payload }) => {
    switch (type) {
        case Types.ADD_CHAR:
            if (state.position < state.dim.cols && state.guess < state.dim.rows) {
                let newBoard = JSON.parse(JSON.stringify(state.board));
                newBoard[state.guess][state.position] = payload.toUpperCase();
                state = {
                    ...state,
                    position: state.position + 1,
                    board: newBoard,
                }
            }
            return state

        case Types.REMOVE_CHAR:
            if (state.position > 0 && state.guess < state.dim.rows) {
                let newBoard = [...state.board];
                newBoard[state.guess][state.position - 1] = "";
                state = {
                    ...state,
                    position: state.position - 1,
                    board: newBoard,
                }
            }
            return state

        case Types.CHECK_WORD:
            let newGuess = state.guess;
            let newGameState = null;
            let newPosition = state.position;

            if (state.guess === state.dim.rows)
                return state;

            if (state.position === state.dim.cols) {
                newGuess = state.guess + 1;
                if (state.board[state.guess].join("") === state.answerWord)
                    newGameState = true;
                else if (state.guess === state.dim.rows - 1)
                    newGameState = false;
                newPosition = 0;
            }
            return {
                ...state,
                position: newPosition,
                gameState: newGameState,
                guess: newGuess,
            }

        case Types.NEXT_LEVEL:
            const newState = {
                ...state,
                position: 0,
                guess: 0,
                level: state.level + 1,
            }
            return newState

        case Types.RESET_LEVEL:
            const resetState = {
                ...state,
                position: 0,
                guess: 0,
                level: 0,
            }
            return resetState

        case Types.SET_GAMESTATE:
            return {
                ...state,
                gameState: payload,
            }

        case Types.SET_LANGUAGE:
            return {
                ...state,
                language: payload,
            }

        case Types.SET_PROMPT:
            return {
                ...state,
                prompt: payload.question,
                answerWord: payload.answer,
                board: Array(4 - state.level).fill(0).map(() => new Array(payload.answer.length).fill("")),
                dim: {
                    rows: 4 - state.level,
                    cols: payload.answer.length,
                },
                position: 0,
                guess: 0,
            }

        case Types.SET_TUTORIAL:
            return {
                ...state,
                tutorial: false,
            }

        case Types.SET_DAY:
            return {
                ...state,
                day: payload,
                level: 0,
                position: 0,
                guess: 0,
            }

        case Types.SET_THEME:
            return {
                ...state,
                theme: payload
            }

        case Types.SET_SURVEY_COMPLETED:
            return {
                ...state,
                surveyCompleted: true,
            }

        default:
            return state
    }
}
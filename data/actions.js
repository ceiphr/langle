export const addChar = key => ({
    type: types.ADD_CHAR,
    payload: key
})

export const removeChar = () => ({
    type: types.REMOVE_CHAR,
})

export const checkWord = () => ({
    type: types.CHECK_WORD,
})

export const nextLevel = () => ({
    type: types.NEXT_LEVEL,
})

export const resetGameState = state => ({
    type: types.SET_GAMESTATE,
    payload: state
})

export const setLanguage = language => ({
    type: types.SET_LANGUAGE,
    payload: language
})

export const setPrompt = (question, answer) => ({
    type: types.SET_PROMPT,
    payload: {
        question,
        answer
    }
})

export const setTutorial = tutorial => ({
    type: types.SET_TUTORIAL,
})

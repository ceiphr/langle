import { useMemo } from 'react'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { gameReducer } from '@data/reducer'

const persistConfig = {
    timeout: 100,
    key: 'root',
    storage: storage,
}

let store

function initStore(initialState) {
    const persistedReducer = persistReducer(persistConfig, gameReducer)
    return createStore(
        persistedReducer,
        initialState
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        store = undefined
    }

    if (typeof window === 'undefined') return _store
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    const persistor = persistStore(store)
    return { store, persistor }
}

import { Provider } from 'react-redux'
import { useStore } from '@data/store'
import { PersistGate } from 'redux-persist/integration/react'
import { MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import '@styles/globals.css'

function MyApp({ Component, pageProps }) {
  const preferredColorScheme = useColorScheme();
  const { store, persistor } = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider theme={{ colorScheme: (preferredColorScheme === 'dark' ? 'dark' : 'light') }} withGlobalStyles><Component {...pageProps} />
        </MantineProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp

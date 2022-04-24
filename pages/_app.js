import { MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const preferredColorScheme = useColorScheme();
  return <MantineProvider theme={{ colorScheme: (preferredColorScheme === 'dark' ? 'dark' : 'light') }} withGlobalStyles><Component {...pageProps} /></MantineProvider>
}

export default MyApp

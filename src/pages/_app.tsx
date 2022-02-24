import { AppProps } from 'next/app';
import {  ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query'
import { SidebarDrawerProvider } from '../components/contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';

if(process.env.NODE_ENV === 'development'){
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
  // <ChakraProvider resetCSS={false} theme={theme} >

      <QueryClientProvider client={queryClient}>

     
      <ChakraProvider theme={theme} >
        <SidebarDrawerProvider>
        <Component {...pageProps} />
        </SidebarDrawerProvider>

    </ChakraProvider>
    </QueryClientProvider>
  )

}

export default MyApp

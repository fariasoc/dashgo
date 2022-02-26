import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from '../styles/theme';
import { QueryClientProvider } from 'react-query'
import { SidebarDrawerProvider } from '../components/contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/queryClient';



if(process.env.NODE_ENV === 'development'){
  makeServer();
}



function MyApp({ Component, pageProps }: AppProps) {
  return (
  // <ChakraProvider resetCSS={false} theme={theme} >

      <QueryClientProvider client={queryClient}>

     
      <ChakraProvider theme={theme} >
        <SidebarDrawerProvider>
        <Component {...pageProps} />
        </SidebarDrawerProvider>

    </ChakraProvider>
    <ReactQueryDevtools />
    </QueryClientProvider>
  )

}

export default MyApp

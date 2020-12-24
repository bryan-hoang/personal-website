import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;

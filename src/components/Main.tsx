import { Stack, StackProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const Main: FunctionComponent<StackProps> = (props) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    mt="-45vh"
    pt="8rem"
    px="1rem"
    {...props}
  />
);

export default Main;

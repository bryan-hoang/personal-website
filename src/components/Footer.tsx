import { Flex, FlexProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

export const Footer: FunctionComponent<FlexProps> = (props) => (
  <Flex as="footer" py="8rem" {...props} />
);

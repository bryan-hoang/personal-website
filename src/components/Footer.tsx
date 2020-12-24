import { Flex, FlexProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const Footer: FunctionComponent<FlexProps> = (props) => (
  <Flex as="footer" py="8rem" {...props} />
);

export default Footer;

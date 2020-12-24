import { Flex, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type HeroProps = { title: string };
const Hero: FunctionComponent<HeroProps> = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'with-chakra-ui-typescript',
};

export default Hero;

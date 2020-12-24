import { useColorMode, Switch } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const DarkModeSwitch: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};

export default DarkModeSwitch;

import { RectButton } from 'react-native-gesture-handler';
import { Text } from '../Text';
import { styles } from './styles';
import { buttonProps } from './types';

export const Button = ({ onPress, title, enabled }: buttonProps) => {
  return (
    <RectButton
      enabled={enabled}
      style={[
        styles.loginButton,
        { backgroundColor: enabled ? '#0074E4' : '#104A82' },
      ]}
      onPress={onPress}
    >
      <Text font="brutalBold" color="White">
        {title}
      </Text>
    </RectButton>
  );
};

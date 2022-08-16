import { Text as RNText } from 'react-native';
import { colorNames, Colors } from '../Theme/Colors';
import { typographyNames } from '../Theme/Typography';

interface TextProps {
  children: React.ReactNode;
  color?: colorNames;
  font: typographyNames;
  size?: number;
  onPress?: () => void;
  textDecorationLine?: 'underline' | 'none';
  small?: boolean;
  regular?: boolean;
}

export const Text = ({
  children,
  onPress,
  color = 'White',
  font,
  size = 20,
  textDecorationLine,
  small,
  regular,
  ...rest
}: TextProps) => (
  <RNText
    onPress={onPress}
    style={{
      fontFamily: font,
      color: Colors[color],
      fontSize: size,
      textDecorationLine: textDecorationLine,
      width: (small && '45%') || (regular && '90%'),
    }}
    {...rest}
  >
    {children}
  </RNText>
);

import { Text as RNText } from 'react-native';
import { colorNames, Colors } from '../constants/Colors';
import { typographyNames } from '../constants/Typography';

interface TextProps {
  children: string;
  color?: colorNames;
  font: typographyNames;
  size?: number;
  onPress?: () => void;
}

export const Text = ({ children, onPress , color = 'White', font, size = 20 }: TextProps) => (
    <RNText
        onPress={onPress}
        style={{
            fontFamily: font,
            color: Colors[color],
            fontSize: size,
        }}
    >
        {children}
    </RNText>
);

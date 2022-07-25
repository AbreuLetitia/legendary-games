import { TextInput, TextInputProps, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { width } from '../constants/Responsive';
import { Text } from '../Text';
// import { Icon } from '../Icon';
import { styles } from './styles';

export interface InputProps extends TextInputProps {
  small?: boolean;
  message?: string;
}

export const Input = ({ message, small, ...rest }: InputProps) => {
  return (
    <View
      style={[
        styles.textInput,
        { width: small ? '45%' : '100%' },
        {
          borderColor: message ? Colors.Red : Colors.MediumGrey,
        },
      ]}
    >
      <TextInput
        style={styles.inputStyle}
        placeholderTextColor={Colors.Grey}
        {...rest}
      />
      {
        <Text font="brutalRegular" size={width(4)} color="Red">
          {message}
        </Text>
      }
    </View>
  );
};

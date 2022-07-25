import { TextInput, TextInputProps, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { width } from '../constants/Responsive';
import { Text } from '../Text';
import { styles } from './styles';

export interface InputProps extends TextInputProps {
  small?: boolean;
  errorMessage?: string;
}

export const Input = ({ errorMessage, small, ...rest }: InputProps) => {
  return (
    <View
      style={[
        styles.textInput,
        { width: small ? '45%' : '100%' },
        {
          borderColor: errorMessage ? Colors.Red : Colors.MediumGrey,
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
          {errorMessage}
        </Text>
      }
    </View>
  );
};

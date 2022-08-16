import { TextInput, TextInputProps, View } from 'react-native';
import { Colors } from '../Theme/Colors';
import { width } from '../Theme/Responsive';
import { Text } from '../Text/Text';
import { styles } from './styles';
import { Spacer } from '../Spacer/Spacer';

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
        <>
          <Spacer amount={0.5} />
          <Text font="brutalRegular" size={width(3.5)} color="Red">
            {errorMessage}
          </Text>
        </>
      }
    </View>
  );
};

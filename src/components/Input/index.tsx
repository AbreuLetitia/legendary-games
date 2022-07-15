import { TextInput, TextInputProps, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { Text } from '../Text';
// import { Icon } from '../Icon';
import { styles } from './styles';

export interface InputProps extends TextInputProps {
  small?: boolean;
  messege?: string;
  validationField?: boolean;
}

export const Input = ({
  validationField = false,
  messege,
  small,
  ...rest
}: InputProps) => {
  return (
    // <>
    <View
      style={[
        styles.textInput,
        { width: small ? '45%' : '100%' },
        {
          borderColor: validationField ? Colors.Red : Colors.MediumGrey,
        },
      ]}
    >
      <TextInput placeholderTextColor={Colors.Grey} {...rest} />
      {
        <Text font="brutalBold" size={13} color="Red">
          {messege}
        </Text>
      }
    </View>
    // </>
  );
};

import { TextInput, TextInputProps, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { height, width } from '../constants/Responsive';
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
    <View
      style={[
        styles.textInput,
        { width: small ? width(45) : width(90) },
        {
          borderColor: validationField ? Colors.Red : Colors.MediumGrey,
        },
      ]}
    >
      <TextInput placeholderTextColor={Colors.Grey} {...rest} />
      {
        <Text font="brutalBold" size={height(5)} color="Red">
          {messege}
        </Text>
      }
    </View>
  );
};

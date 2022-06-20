import { TextInput, TextInputProps } from 'react-native';
import { Colors } from '../constants/Colors';
import { styles } from './styles';

export const Input = ({ ...rest}: TextInputProps) => {
    const validationEmail = '';

    return (
        <TextInput
            style={[styles.textInput, { borderColor: validationEmail ? Colors.Red : Colors.MediumGrey }]}
            placeholderTextColor={Colors.Grey}
            {...rest}
        />
    );
};

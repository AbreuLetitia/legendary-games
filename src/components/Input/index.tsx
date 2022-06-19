import { TextInput, TextInputProps } from 'react-native';
import { Colors } from '../constants/Colors';
import { styles } from './styles';

export const Input = ({ ...rest}: TextInputProps) => {
    const validationEmail = '';

    return (
        <TextInput
        // onChangeText={onChangeText}
            style={[styles.textInput, { borderColor: validationEmail ? Colors.Red : Colors.MediumGrey }]}
            // placeholder={placeholder}
            placeholderTextColor={Colors.Grey}
            {...rest}
        />
    );
};

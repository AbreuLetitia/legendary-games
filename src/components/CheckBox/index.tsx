import { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { styles } from './styles';

interface checkBoxProps {
  text: string;
  onPress: (checked: boolean) => void;
}

export const CheckBox = ({ onPress, text } : checkBoxProps) => {
    const [checked, setChecked] = useState (false);
    return   (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress = {() =>
            {
                setChecked(!checked);
                onPress(checked);}}>
                <View
                    style={[
                        styles.checkBoxStyle,
                        {
                            backgroundColor: checked ? Colors.Blue : 'transparent',
                            borderColor: checked ? Colors.Black : Colors.MediumGrey,
                        },
                    ]}
                >
                    { checked && <Icon name={'CheckMark'} />}
                </View>
            </TouchableWithoutFeedback>
            <Text font="brutalRegular" color="Grey" size={17}>
                {text}
            </Text>
        </View>
    );
};

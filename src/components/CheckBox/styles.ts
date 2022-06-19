import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkBoxStyle: {
        borderWidth: 1,
        borderColor: Colors.MediumGrey,
        borderRadius: 4,
        width: 30,
        height: 30,
        marginRight: 10,
    },
});

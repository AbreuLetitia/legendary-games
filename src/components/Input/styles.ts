import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { height, width } from '../constants/Responsive';

export const styles = StyleSheet.create({
  textInput: {
    height: height(8),
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
  },
  inputStyle: {
    padding: width(6),
    width: '100%',
    height: '100%',
    color: Colors.White,
  },
});

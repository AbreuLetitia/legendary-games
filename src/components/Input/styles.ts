import { StyleSheet } from 'react-native';
import { Colors } from '../Theme/Colors';
import { height, width } from '../Theme/Responsive';

export const styles = StyleSheet.create({
  textInput: {
    height: height(8),
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
  },
  inputStyle: {
    padding: width(6),
    color: Colors.White,
  },
});

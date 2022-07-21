import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { height, width } from '../constants/Responsive';

export const styles = StyleSheet.create({
  loginButton: {
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 4,
    backgroundColor: Colors.Blue,
    width: width(90),
    height: height(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

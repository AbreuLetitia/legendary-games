import { StyleSheet } from 'react-native';
import { Colors } from '../Theme/Colors';
import { height, width } from '../Theme/Responsive';

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

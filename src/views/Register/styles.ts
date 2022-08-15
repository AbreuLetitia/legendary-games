import { StyleSheet } from 'react-native';
import { Colors } from '../../components/Theme/Colors';
import { width } from '../../components/Theme/Responsive';

export const styles = StyleSheet.create({
  registerContainer: {
    paddingHorizontal: width(5),
    alignItems: 'center',
    backgroundColor: Colors.DarkGrey,
  },
  fullNameContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkBoxContainer: {
    width: '100%',
  },
  signInLink: {
    paddingHorizontal: width(6),
    alignItems: 'center',
  },
});

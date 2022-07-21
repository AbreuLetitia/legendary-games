import { StyleSheet } from 'react-native';
import { Colors } from '../../components/constants/Colors';
import { width } from '../../components/constants/Responsive';

export const styles = StyleSheet.create({
  registerContainer: {
    width: width(100),
    paddingHorizontal: width(6),
    alignItems: 'center',
    backgroundColor: Colors.DarkGrey,
  },
  fullNameContainer: {
    width: width(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signInLink: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: width(90),
    paddingHorizontal: width(6),
  },
});

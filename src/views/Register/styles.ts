import { StyleSheet } from 'react-native';
import { Colors } from '../../components/constants/Colors';

export const styles = StyleSheet.create({
  registerContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: Colors.DarkGrey,
  },
  fullNameContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signInLink: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '8%',
  },
});

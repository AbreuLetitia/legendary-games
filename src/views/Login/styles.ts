import { StyleSheet } from 'react-native';
import { Colors } from '../../components/constants/Colors';
import { height, width } from '../../components/constants/Responsive';

export const styles = StyleSheet.create({
  container: {
    width: width(100),
    height: height(100),
    paddingHorizontal: width(5),
    alignItems: 'center',
    backgroundColor: Colors.DarkGrey,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width(90),
  },
});

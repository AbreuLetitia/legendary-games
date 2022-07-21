import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { height, width } from '../constants/Responsive';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxStyle: {
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    width: width(8),
    height: height(4),
    marginRight: width(2),
  },
});

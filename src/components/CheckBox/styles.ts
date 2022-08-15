import { StyleSheet } from 'react-native';
import { Colors } from '../Theme/Colors';
import { height, width } from '../Theme/Responsive';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxStyle: {
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    width: width(6),
    height: height(3),
    marginRight: width(2),
  },
});

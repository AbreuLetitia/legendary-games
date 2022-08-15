import { StyleSheet } from 'react-native';
import { Colors } from '../Theme/Colors';
import { height, width } from '../Theme/Responsive';

export const styles = StyleSheet.create({
  selectedContainer: {
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    width: width(90),
    height: height(8),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width(4),
  },
  dropDownContainer: {
    width: width(90),
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    color: Colors.White,
  },
  selectedOptionContainer: {
    color: Colors.White,
  },
  optionsContainer: {
    width: width(90),
    borderWidth: 1,
    borderRadius: width(1),
    borderColor: Colors.MediumGrey,
    padding: width(3),
    color: Colors.White,
    backgroundColor: Colors.TinGrey,
  },
  selected: {
    width: width(90),
    height: height(8),
    color: Colors.White,
  },
});

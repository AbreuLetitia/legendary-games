import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { height, width } from '../constants/Responsive';

export const styles = StyleSheet.create({
  dropDownContainer: {
    width: width(100),
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    padding: width(20),
    color: Colors.White,
  },
  selectedOptionContainer: {
    width: width(100),
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    padding: width(20),
    color: Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionsContainer: {
    width: width(100),
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    padding: width(20),
    color: Colors.White,
    backgroundColor: Colors.MediumGrey,
  },
  selected: {
    width: width(100),
    height: height(60),
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    padding: width(20),
    color: Colors.White,
  },
});

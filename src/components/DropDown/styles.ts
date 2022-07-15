import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export const styles = StyleSheet.create({
  dropDownContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    padding: 20,
    color: Colors.White,
  },
  selectedOptionContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    padding: 20,
    color: Colors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionsContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    padding: 20,
    color: Colors.White,
    backgroundColor: Colors.MediumGrey,
  },
  selected: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: Colors.MediumGrey,
    borderRadius: 4,
    padding: 20,
    color: Colors.White,
  },
});

import { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Colors } from '../Theme/Colors';
import { Icon } from '../Icon/Icon';
import { Spacer } from '../Spacer/Spacer';
import { Text } from '../Text/Text';
import { styles } from './styles';

interface DropDownProps {
  options: string[];
  initialOptionIndex?: number;
}

export const DropDown = ({
  options = [],
  initialOptionIndex = 1,
}: DropDownProps) => {
  const [selected, setSelected] = useState(options[initialOptionIndex]);
  const initialOption = options.filter((option) => option !== selected);
  const [open, setOpen] = useState(false);
  const [filteredOptions, setFilteredOption] = useState(initialOption);

  const onDropDownPress = () => setOpen(!open);

  const onSelect = (option: string) => {
    setSelected(option);
  };

  const onOptionPress = (selectedOption: string) => {
    onSelect(selectedOption);
    setOpen(false);

    const updatedOptions = options.filter(
      (option) => option !== selectedOption
    );

    setFilteredOption(updatedOptions);
  };
  return (
    <>
      <TouchableWithoutFeedback
        onPress={onDropDownPress}
        style={styles.dropDownContainer}
      >
        <View
          style={[
            styles.selectedContainer,
            {
              borderColor: open ? Colors.White : Colors.MediumGrey,
              borderWidth: open ? 1.5 : 1,
            },
          ]}
        >
          <View style={styles.selectedOptionContainer}>
            <Text size={14} color="White" font="brutalRegular">
              Country
            </Text>
            <Text font="brutalRegular" color="White" size={16}>
              {selected}
            </Text>
          </View>
          <Icon name={open ? 'ArrowUp' : 'ArrowDown'} />
        </View>
      </TouchableWithoutFeedback>
      <Spacer amount={0.5} />
      {open && (
        <View style={styles.optionsContainer}>
          {filteredOptions.map((option, index) => (
            <RectButton onPress={() => onOptionPress(option)} key={index}>
              <Spacer amount={1} />
              <Text size={16} font="brutalRegular" color="White">
                {option}
              </Text>
            </RectButton>
          ))}
        </View>
      )}
    </>
  );
};

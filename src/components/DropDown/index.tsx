import { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Icon } from '../Icon';
import { Spacer } from '../Spacer';
import { Text } from '../Text';
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
        <View style={styles.selectedOptionContainer}>
          <Text font="brutalRegular" color="White">
            {selected}
          </Text>
          <Icon name="ArrowDown" />
        </View>
      </TouchableWithoutFeedback>
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

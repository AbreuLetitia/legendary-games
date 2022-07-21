import { Dimensions, View } from 'react-native';

export const Spacer = ({ amount = 0 }: { amount?: number }) => (
  <View
    testID="spacer"
    style={{
      marginTop: Dimensions.get('window').height * (amount / 100),
    }}
  />
);

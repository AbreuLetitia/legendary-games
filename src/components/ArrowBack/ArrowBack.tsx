import { RectButton } from 'react-native-gesture-handler';
import { Icon } from '../Icon/Icon';
import { Spacer } from '../Spacer/Spacer';
import { styles } from './styles';

export const ArrowBack = ({ onPress }) => (
  <RectButton style={styles.arrowBackContainer} onPress={onPress}>
    <Spacer amount={2} />
    <Icon name="ArrowBack" />
  </RectButton>
);

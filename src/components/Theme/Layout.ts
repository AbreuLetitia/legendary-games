import { Dimensions } from 'react-native';

import { Colors } from './Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface ILayout {
  paddingHorizontal: number;
  window: {
    width: number;
    height: number;
  };
  isSmallDevice: boolean;
}

export const Layout: ILayout = {
  paddingHorizontal: width * (5 / 100),
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,

  activeOpacty: 0.6,
  rippleColor: Colors.Grey,
};

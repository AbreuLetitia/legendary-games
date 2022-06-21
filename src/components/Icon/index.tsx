import { createElement } from 'react';
import { View } from 'react-native';
import * as Icons from './iconDatabase';
import { IconProps } from './types';


export const Icon = ({name}: IconProps) => {
    if (name) {
        return createElement(Icons[name]);

    } else {
        return (<View />);
    }
};

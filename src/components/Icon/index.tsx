import { createElement } from 'react';
import { View } from 'react-native';
import * as Icons from './iconDatabase';

export const Icon = ({ name }) => {
    if (name) {
        return createElement(Icons[name]);

    } else {
        return (<View />);
    }
};

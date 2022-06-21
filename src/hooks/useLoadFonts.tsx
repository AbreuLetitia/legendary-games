import { useFonts } from 'expo-font';

export const useLoadFonts = () => {
    const [loaded] = useFonts({
        brutalBold: require('../assets/fonts/brutal-bold.ttf'),
        brutalRegular: require('../assets/fonts/brutal-regular.ttf'),
        brutalMedium: require('../assets/fonts/brutal-medium.ttf'),
        brutalLight: require('../assets/fonts/brutal-light.ttf'),
        brutalThin: require('../assets/fonts/brutal-thin.ttf'),
    });

    return [loaded];
};

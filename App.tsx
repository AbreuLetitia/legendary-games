import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './src/navigation';

export default function App() {
    const [loaded] = useFonts({
        brutalBold: require('./src/assets/fonts/brutal-bold.ttf'),
        brutalRegular: require('./src/assets/fonts/brutal-regular.ttf'),
        brutalMedium: require('./src/assets/fonts/brutal-medium.ttf'),
        brutalLight: require('./src/assets/fonts/brutal-light.ttf'),
        brutalThin: require('./src/assets/fonts/brutal-thin.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Navigator />
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './src/navigation';
import { useLoadFonts } from './src/hooks/useLoadFonts';
import { styles } from './appStyles';


export default function App() {
    const [loaded] = useLoadFonts();

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={styles.appStyle}>
                <Navigator />
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}

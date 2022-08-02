import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './src/navigation';
import { useLoadFonts } from './src/hooks/useLoadFonts';
import { styles } from './appStyles';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  const [loaded] = useLoadFonts();

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.appStyle}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

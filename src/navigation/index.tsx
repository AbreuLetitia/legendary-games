import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import views from './views';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {views.map(({ component, name }) => (
                    <Stack.Screen key={name} {...{ component, name }} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventDetails from './screens/event-details';
import LoginScreen from './screens/LoginScreen';
import HomeTab from './components/HomeTab';
import { SettingsProvider } from './components/settingsContext';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SettingsProvider value="hello">
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
            <Stack.Screen name="HomeTab" component={HomeTab} options={{headerShown: false}}/>
            <Stack.Screen name="EventDetails" component={EventDetails} 
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </SettingsProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'yellow',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

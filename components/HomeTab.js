import React, {useContext} from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from '../screens/details';
import Settings from '../screens/settings';
import Add from '../screens/add';
import {Ionicons} from '@expo/vector-icons';
import Home from '../screens/home';
import { SettingsContext } from './settingsContext';

const Tab = createBottomTabNavigator();
const HomeTab = () => {
  const [adminMode, setAdminMode]  = useContext(SettingsContext)

    return (
        <Tab.Navigator 
        screenOptions={({ route })=>({
          tabBarStyle: { 
            borderTopRightRadius: 50,
            height: 70,
            paddingBottom: 20,
            paddingTop: 10,
            position: 'absolute',
            shadowOffset: { width: 0, height: -7 },
            shadowRadius: 20,
            shadowColor: 'rgba(0,0,0, 1)',
            shadowOpacity: 0.25,
            elevation: 5,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'cog' : 'cog-outline';
            }
            else if (route.name === 'Details') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            else if (route.name === 'Add') {
              iconName = focused ? 'ios-add' : 'ios-add-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={25} color='#7387cd'/>;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Details" component={Details} />
        {adminMode && <Tab.Screen name="Add" component={Add} />}
        <Tab.Screen name="Settings" component={Settings} options={{ tabBarBadge: 3 }}/>
      </Tab.Navigator>
      
    )
}

export default HomeTab

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Network, Profile, Search} from '../screens';

const Stack = createNativeStackNavigator();
function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* ... */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Network" component={Network} />;
        <Stack.Screen name="Profile" component={Profile} />;
        <Stack.Screen name="Search" component={Search} />;
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;

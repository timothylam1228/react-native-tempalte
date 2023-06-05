import React from 'react';
import { Example, Home } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Example" component={Example} />
    </Tab.Navigator>
  );
};

export default MainNavigator;

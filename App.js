import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './WelcomeScreen';
import AllTodosScreen from './AllTodosScreen';
import AddTodosScreen from './AddTodosScreen';

import store from './redux/store'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
          <Tab.Screen name="All Todos" component={AllTodosScreen} />
          <Tab.Screen name="Add Todo" component={AddTodosScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

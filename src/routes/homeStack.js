import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Header } from '../components/index';
import { Home, Todos } from '../screens/index';

import theme from '../styles/theme.style';

const { Navigator, Screen } = createStackNavigator();

const headerOptions = {
  headerTitle: () => <Header />,
  title: 'Easy TODO List',
  headerStyle: {
    backgroundColor: theme.PRIMARY_COLOR,
  },
  headerTitleStyle: {
    color: theme.WHITE_COLOR,
  },
  headerTintColor: theme.WHITE_COLOR,
};

const HomeNavigator = () => (
  <Navigator>
    <Screen name="Home" component={Home} options={headerOptions} />
    <Screen name="Todos" component={Todos} options={headerOptions} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

import * as React from 'react';
import AppStyles from '../config/styles';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Search from 'app/screens/Search';
import SavedRepos from 'app/screens/SavedRepos';

import { ILoginState } from 'app/models/reducers/login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface IState {
  loginReducer: ILoginState;
}

const App: React.FC<IProps> = (props: IProps) => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedIn ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Search') {
                iconName = 'home';
              } else if (route.name === 'Saved Repositories') {
                iconName = 'list';
              }

              return <Feather name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: AppStyles.color.COLOR_PRIMARY,
            inactiveTintColor: AppStyles.color.COLOR_GREY,
          }}>
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Saved Repositories" component={SavedRepos} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;

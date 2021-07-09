import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Easing
} from 'react-native';
import List from './src/Screen/List';
import Detail from './src/Screen/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
enableScreens();



const Stack = createSharedElementStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List" headerMode="none">
        <Stack.Screen
          name="List"
          component={List}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {
                animation: "timing",
                config: { duration: 500, easing: Easing.inOut(Easing.ease) }
              },
              close: {
                animation: "timing",
                config: { duration: 500, easing: Easing.inOut(Easing.ease) }
              }
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress
                }
              }
            }
          })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


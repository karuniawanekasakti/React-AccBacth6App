import { View, Text } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Main, Login, Register } from "../../screen";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
      screenListeners={{
        state: (nav) => {
          console.log(JSON.stringify(nav, null, 2));
        },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default Routes;

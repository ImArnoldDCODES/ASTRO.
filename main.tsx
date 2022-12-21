import React from "react";
import Home from "./component/Home/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Market from "./component/Market/market";

export default function Main() {
  const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShadowVisible: false,
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Market" component={Market} />
        </Stack.Navigator>
  );
}

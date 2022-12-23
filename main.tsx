import React from "react";
import Home from "./component/Home/home";
import Market from "./component/Market/market";
import Cart from "./component/Cart/cart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function Main() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar animated={true} backgroundColor="" hidden={false} />
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShadowVisible: false,
          headerShown: false,
          contentStyle: {
            backgroundColor: "#f112",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="Cart" component={Cart}/>
      </Stack.Navigator>
    </>
  );
}

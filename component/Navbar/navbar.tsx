import React from "react";
import { View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Navbar({}) {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={tw`rounded-t-2xl h-[4rem] bg-[#f001] flex flex-row items-center justify-evenly mt-auto
        `}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Entypo name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Market")}>
          <MaterialIcons name="store" size={24} color="black" />
        </TouchableOpacity>
        <FontAwesome name="shopping-bag" size={20} color="black" />
        <MaterialIcons name="delivery-dining" size={24} color="black" />
      </View>
    </>
  );
}

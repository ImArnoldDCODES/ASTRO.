import React from "react";
import { View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Navbar({}) {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={tw`rounded-t-2xl h-[4rem] bg-[#f5efd7] flex flex-row items-center justify-evenly mt-auto
        `}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Entypo name="home" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Market")}>
          <MaterialIcons name="event-available" size={24} color="black" />
        </TouchableOpacity>

        <FontAwesome5 name="warehouse" size={21} color="black" />
        <Entypo name="drop" size={24} color="black" />
      </View>
    </>
  );
}

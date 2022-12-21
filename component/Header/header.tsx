import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import tw from 'twrnc'

export default function Header() {
  return (
    <>
      <View
        style={tw` flex-0.15 relative w-[13rem] flex flex-row justify-center items-center ml-[10rem] mb-5`}
      >
        <Text
          style={tw`text-[24px] font-normal leading-normal text-[#292929]`}
          // style={{ fontFamily: 'stix', fontSize: 21 }}
        >
          ARTSY.
        </Text>
        <View
          style={tw`flex flex-row items-center ml-auto w-20 h-10 justify-between`}
        >
          <EvilIcons name="search" size={32} color="black" />
          <AntDesign name="shoppingcart" size={32} color="black" />
        </View>
      </View>
    </>
  );
}

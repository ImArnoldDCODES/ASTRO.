import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableHighlight, Alert } from "react-native";
import Navbar from "../Navbar/navbar";
import tw from '../../tailwind/index';
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Header/header";
import { EvilIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const data = [
  {
    title: "BOOLEAN EGYPTIAN",
    price: "$21.00",
    image: require('../../assets/images/img1.png')
  },
  {
    title: "ROAD TO EGYPT",
    price: "$11.00",
    image: require('../../assets/images/img2.png')
  },
  {
    title: "BLANC",
    price: "$11.00",
    image: require('../../assets/images/img3.png')
  },
  {
    title: "ELLIPSIA",
    price: "$11.00",
    image: require('../../assets/images/img4.png')
  },
  {
    title: "THE LAWMAKERS",
    price: "$30.00",
    image: require('../../assets/images/img5.png')
  },
];

export default function Market() {
  const [fontsLoaded] = useFonts({
    satoshi: require("../../assets/fonts/Satoshi-Medium.otf")
  });

  if (!fontsLoaded) return null;

  const onLongPress = () => {
    Alert.alert('Add to Cart?')
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <View style={tw`flex-row justify-between px-10 items-center`}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-[18px] font-satoshi`}>Filters</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={35}
                color="black"
                style={tw`ml-2`}
              />
            </View>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-[18px] font-satoshi`}>Sort by</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={35}
                color="black"
                style={tw`ml-2 `}
              />
            </View>
          </View>
          <View style={tw`mt-5 items-center`}>
            {data.map((data, index) => {
              return(
              <View key={index}>
                <TouchableHighlight onLongPress={onLongPress}>
                <Image source={(data.image)}/>
                </TouchableHighlight>
                <View style={tw`my-4 flex-row justify-between`}>
                <Text style={tw`text-[15px] font-normal font-satoshi`}>{data.title}</Text>
                <Text style={tw`text-[15px] font-normal font-satoshi`}>{data.price}</Text>
                </View>
              </View>
              )
            })}
          </View>
          <View style={tw`mt-5 mb-30 flex-row items-center mx-4 ml-auto`}>
            <Text style={tw`text-[24px] mr-2 font-satoshi`}>Load More</Text>
            <EvilIcons name="arrow-right" size={70} color="black" />
          </View>
        </ScrollView>
      </SafeAreaView>
      <Navbar />
    </>
  );
}

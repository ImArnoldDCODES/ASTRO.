import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Navbar from "../Navbar/navbar";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Header/header";
import { EvilIcons } from "@expo/vector-icons";

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
  return (
    <>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <View style={tw`flex-row justify-between px-10 items-center`}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-[18px]`}>Filters</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={35}
                color="black"
                style={tw`ml-2`}
              />
            </View>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-[18px]`}>Sort by</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={35}
                color="black"
                style={tw`ml-2 `}
              />
            </View>
          </View>
          <View style={tw`mt-5 items-center`}>
            {data.map((data) => {
              return(
              <View>
                <Image source={(data.image)}/>
                <View style={tw`my-4 flex-row justify-between`}>
                <Text style={tw`text-[15px] font-normal`}>{data.title}</Text>
                <Text style={tw`text-[15px] font-normal`}>{data.price}</Text>
                </View>
              </View>
              )
            })}
          </View>
          <View style={tw`mt-5 mb-30 flex-row items-center mx-4 ml-auto`}>
            <Text style={tw`text-[24px] mr-2`}>Load More</Text>
            <EvilIcons name="arrow-right" size={80} color="black" />
          </View>
        </ScrollView>
      </SafeAreaView>
      <Navbar />
    </>
  );
}

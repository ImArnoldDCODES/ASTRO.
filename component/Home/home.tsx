import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Navbar from "../Navbar/navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function Home() {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={tw`bg-[#f1f2ed]`}
        >
          <View
            style={tw` flex-0.15 relative w-[13rem] flex flex-row justify-center items-center ml-[10rem] mb-5`}
          >
            <Text
              style={tw`text-[24px] font-normal leading-normal text-[#292929]`}
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
          <View style={tw`flex-2 items-center`}>
            <Text
              style={tw`font-normal text-[#333333] text-[32px] text-center leading-normal`}
            >
              Photography is poetry{"\n"} and beautiful untold stories
            </Text>
            <Text
              style={tw`mt-7 font-normal text-[500] text-[16px] text-center px-6 leading-normal`}
            >
              Flip through more than 10,000 vintage shots, old photograghs,
              historic images and captures seamlessly in one place. Register to
              get top access.
            </Text>
            <Image
              source={require("../../assets/images/staker.png")}
              style={tw`w-[90%]`}
            />
          </View>
          <View style={tw`mt-10 mb-10 flex flex-col`}>
            <View
              style={tw`flex flex-row  border-t border-b border-[#000] items-center justify-between px-5 py-2`}
            >
              <Text
                style={tw`font-normal text-[500] text-[24px] leading-normal text-[#292929]`}
              >
                Explore marketplace
              </Text>
              <Image source={require("../../assets/images/arrow.png")} />
            </View>

            <View
              style={tw`flex flex-row   border-b border-[#000] items-center justify-between px-5 py-2`}
            >
              <Text
                style={tw`font-normal text-[500] text-[24px] leading-normal text-[#292929]`}
              >
                See auctions
              </Text>
              <Image source={require("../../assets/images/arrow.png")} />
            </View>
          </View>
        </ScrollView>
        <Navbar />
      </SafeAreaView>
    </>
  );
}

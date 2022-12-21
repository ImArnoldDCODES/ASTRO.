import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import tw from "twrnc";
import Navbar from "../Navbar/navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Header from "../Header/header";
import { EvilIcons } from "@expo/vector-icons";

export default function Home() {
  const [fontsLoaded] = useFonts({
    stix: require("../../assets/fonts/stix/static/STIXTwoText-Medium.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
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
              <EvilIcons name="arrow-right" size={40} color="black" />
            </View>

            <View
              style={tw`flex flex-row   border-b border-[#000] items-center justify-between px-5 py-2`}
            >
              <Text
                style={tw`font-normal text-[500] text-[24px] leading-normal text-[#292929]`}
              >
                See auctions
              </Text>
              <EvilIcons name="arrow-right" size={40} color="black" />
            </View>
          </View>
        </ScrollView>
        <Navbar />
      </SafeAreaView>
    </>
  );
}

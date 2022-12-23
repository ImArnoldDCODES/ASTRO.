import tw from "../../tailwind";
import {
  View,
  Text,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import Navbar from "../Navbar/navbar";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Cart() {
  const imgs = [
    {
      image: require("../../assets/images/img6.png"),
      type: "Editorials",
      name: "Philomena",
    },
    {
      image: require("../../assets/images/img7.png"),
      type: "Editorials",
      name: "Warped ",
    },
    {
      image: require("../../assets/images/img8.png"),
      type: "Nature",
      name: "Ellipsia",
    },
  ];

  const navigation = useNavigation();

  const [Num, setNum] = useState(1)
  const [price, setPrice] = useState (35.5)
  const [Grandtotal, setGrandTotal] = useState(price)

  const handleadd = () => {
    setNum(Num + 1)
    setPrice(Num * price)
  }
  const handleminus = () => {
    setNum(Num - 1)
    setPrice(price - 35.5)
  }
  useEffect(() => {
    setGrandTotal(price * 3 + 2.50)
  }, [handleadd, handleminus])

  return (
    <>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
            <View
              style={tw`flex-row items-center justify-center bg-[#3A3A3A] mx-20 rounded-3xl py-2 `}
            >
              <Text
                style={tw`mr-10 bg-[#fff] px-5 py-2 rounded-3xl font-satoshi`}
              >
                Shop
              </Text>
              <Text style={tw`text-[#fff] font-satoshi`}>Sheduled</Text>
            </View>
            <View style={tw`mt-10 mx-6`}>
              {imgs.map((data, index) => {
                return (
                  <View style={tw`flex-row mb-7`} key={index}>
                    <Image source={data.image} style={tw`mr-5`} />
                    <View style={tw`flex-col`}>
                      <Text style={tw`font-cardo text-[17px]`}>
                        {data.type}
                      </Text>
                      <Text style={tw`mt-2 font-satoshi text-[5]`}>
                        {data.name}
                      </Text>
                      <View
                        style={tw`flex-row mt-3 border border-[#000] justify-between items-center rounded-lg w-[6rem]`}
                      >
                        <AntDesign
                          name="minus"
                          size={24}
                          color="black"
                          style={tw`border-r border-[#000] pr-1`}
                          onPress={handleminus}
                        />
                        <Text>{Num}</Text>
                        <AntDesign
                          name="plus"
                          size={24}
                          color="black"
                          style={tw`border-l border-[#000] pl-1`}
                          onPress={handleadd}
                        />
                      </View>
                    </View>
                    <View style={tw`ml-auto items-center`}>
                      <Feather name="x-circle" size={35} color="black" />
                      <Text style={tw`mt-12`}>${price}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={tw`mt-10 mx-7 flex-col`}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`font-satoshi text-[20px] text-[#888888]`}>
                  Products in cart :{" "}
                </Text>
                <Text style={tw`font-satoshi text-[16px]`}>3 items</Text>
              </View>
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <Text style={tw`font-satoshi text-[20px] text-[#888888]`}>
                  Shipping :{" "}
                </Text>
                <Text style={tw`font-satoshi text-[16px]`}>$2.50</Text>
              </View>
              <View style={tw`flex-row justify-between items-center mt-2`}>
                <Text style={tw`font-satoshi text-[20px] text-[#888888]`}>
                  Total :{" "}
                </Text>
                <Text style={tw`font-satoshi text-[16px]`}>$109</Text>
              </View>
              <View
                style={tw`flex-row justify-between items-center mt-3 border-t border-[#888]`}
              >
                <Text style={tw`font-satoshi text-[20px] text-[#888888]`}>
                  Grand Total :
                </Text>
                <Text style={tw`font-satoshi text-[16px]`}>${Grandtotal}</Text>
              </View>
            </View>
            <View style={tw`mt-16 mb-10 items-center justify-center`}>
              <TouchableOpacity
                style={tw`bg-[#3341C1] py-4 px-8 rounded `}
                onPress={() => navigation.navigate("Checkout")}
              >
                <Text style={tw`text-[#fff] font-satoshi`}>
                  Proceed to checkout
                </Text>
              </TouchableOpacity>

              <Text
                style={tw`mt-5 font-satoshi text-[#3348C9] underline text-[16px]`}
              >
                Continue shopping
              </Text>
            </View>
        </ScrollView>
      <Navbar />
      </SafeAreaView>
    </>
  );
}

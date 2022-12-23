import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../Header/header";
import Navbar from "../Navbar/navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import tw from "../../tailwind";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Payment() {
  const navigation = useNavigation();

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Header />
          <View style={tw`mx-6 mb-8`}>
            <View style={tw`flex-row items-center`}>
              <BouncyCheckbox
                size={25}
                unfillColor="#888888"
                iconStyle={{ borderColor: "#888888" }}
                innerIconStyle={{ borderWidth: 1 }}
                textStyle={{ fontFamily: "satoshi", marginTop: 20 }}
                onPress={(isChecked: boolean) => {}}
              />
              <Text>Select your wallet</Text>
            </View>
            <Text style={tw`mt-4`}>
              Connect with one of our available wallet providers or add and
              connect a new wallet.
            </Text>
            <View style={tw`flex-row justify-evenly mt-10 items-center`}>
              <Image
                source={require("../../assets/images/meta.png")}
                style={tw`h-13 w-13`}
              />
              <Image
                source={require("../../assets/images/Coinbase.png")}
                style={tw`h-13 w-13`}
              />
              <Image
                source={require("../../assets/images/WalletConnect.png")}
                style={tw`h-13 w-13`}
              />
              <Image
                source={require("../../assets/images/Phantom.png")}
                style={tw`h-13 w-13`}
              />
              <EvilIcons name="plus" size={40} color="black" />
            </View>
            <View>
              <View style={tw`mt-6`}>
                <Text style={tw`text-[#000] text-[17px]`}>Wallet Type</Text>
                <TextInput
                  style={tw`h-10 border border-[#747474] pl-3 rounded mt-4`}
                />
              </View>

              <View style={tw`mt-6`}>
                <Text style={tw`text-[#000] text-[17px]`}>Key</Text>
                <TextInput
                  style={tw`h-10 border border-[#747474] pl-3 rounded mt-4`}
                  placeholder="Please enter your key"
                />
              </View>

              <View style={tw`mt-6`}>
                <Text style={tw`text-[#000] text-[17px]`}>Expiry Date</Text>
                <TextInput
                  style={tw`h-10 border border-[#747474] pl-3 rounded mt-4`}
                />
              </View>

              <View style={tw`mt-6`}>
                <Text style={tw`text-[#000] text-[17px]`}>Safe Code</Text>
                <TextInput
                  style={tw`h-10 border border-[#747474] pl-3 rounded mt-4`}
                />
              </View>

              <View style={tw`flex-row mt-8 items-center`}>
                <BouncyCheckbox
                  size={25}
                  unfillColor="#888888"
                  iconStyle={{ borderColor: "#888888" }}
                  innerIconStyle={{ borderWidth: 1 }}
                  textStyle={{ fontFamily: "satoshi", marginTop: 20 }}
                  onPress={(isChecked: boolean) => {}}
                />
                <Text style={tw`text-[13px]`}>
                  Save my wallet details & information for future transactions
                </Text>
              </View>

              <TouchableOpacity
                style={tw`bg-[#3341C1] mt-10 mx-15 py-4 items-center rounded`}
                onPress={() => navigation.navigate("Payment")}
              >
                <Text style={tw`text-[#fff] font-satoshi`}>
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Navbar />
      </SafeAreaView>
    </View>
  );
}

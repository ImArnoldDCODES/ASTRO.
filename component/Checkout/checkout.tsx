import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Header/header";
import Navbar from "../Navbar/navbar";
import tw from "../../tailwind";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ModalDropdown from "react-native-modal-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Checkout() {
    const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Header />
          <View style={tw`mx-6 mb-8`}>
            <View style={tw`flex-col`}>
              <Text style={tw`text-[#000] text-[17px]`}>Your email</Text>
              <TextInput
                // style={{ height: 40 }}
                placeholder="aanuoluwateenah@gmail.com"
                style={tw`h-10 border border-[#747474] pl-3 rounded mt-4`}
                // onChangeText={(newText) => setText(newText)}
              />
              <View style={tw`flex-row items-center`}>
                <BouncyCheckbox
                  size={25}
                  unfillColor="#888888"
                  iconStyle={{ borderColor: "#888888" }}
                  innerIconStyle={{ borderWidth: 1 }}
                  textStyle={{ fontFamily: "satoshi", marginTop: 20 }}
                  onPress={(isChecked: boolean) => {}}
                />
                <Text style={tw`text-[10px]`}>
                  Get updates about new drops & exclusive offers
                </Text>
              </View>
            </View>
            <View style={tw`mt-4`}>
              <Text style={tw`text-[#000] text-[17px]`}>Choose a wallet</Text>
              <ModalDropdown
                options={["option 1", "option 2"]}
                style={tw`mt-4 p-1 border border-[#747474]`}
              >
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={30}
                  color="black"
                  style={tw`ml-auto`}
                />
              </ModalDropdown>
            </View>

            <View style={tw`mt-4`}>
              <Text style={tw`text-[#000] text-[17px]`}>City</Text>
              <ModalDropdown
                options={["option 1", "option 2"]}
                style={tw`mt-4 p-1 border border-[#747474]`}
              >
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={30}
                  color="black"
                  style={tw`ml-auto`}
                />
              </ModalDropdown>
            </View>

            <View style={tw`mt-4`}>
              <Text style={tw`text-[#000] text-[17px]`}>Country</Text>
              <ModalDropdown
                options={["option 1", "option 2"]}
                style={tw`mt-4 p-1 border border-[#747474]`}
              >
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={30}
                  color="black"
                  style={tw`ml-auto`}
                />
              </ModalDropdown>
            </View>

            <View style={tw`mt-4`}>
              <Text style={tw`text-[#000] text-[17px]`}>Postal Code</Text>
              <TextInput
                style={tw`h-10 border border-[#747474] pl-3 rounded mt-4`}
              />
            </View>

            <View style={tw`mt-4`}>
              <Text style={tw`text-[#000] text-[17px]`}>Phone Number</Text>
              <TextInput
                style={tw`h-10 border border-[#747474] pl-3 rounded mt-4`}
              />
            </View>

            <View style={tw`mt-16 items-center justify-center`}>
              <TouchableOpacity
                style={tw`bg-[#3341C1] py-4 px-8 rounded `}
                onPress={() => navigation.navigate("Payment")}
              >
                <Text style={tw`text-[#fff] font-satoshi`}>
                  Proceed to payment
                </Text>
              </TouchableOpacity>

              <Text
                style={tw`mt-5 font-satoshi text-[#3348C9] underline text-[16px]`}
              >
                Go back to cart
              </Text>
            </View>
          </View>
        </ScrollView>
        <Navbar />
      </SafeAreaView>
    </View>
  );
}

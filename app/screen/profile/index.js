import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Shadow, WIDTH } from "../../assets/styles";

import Text from "../../component/Text";

const Profile = ({ navigation, route }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: "#FFFFFF" }}>
        <ImageBackground
          source={require("../../assets/images/bgProfile.png")}
          resizeMode="cover"
          style={{
            width: WIDTH,
            height: 495,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 80,
              borderWidth: 2,
              borderRadius: 90,
              borderColor: "#FBD2A5",
            }}
          >
            <Image
              source={require("../../assets/images/person2.png")}
              style={{
                width: 120,
                height: 120,
              }}
            />
          </TouchableOpacity>

          <View style={{ marginTop: 16, alignItems: "center" }}>
            <Text bold fontSize={20}>
              Karuniawan Ekasakti
            </Text>
            <Text bold color="#909090">
              React Native Developer
            </Text>
          </View>
        </ImageBackground>

        <View style={{ marginHorizontal: 16, marginTop: -195 }}>
          {/* ==================================================container=========================================== */}
          <View
            style={[
              {
                padding: 16,
                borderRadius: 12,
                backgroundColor: "#FFFFFF",
              },
              Shadow,
            ]}
          >
            {/* ============================================Content===================================== */}
            {/* ID */}
            <View style={{ flexDirection: "row" }}>
              <Text bold style={{ flex: 1 }}>
                ID
              </Text>
              <Text
                bold
                color="#A7A7A7"
                style={{ flex: 1, textAlign: "right" }}
              >
                A1597
              </Text>
            </View>

            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#D3D3D3",
                marginVertical: 13,
              }}
            ></View>

            {/* Email */}
            <View style={{ flexDirection: "row" }}>
              <Text bold style={{ flex: 1 }}>
                Email
              </Text>
              <Text bold color="#A7A7A7">
                karuniawan@gmail.com
              </Text>
            </View>

            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#D3D3D3",
                marginVertical: 13,
              }}
            ></View>

            {/* Date of birth */}
            <View style={{ flexDirection: "row" }}>
              <Text bold style={{ flex: 1 }}>
                Date Of Birth
              </Text>
              <Text bold color="#A7A7A7">
                3 May 2997
              </Text>
            </View>

            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#D3D3D3",
                marginVertical: 13,
              }}
            ></View>

            {/* gender */}
            <View style={{ flexDirection: "row" }}>
              <Text bold style={{ flex: 1 }}>
                Gender
              </Text>
              <Text bold color="#A7A7A7">
                Male
              </Text>
            </View>

            {/* ================================================Content===================================== */}
          </View>
          {/* =====================================================Container======================================= */}

          {/* =====================================================Container======================================= */}
          <View
            style={[
              {
                marginTop: 20,
                padding: 16,
                borderRadius: 12,
                backgroundColor: "#FFFFFF",
              },
              Shadow,
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column", flex: 1 }}>
                <Text bold>Team</Text>
                <Text bold color="#A7A7A7">
                  React Native
                </Text>
              </View>
              <Image
                source={require("../../assets/images/person6.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: -15,
                }}
              ></Image>
              <Image
                source={require("../../assets/images/person10.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: -15,
                }}
              ></Image>
              <Image
                source={require("../../assets/images/person3.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: -15,
                }}
              ></Image>
              <Image
                source={require("../../assets/images/person2.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
              ></Image>
            </View>
          </View>
          {/* =====================================================Container======================================= */}

          {/* =====================================================Container======================================= */}
          <View
            style={[
              {
                marginTop: 20,
                padding: 16,
                borderRadius: 12,
                backgroundColor: "#FFFFFF",
              },
              Shadow,
            ]}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/guard.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 20,
                }}
              ></Image>
              <Text
                bold
                style={{
                  flex: 1,
                }}
              >
                Privacy and Security
              </Text>
              <Image
                source={require("../../assets/images/arrow_right.png")}
                style={{
                  width: 8,
                  height: 15,

                  marginRight: 6,
                }}
              ></Image>
            </View>

            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#D3D3D3",
                marginVertical: 13,
              }}
            ></View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/help.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 20,
                }}
              ></Image>
              <Text
                bold
                style={{
                  flex: 1,
                }}
              >
                Help
              </Text>
              <Image
                source={require("../../assets/images/arrow_right.png")}
                style={{
                  width: 8,
                  height: 15,

                  marginRight: 6,
                }}
              ></Image>
            </View>

            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#D3D3D3",
                marginVertical: 13,
              }}
            ></View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/about.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 20,
                }}
              ></Image>
              <Text
                bold
                style={{
                  flex: 1,
                }}
              >
                About Us
              </Text>
              <Image
                source={require("../../assets/images/arrow_right.png")}
                style={{
                  width: 8,
                  height: 15,

                  marginRight: 6,
                }}
              ></Image>
            </View>

            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#D3D3D3",
                marginVertical: 13,
              }}
            ></View>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../assets/images/logout.png")}
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 20,
                  }}
                ></Image>
                <Text
                  bold
                  style={{
                    flex: 1,
                  }}
                >
                  Logout
                </Text>
                <Image
                  source={require("../../assets/images/arrow_right.png")}
                  style={{
                    width: 8,
                    height: 15,

                    marginRight: 6,
                  }}
                ></Image>
              </View>
            </TouchableOpacity>
          </View>
          {/* =====================================================Container======================================= */}
          <View
            style={{ marginTop: 20, alignItems: "center", marginBottom: 50 }}
          >
            <Text bold> V1.0.0</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

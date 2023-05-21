import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import React from "react";
import { BackLogin, BackTask } from "../../assets/images";
import Text from "../../component/Text";
import { Fonts, HEIGHT, WIDTH } from "../../assets/styles";

function AddTasks() {
  return (
    <View
      style={{
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: "#fff",
        paddingTop: 20,
      }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ marginHorizontal: 16 }}>
          <View style={{ marginTop: 20, position: "absolute", left: 2 }}>
            <View>
              <TouchableOpacity>
                <BackTask width={25} height={50} />
              </TouchableOpacity>

              <View style={{ position: "relative", top: -43, left: 90 }}>
                <Text bold fontSize={24}>
                  Time Sheet Form
                </Text>
              </View>
            </View>

            <View style={{ marginHorizontal: 1, marginTop: -10 }}>
              <View>
                <Text bold fontSize={16} color="#000">
                  Title
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                marginTop: 8,
                borderColor: "#A7A7A7",
                backgroundColor: "#FFFF",
                borderRadius: 8,
                padding: 12,
                width: 350,
                height: 50,
              }}
            >
              <TextInput
                placeholder="Enter task title"
                placeholderTextColor={"#D3D3D3"}
              ></TextInput>
            </View>

            <View style={{ marginHorizontal: 1, marginTop: 25 }}>
              <View>
                <Text bold fontSize={16} color="#000">
                  Date
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                marginTop: 8,
                borderColor: "#A7A7A7",
                backgroundColor: "#FFFF",
                borderRadius: 8,
                padding: 12,
                width: 350,
                height: 50,
              }}
            >
              <TextInput
                placeholder="Select Date"
                placeholderTextColor={"#D3D3D3"}
              ></TextInput>
            </View>

            <View style={{ marginHorizontal: 1, marginTop: 25 }}>
              <View>
                <Text bold fontSize={16} color="#000">
                  Time
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                marginTop: 8,
                borderColor: "#A7A7A7",
                backgroundColor: "#FFFF",
                borderRadius: 8,
                padding: 12,
                width: 350,
                height: 50,
              }}
            >
              <TextInput
                placeholder="Select Date"
                placeholderTextColor={"#D3D3D3"}
              ></TextInput>
            </View>

            <View style={{ marginHorizontal: 1, marginTop: 25 }}>
              <View>
                <Text bold fontSize={16} color="#000">
                  Status
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                marginTop: 8,
                borderColor: "#A7A7A7",
                backgroundColor: "#FFFF",
                borderRadius: 8,
                padding: 12,
                width: 350,
                height: 50,
              }}
            >
              <TextInput
                placeholder="Status"
                placeholderTextColor={"#D3D3D3"}
              ></TextInput>
            </View>

            <View style={{ marginHorizontal: 1, marginTop: 25 }}>
              <View>
                <Text bold fontSize={16} color="#000">
                  Activities
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                marginTop: 8,
                borderColor: "#A7A7A7",
                backgroundColor: "#FFFF",
                borderRadius: 8,
                padding: 12,
                width: 350,
                height: 100,
              }}
            >
              <TextInput
                placeholder="Select Date"
                placeholderTextColor={"#D3D3D3"}
                multiline={true}
                numberOfLines={4}
                style={{
                  textAlignVertical: "top",
                }}
              ></TextInput>
            </View>

            <View style={{ marginHorizontal: 1, marginTop: 25 }}>
              <View>
                <Text bold fontSize={16} color="#000">
                  Activities
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                marginTop: 8,
                borderColor: "#A7A7A7",
                backgroundColor: "#FFFF",
                borderRadius: 8,
                padding: 12,
                width: 350,
                height: 100,
              }}
            >
              <TextInput
                placeholder="Select Date"
                placeholderTextColor={"#D3D3D3"}
                multiline={true}
                numberOfLines={4}
                style={{
                  textAlignVertical: "top",
                }}
              ></TextInput>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default AddTasks;

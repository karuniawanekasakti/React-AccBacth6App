import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../profile";
import Home from "../home";
import Performance from "../performance";
import Tasks from "../tasks";
import AddTasks from "../addTasks";
import {
  HomeIcon,
  ProfileIcon,
  PerformanceIcon,
  TasksIcon,
} from "../../assets/images";

const Tab = createBottomTabNavigator();

function Main({ navigation, route }) {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: ({ focused, color }) => {
            let label = {
              Home: "Home",
              Profile: "Profile",
              Performance: "Performance",
              Tasks: "Tasks",
              AddTasks: "",
            };
            return (
              <Text
                style={{
                  color: color,
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {label[route.name]}
              </Text>
            );
          },
          headerShown: false,
          tabBarActiveTintColor: "#04325F",
          tabBarInactiveTintColor: "#CED1D4",
          tabBarIcon: ({ focused, color, size }) => {
            let tabBarIcon = {
              Home: <HomeIcon width={size} height={size} fill={color} />,
              Profile: <ProfileIcon width={size} height={size} fill={color} />,
              Performance: (
                <PerformanceIcon width={size} height={size} fill={color} />
              ),
              Tasks: <TasksIcon width={size} height={size} fill={color} />,
            };

            return <View>{tabBarIcon[route.name]}</View>;
          },
          tabBarStyle: {
            paddingBottom: 10,
            paddingTop: 10,
            height: 70,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} card />
        <Tab.Screen name="Tasks" component={Tasks} />
        <Tab.Screen
          name="AddTasks"
          component={AddTasks}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("../../assets/images/add.png")}
                style={{
                  width: 110,
                  height: 110,
                  marginTop: -30,
                }}
              />
            ),
          }}
        />
        <Tab.Screen name="Performance" component={Performance} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      {/* <Button onPress={() => navigation.navigate("Profile", {name: "Karuniawan From Main",})} title='NAVIGATE' /> */}
    </View>
  );
}

export default Main;

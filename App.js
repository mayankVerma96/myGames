import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { AppRegistry } from "react-native";
import { ThemeProvider, Icon, Div, Text } from "react-native-magnus";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MobileGamesScreen from "./src/components/screens/MobileGamesScreen";
import PCGamesScreen from "./src/components/screens/PCGamesScreen";
import GamesDetail from "./src/components/GamesDetail";
import GamesList from "./src/components/GamesList";
import GameTipsDetail from "./src/components/GameTipsDetail";

const theme = {
  colors: {
    redPink: "#e7305b",
  },
};

const fetchFonts = () => {
  return Font.loadAsync({
    "vermin-vibes": require("./assets/fonts/vermin-vibes.ttf"),
    // "roboto-italic": require("./assets/fonts/Roboto-Italic.ttf"),
    // "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

const Tab = createMaterialTopTabNavigator();
const RootStack = createStackNavigator();

const GamesStack = createStackNavigator();

const HomeTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showIcon: true,
      activeTintColor: "blue",
      inactiveTintColor: "black",
      tabStyle: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
      },
      style: { fontWeight: "bold", backgroundColor: "#e7305b" },
      indicatorStyle: {
        // height: "100%",
        backgroundColor: "#ffffff",
      },
    }}
  >
    <Tab.Screen
      options={{
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              fontWeight={focused ? "bold" : "400"}
              color={focused ? "white" : "blue"}
              w={50}
            >
              Mobile
            </Text>
          );
        },
        tabBarIcon: ({ focused }) => {
          return (
            <Div flexDir="row" justifyContent="center">
              <Icon
                name="mobile"
                color={focused ? "white" : "black"}
                fontSize="3xl"
                fontFamily="FontAwesome5"
              />
            </Div>
          );
        },
      }}
      name="Mobile"
      component={GamesStackScreen}
    ></Tab.Screen>
    <Tab.Screen
      options={{
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              fontWeight={focused ? "bold" : "400"}
              w={30}
              color={focused ? "white" : "blue"}
            >
              PC
            </Text>
          );
        },
        tabBarIcon: ({ focused }) => {
          return (
            <Div flexDir="row" justifyContent="center">
              <Icon
                name="computer"
                color={focused ? "white" : "black"}
                fontSize="4xl"
                fontFamily="MaterialIcons"
              />
            </Div>
          );
        },
      }}
      name="PC"
      component={PCGamesScreen}
    ></Tab.Screen>
  </Tab.Navigator>
);

const GamesStackScreen = () => (
  <GamesStack.Navigator>
    <GamesStack.Screen
      name="GamesList"
      component={GamesList}
    ></GamesStack.Screen>
    <GamesStack.Screen name="Games" component={GamesDetail}></GamesStack.Screen>
    <GamesStack.Screen
      name="Games Tips"
      component={GameTipsDetail}
    ></GamesStack.Screen>
  </GamesStack.Navigator>
);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="My Games"
            options={{
              title: "My Games",
              headerTintColor: "black",
              headerStyle: {
                backgroundColor: "#e7305b",
                elevation: 0,
                shadowOpacity: 0,
              },
            }}
            component={HomeTabNavigator}
          ></RootStack.Screen>
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent("App", () => App);

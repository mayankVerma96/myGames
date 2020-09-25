import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Modal,
} from "react-native";

import { Video } from "expo-av";
import { Overlay } from "react-native-elements";
import { Div, Text, Icon, Avatar, Image } from "react-native-magnus";

const GamesDetail = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.imageStyle}
          source={{ uri: route.params.result.image }}
        />
        <View style={styles.infoContainer}>
          <Text color="white" style={styles.name}>
            {route.params.result.name}
          </Text>
          <Text fontSize="md" color="white">
            {route.params.result.about}
          </Text>

          <View style={{ marginTop: 30 }}>
            {route.params.result.list.map((list, id) => {
              return (
                <View key={id}>
                  <Div bg="black" mb={15}>
                    <TouchableHighlight
                      activeOpacity={0.9}
                      underlayColor="#f9f9f9"
                      onPress={() =>
                        navigation.navigate("Games Tips", {
                          list: list.details,
                        })
                      }
                    >
                      <View>
                        <Div
                          shadow="md"
                          bg="gray900"
                          alignItems="center"
                          justifyContent="space-between"
                          rounded="lg"
                          flexDir="row"
                          p={15}
                        >
                          {/* <Avatar bg="red500" size={38} rounded="lg">
                            <Icon name="circle" color="white" size={10}></Icon>
                          </Avatar> */}
                          <Div flexDir="row" alignItems="center">
                            <Icon
                              name="logo-xbox"
                              color="black"
                              fontSize="5xl"
                              //rounded={1000}
                              // h={24}
                              fontFamily="Ionicons"
                            ></Icon>
                            <Text
                              color="white"
                              style={styles.tipsCategoryHeading}
                            >
                              {list.title}
                            </Text>
                          </Div>
                          <Div>
                            <Icon
                              name="right"
                              color="yellow700"
                              fontSize="title"
                              fontFamily="AntDesign"
                            />
                          </Div>
                        </Div>
                      </View>
                    </TouchableHighlight>
                  </Div>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageStyle: {
    width: "auto",
    height: 600,
    opacity: 0.8,
  },
  name: {
    fontWeight: "bold",
    fontFamily: "vermin-vibes",
    fontSize: 20,
    marginVertical: 10,
  },
  infoContainer: {
    marginHorizontal: 15,
  },
  overlayImage: {
    width: "auto",
    height: 300,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    paddingRight: 50,
    borderBottomColor: "#d6d6d6",
  },
  tipsImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  tipsCategoryHeading: {
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.5,
    textAlign: "center",
    paddingLeft: 15,
  },

  tipsTitle: {
    paddingRight: 10,
    maxWidth: 250,
    // height: "auto",
  },
  tipsHeading: {
    fontWeight: "600",
    fontSize: 18,
    marginVertical: 10,
  },
});

export default GamesDetail;

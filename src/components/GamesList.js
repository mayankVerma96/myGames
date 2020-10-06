import React from "react";
import _, { get } from "lodash";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Text, Div } from "react-native-magnus";

import GamesDetail from "./GamesDetail";
import useResults from "../hooks/useResults";

const GamesList = ({ navigation }) => {
  const [flamelinkSchema, games, errMessage] = useResults();
  const data =
    games &&
    games.myGames &&
    _.get(games, "myGames.fields[0].options.data", []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading} px={20}>
        Top Games
      </Text>
      <ScrollView>
        <Div px={20}>
          {
            // games &&
            //   games.myGames &&
            //   Object.values(games.myGames.fields).map((result) => {
            //     result && //
            data &&
              data.map((game, id) => {
                return (
                  game && (
                    <TouchableHighlight
                      activeOpacity={0.8}
                      key={id}
                      underlayColor="white"
                      onPress={() =>
                        navigation.navigate("Games", {
                          result: game,
                        })
                      }
                    >
                      <View style={styles.gameContainer}>
                        <Div>
                          <LinearGradient
                            // Background Linear Gradient
                            colors={["transparent", "black"]}
                            style={{
                              position: "absolute",
                              left: 0,
                              right: 0,
                              bottom: 5,
                              height: 150,
                              zIndex: 3,
                              borderRadius: 10,
                            }}
                          >
                            <Div
                              //w="100%"
                              style={{
                                position: "absolute",
                                bottom: 10,
                                left: 10,
                              }}
                            >
                              <Text
                                color="white"
                                fontWeight="bold"
                                fontSize="xl"
                                fontFamily="primary"
                                bg="gray800"
                                px={15}
                                py={6}
                                rounded="lg"
                              >
                                {game.name}
                              </Text>
                            </Div>
                          </LinearGradient>

                          <Image
                            style={styles.imageStyle}
                            source={{ uri: game.image }}
                          />
                        </Div>

                        <Div d="flex" flexDir="row" flexWrap="wrap" mt={4}>
                          {/* */}
                          {game.category.map((category) => {
                            return (
                              <Text
                                key={category}
                                bg="red500"
                                //opacity={0.8}
                                px={12}
                                py={6}
                                mr={6}
                                mt={6}
                                rounded="2xl"
                                color="white"
                                fontSize="md"
                                fontWeight="bold"
                              >
                                {category}
                              </Text>
                            );
                          })}
                        </Div>
                      </View>
                    </TouchableHighlight>
                  )
                );
                // });
              })
          }
        </Div>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    backgroundColor: "white",
  },
  gameContainer: {
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f3f3",
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 10,
    fontFamily: "vermin-vibes",
  },
  imageStyle: {
    width: "auto",
    height: 280,
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    maxWidth: 240,
    fontFamily: "vermin-vibes",
  },
});

export default GamesList;

const results = [
  {
    name: "PUBG Mobile",
    image: require("../../assets/pubg.jpg"),
    about:
      "PlayerUnknowns Battlegrounds (PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole. A free-to-play mobile version for Android and iOS was released in 2018 ",
    list: [
      {
        title: "Aiming Tips",
        details: [
          {
            heading: "Improve Your Aim to Land Shots",
            image: require("../../assets/aim1.jpg"),
            info:
              "Make your shots count by improving your aim and overall accuracy. This is essential to your survival as you need to be able to bring down enemies before they can shoot you down.",
          },
          {
            heading: "Adjust Your Aim Depending on Your Weapon",
            image: require("../../assets/aim1.jpg"),
            info:
              "Lead your aim to where your enemies will be to be able to land shots with weapons with slower bullet speeds. This is a harder technique, but get it right and you can bring down enemies from long distances!",
          },
        ],
      },
      {
        title: "Squad Tactics",
        details: [
          {
            heading: "Improve Your Aim to Land Shots",
            image: require("../../assets/aim1.jpg"),
            info:
              "Make your shots count by improving your aim and overall accuracy. This is essential to your survival as you need to be able to bring down enemies before they can shoot you down.",
          },
          {
            heading: "Adjust Your Aim Depending on Your Weapon",
            image: require("../../assets/aim1.jpg"),
            info:
              "Weapons all have different features you will need to know to be able to land shots. Always check your weapons range, firing modes, recoil, spray, and bullet drop off/travel!",
          },
        ],
      },
    ],
  },
  {
    name: "COD Mobile",
    image: require("../../assets/cod.jpg"),
    about:
      "Call of Duty: Mobile is a free-to-play shooter video game developed by TiMi Studios and published by Activision and Garena for Android and iOS. It was released on October 1, 2019. The game saw one of the largest mobile game launches in history, generating over US$327 million with 250 million downloads by June 2020",
    list: [
      {
        title: "Aiming Tips",
        details: [
          {
            heading: "Improve Your Aim to Land Shots",
            image: require("../../assets/aim1.jpg"),
            info:
              "Make your shots count by improving your aim and overall accuracy. This is essential to your survival as you need to be able to bring down enemies before they can shoot you down.",
          },
          {
            heading: "Adjust Your Aim Depending on Your Weapon",
            image: require("../../assets/aim1.jpg"),
            info:
              "Weapons all have different features you will need to know to be able to land shots. Always check your weapons range, firing modes, recoil, spray, and bullet drop off/travel!",
          },
        ],
      },
      {
        title: "Squad Tactics",
        details: [
          {
            heading: "Improve Your Aim to Land Shots",
            image: require("../../assets/aim1.jpg"),
            info:
              "Make your shots count by improving your aim and overall accuracy. This is essential to your survival as you need to be able to bring down enemies before they can shoot you down.",
          },
          {
            heading: "Adjust Your Aim Depending on Your Weapon",
            image: require("../../assets/aim1.jpg"),
            info:
              "Weapons all have different features you will need to know to be able to land shots. Always check your weapons range, firing modes, recoil, spray, and bullet drop off/travel!",
          },
        ],
      },
    ],
  },
  {
    name: "Fortnite",
    image: require("../../assets/fortnite.jpg"),
    about:
      "Fortnite Battle Royale is a free-to-play battle royale video game developed and published by Epic Games. It is a companion game to Fortnite: Save the World, a cooperative survival game with construction elements.",
    list: [
      {
        title: "Aiming Tips",
        details: [
          {
            heading: "Improve Your Aim to Land Shots",
            image: require("../../assets/aim1.jpg"),
            info:
              "Make your shots count by improving your aim and overall accuracy. This is essential to your survival as you need to be able to bring down enemies before they can shoot you down.",
          },
          {
            heading: "Adjust Your Aim Depending on Your Weapon",
            image: require("../../assets/aim1.jpg"),
            info:
              "Weapons all have different features you will need to know to be able to land shots. Always check your weapons range, firing modes, recoil, spray, and bullet drop off/travel!",
          },
        ],
      },
      {
        title: "Squad Tactics",
        details: [
          {
            heading: "Improve Your Aim to Land Shots",
            image: require("../../assets/aim1.jpg"),
            info:
              "Make your shots count by improving your aim and overall accuracy. This is essential to your survival as you need to be able to bring down enemies before they can shoot you down.",
          },
          {
            heading: "Adjust Your Aim Depending on Your Weapon",
            image: require("../../assets/aim1.jpg"),
            info:
              "Weapons all have different features you will need to know to be able to land shots. Always check your weapons range, firing modes, recoil, spray, and bullet drop off/travel!",
          },
        ],
      },
    ],
  },
  {
    name: "Free Fire",
    image: require("../../assets/freefire.jpg"),
    about:
      "Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival. Players freely choose their starting point with their parachute, and aim to stay in the safe zone for as long as possible.",
    list: [
      {
        title: "Aiming Tips",
        details: [
          {
            heading: "Improve Your Aim to Land Shots",
            image: require("../../assets/aim1.jpg"),
            info:
              "Make your shots count by improving your aim and overall accuracy. This is essential to your survival as you need to be able to bring down enemies before they can shoot you down.",
          },
          {
            heading: "Adjust Your Aim Depending on Your Weapon",
            image: require("../../assets/aim1.jpg"),
            info:
              "Weapons all have different features you will need to know to be able to land shots. Always check your weapons range, firing modes, recoil, spray, and bullet drop off/travel!",
          },
        ],
      },
      {
        title: "Squad Tactics",
        details: [
          {
            heading: "Improve Your Aim to Land Shots",
            image: require("../../assets/aim1.jpg"),
            info:
              "Make your shots count by improving your aim and overall accuracy. This is essential to your survival as you need to be able to bring down enemies before they can shoot you down.",
          },
          {
            heading: "Adjust Your Aim Depending on Your Weapon",
            image: require("../../assets/aim1.jpg"),
            info:
              "Weapons all have different features you will need to know to be able to land shots. Always check your weapons range, firing modes, recoil, spray, and bullet drop off/travel!",
          },
        ],
      },
    ],
  },
];

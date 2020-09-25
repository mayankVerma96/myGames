import React from "react";
import _, { get } from "lodash";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Skeleton, Text, Div } from "react-native-magnus";

import GamesDetail from "./GamesDetail";
import useResults from "../hooks/useResults";

const GamesList = ({ navigation }) => {
  const [flamelinkSchema, games, errMessage] = useResults();
  const data =
    games &&
    games.myGames &&
    _.get(games, "myGames.fields[0].options.data", []);

  return (
    <>
      {data ? (
        <View style={styles.container}>
          <Text style={styles.heading} color="white">
            Top Games
          </Text>
          <ScrollView>
            {
              // games &&
              //   games.myGames &&
              //   Object.values(games.myGames.fields).map((result) => {
              //     result &&
              data &&
                data.map((game, id) => {
                  return (
                    game && (
                      <TouchableOpacity
                        key={id}
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
                                height: 300,
                                zIndex: 3,
                              }}
                            >
                              <Div
                                //w="100%"
                                style={{
                                  position: "absolute",
                                  bottom: 20,
                                  left: 10,
                                }}
                              >
                                <Text
                                  color="white"
                                  fontWeight="bold"
                                  fontSize="xl"
                                  fontFamily="primary"
                                  bg="gray900"
                                  px={10}
                                  py={6}
                                  rounded="xl"
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
                                  bg="red600"
                                  opacity={0.8}
                                  px={8}
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
                      </TouchableOpacity>
                    )
                  );
                  // });
                })
            }
          </ScrollView>
        </View>
      ) : (
        [1, 2, 3].map(() => {
          <Skeleton.Box mt="sm" h={180} />;
        })
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    paddingHorizontal: 20,
    backgroundColor: "black",
  },
  gameContainer: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 10,
    fontFamily: "vermin-vibes-new",
  },
  imageStyle: {
    width: "auto",
    height: 280,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 5,
    //marginRight: 20,
    //opacity: 0.7,
  },
  name: {
    fontWeight: "bold",
    maxWidth: 240,
    flexDirection: "row",
    alignSelf: "flex-start",
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

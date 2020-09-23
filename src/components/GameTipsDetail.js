import React, { useState } from "react";

import { Video } from "expo-av";
import { Overlay } from "react-native-elements";
import { Div, Text, Image, Icon } from "react-native-magnus";
import { View, ScrollView, TouchableHighlight } from "react-native";

const GameTipsDetail = (list) => {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={{ maxWidth: "90%", maxHeight: "90%" }}
        >
          <Video
            source={{
              uri: modalData.image,
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{
              width: "auto",
              height: 300,
              elevation: 10,
              zIndex: 2,
            }}
          ></Video>
          <Div p={10}>
            <Text fontWeight="bold" fontSize="18" py={10}>
              {modalData.heading}
            </Text>
            <ScrollView style={{ flexGrow: 0 }}>
              <Text>{modalData.info}</Text>
            </ScrollView>
          </Div>
        </Overlay>
        <ScrollView>
          <Div h="100%" bg="white" p={14}>
            {list &&
              list.route.params.list.map((item, id) => {
                return (
                  <Div
                    key={id}
                    shadow="md"
                    bg="white"
                    mb={10}
                    rounded="lg"
                    p={10}
                  >
                    <TouchableHighlight
                      activeOpacity={0.8}
                      underlayColor="#f6f6f6"
                      onPress={() => {
                        toggleOverlay();
                        setModalData(item);
                      }}
                    >
                      <View>
                        <Div
                          flexDir="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Div flexDir="row" alignItems="center">
                            <Image
                              h={80}
                              w={80}
                              mr={10}
                              rounded="md"
                              source={require("../../assets/pubg.jpg")}
                              //source={{ uri: route.params.result.image }}
                            />

                            <Text pr={10} maxW={220} fontWeight="bold">
                              {item.heading}
                            </Text>
                          </Div>
                          <Icon
                            name="right"
                            color="yellow700"
                            fontSize="title"
                            fontFamily="AntDesign"
                          />
                        </Div>
                      </View>
                    </TouchableHighlight>
                  </Div>
                );
              })}
          </Div>
        </ScrollView>
      </View>
    </>
  );
};

export default GameTipsDetail;

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import GamesList from "../GamesList";

const MobileGamesScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <GamesList heading="PUBG Mobile" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default MobileGamesScreen;

import React from "react";
import {View, StyleSheet, Text} from "react-native";

export default function Textes(){
    return (
        <View style={styles.textAll}>
      
            <Text>Text 1</Text>
            <Text style={[styles.text2, styles.marge]}>Text 2</Text>
            <Text style={[styles.text3, styles.marge]}>Text 3</Text>

        </View>
        
      );
}

const styles = StyleSheet.create({
  textAll: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  text2: {
  fontStyle: "italic",
  fontWeight: "900"
  },
  text3: {
    textDecorationLine: "underline",
    textDecorationStyle: "dashed",
    letterSpacing: 3
  },
  marge: {
    marginRight: 5
  }
   
  });
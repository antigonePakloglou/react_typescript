import React from "react";
import {View, StyleSheet} from "react-native";

export default function RotatedSquare(){
    return (
        <View style={styles.square}>
          
        </View>
      );
}

const styles = StyleSheet.create({
    square: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2EF4F7',
      height: 100,
      width: 100,
      transform: [{rotate: '45deg'}],
    },
  });
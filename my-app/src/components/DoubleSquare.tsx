import React from "react";
import {View, StyleSheet} from "react-native";

export default function DoubleSquare(){
    return (
        <View style={[styles.firstSquare, styles.center]}>
          <View style={[styles.secondSquare, styles.center]}>
            <View style={styles.thirdSquare}>
            </View>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    center : {
      alignItems: 'center',
      justifyContent: 'center',
    },
    firstSquare: {
      backgroundColor: '#2E8CF7',
      height: 100,
      width: 100,
    },
    secondSquare: {
      backgroundColor: '#2EC0F7',
      height: 70,
      width: 70,
    },
    thirdSquare: {
      backgroundColor: '#2EEEF7',
      height: 40,
      width: 40,
    }
  });
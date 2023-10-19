import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

export default function Card(){
    return (
      <View style={[styles.card, styles.shadowProp]}>
        <Image style={styles.tinyLogo}
          source={require('../../assets/profil.jpeg')}
        />
        <View style={styles.marge}>
            <Text>John</Text>
            <Text>Doe</Text>
            <Text>31</Text>
        </View>  
      </View>
        
      );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 150,
    height: 200
   
  },
  tinyLogo: {
    width: 75,
    height: 75,
    borderRadius: 1000,
    marginLeft: 37,
    marginTop: 10
  },
  marge: {
    marginTop: 30,
    marginLeft: 10
  },
  shadowProp: {
    elevation: 4,
  },
    
  });
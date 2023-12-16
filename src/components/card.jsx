import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Ionicons from '@expo/vector-icons/FontAwesome5';

const Card = ({name,icon}) => {
  return (
    <View style={styles.card}>
      <View style={styles.icons}>
        <Ionicons  name={icon} size={27} color="#08605F" />
      </View>
     
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 109,
    height: 96,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 16,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#08605F',
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: 10,
  },
  icons: {
  
    marginTop: 10,
    marginLeft: 10,
  }
});

export default Card;
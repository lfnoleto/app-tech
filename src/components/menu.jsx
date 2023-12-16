import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import Ionicons from '@expo/vector-icons/FontAwesome5';

const CardCarousel = ({ name, icon }) => {

    const cards = [{
      name: 'Inicio',
      icon: 'home',
    },
    {
      name: 'Compras',
      icon: 'shopping-cart',
    },
    {
      name: 'Cadastros',
      icon: 'user',
    },
    {
      name: 'Configuração',
      icon: 'cog',
    }]

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.card}>
        <View style={styles.icons}>
        <Ionicons name={item.icon} size={20} color="#08605F" />
        </View>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    );
  };

  return (
    <Carousel
      layout={'default'}
      data={cards}
      sliderWidth={Dimensions.get('window').width}
   
      renderItem={renderItem}
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
      contentContainerCustomStyle={styles.carouselContainer}
      itemWidth={109 + 3} 
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: 105,
    height: 96,
    backgroundColor: '#63C66D',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 30,
    padding: 10,
    marginRight: 10, // Adicionando espaçamento entre os cards
  },
  carouselContainer: {
    paddingHorizontal: 20, // Adicionando espaçamento horizontal para o carousel
  },
  icons: {
    marginTop: 10,
    marginLeft: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: 10,
    marginLeft: 10,
  },
});

export default CardCarousel;

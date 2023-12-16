import React from 'react';
import { View, Image, Text, StatusBar, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';

const App = () => {
  const carouselItems = [
    {
      title: 'Menu',
        image: '',
    },
    {
      title: 'Menu',
        image: '',
     
    },
   
  ];

  function renderItem({ item }) {
    return (
      <View style={[styles.carouselItemContainer, { marginLeft: 23 }]}>
        <Text style={styles.carouselItemTitle}>{item.title}</Text>
        <Image style={styles.carouselItemImage} source={{ uri: `${item.image}` }} />
      </View>
    );
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Carousel
          layout={'default'}
          data={carouselItems}
          sliderWidth={500} // Ajuste a largura conforme necessário
          itemWidth={260 + 23} // Largura do card com a margem
          renderItem={renderItem}
          inactiveSlideOpacity={0.7} // Opacidade dos slides inativos
          inactiveSlideScale={1} // Evita a redução de escala dos outros slides
          inactiveSlideShift={0} // Ajuste para 0 para garantir que o primeiro item comece da borda
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
    position: 'absolute',
    alignContent: 'center',
    alignSelf: 'center',
    paddingEnd: 90,

  },
  carouselItemContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    height: 211,
    width: 260, // Largura do card sem a margem
    padding: 20,
    marginTop: 20,
  },
  carouselItemImage: {
    width: '100%',
    height: 200,
    borderRadius: 4,
  },
  carouselItemTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;

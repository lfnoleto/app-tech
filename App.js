import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Carousel from './src/components/carousel';
import Card from './src/components/card';
import Menu from './src/components/menu';
export default function App() {
  const cards = [
    { title: 'Manejo Geral', icon: 'retweet' },
    { title: 'Manejo Sanitário', icon: 'arrows-alt-h' },
    { title: 'Nascimento', icon: 'check-circle' },
    { title: 'M.S por animal', icon: 'plus' },
    { title: 'Rebanho', icon: 'compress' },
    { title: 'Relatorios', icon: 'chart-line' },
    { title: 'Registro de Animais', icon: 'connectdevelop' },
    { title: 'Eventos', icon: 'exclamation-circle' },
    { title: 'Aplicação de Brinco', icon: 'chromecast' },
    // Adicione mais objetos aqui para criar mais cards
  ];
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <ScrollView>
          <View style={{backgroundColor: '#08605F', height: 306, width: 393}}>
            <Text style={{color: 'white', fontSize: 14, marginTop: 60, marginLeft:19}}>Olá,</Text>
            <Text style={{color: 'white', fontSize: 22, marginLeft:19}}>Lucas</Text>
            <Carousel style={styles.snap}/>
          </View>
          <View>
            <Text style={styles.title}>
            Acesso rápido
            </Text>
            <View style={styles.card}>
              {cards.map((card, index) => (
              <Card key={index} name={card.title} icon={card.icon} />
              ))}
            </View>
          </View>
          
         

         
      </ScrollView>
      <Menu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  snap: {
    flex: 2,
    width: 393,
    height: 306,
    
    backgroundColor: '#08605F',
  },
  title: {
    fontSize: 22,
    marginLeft: 19,
    marginTop: 70,
    marginBottom: 20,
    color: '#08605F',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 7,
    marginRight: 7, 
    justifyContent: 'space-between', 
    marginLeft: 19, 
    marginRight: 40,
     flexWrap: 'wrap',
     
  },

});

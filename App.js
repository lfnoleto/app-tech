
import { StyleSheet, Text, View, ScrollView} from 'react-native';

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

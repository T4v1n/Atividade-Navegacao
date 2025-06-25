import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Imagem no topo */}
      <Image
        source={require('./Bem-vindo.png')} // Substitua pelo caminho da sua imagem
        style={styles.image}
        resizeMode="contain" // ou "cover", se preferir
      />

      <Text style={styles.title}>Bem-vindo(a) ao meu aplicativo!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.buttonText}>Ir para Detalhes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>Sobre o Desenvolvedor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#483D8B', // cor de fundo clara
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
  fontSize: 20,
  marginBottom: 30,
  textAlign: 'center',
  color: '#FFFFFF',
},
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#6A5ACD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
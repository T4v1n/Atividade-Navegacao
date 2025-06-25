import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Imagem quadrada com borda */}
      <Image
        source={require('./Eu.jpg')} // Substitua pelo caminho da sua imagem
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>Sobre o Desenvolvedor</Text>
      <Text style={styles.content}>
        Este app foi desenvolvido por Tavin.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#483D8B',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 0, // borda quadrada (sem arredondamento)
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    marginBottom: 30,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#6A5ACD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
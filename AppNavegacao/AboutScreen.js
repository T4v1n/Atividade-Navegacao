import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Desenvolvedor</Text>
      <Text style={styles.content}>
        Este app foi desenvolvido por Tavin.
      </Text>
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, marginBottom: 20 },
});
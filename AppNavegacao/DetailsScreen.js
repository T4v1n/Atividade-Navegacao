import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      <Text style={styles.text}>
        Este é um aplicativo simples desenvolvido em React Native para fins de demonstração.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16 },
});
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a) ao aplicativo!</Text>

      <View style={styles.buttonWrapper}>
  <Button title="Ir para Detalhes" onPress={() => navigation.navigate('Details')} />
</View>

      <View style={styles.buttonWrapper}>
        <Button title="Sobre o Desenvolvedor" onPress={() => navigation.navigate('About')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 30 },
  buttonWrapper: { marginBottom: 30, width: '100%' },
});
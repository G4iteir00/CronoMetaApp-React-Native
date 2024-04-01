import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReportScreen() {
  // Aqui você pode adicionar lógica para calcular e exibir relatórios
  return (
    <View style={styles.container}>
      <Text>Relatórios</Text>
      {/* Exibir relatórios aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTaskScreen() {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    console.log('Adicionar tarefa:', task);
    // Aqui você pode adicionar a lógica para salvar a tarefa
    setTask('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa..."
        value={task}
        onChangeText={setTask}
      />
      <Button title="Adicionar Tarefa" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskListScreen from './screens/TaskListScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import ReportScreen from './screens/ReportScreen';
import { Ionicons } from '@expo/vector-icons'; // Usando Ionicons para os ícones das tabs

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';

            if (route.name === 'TaskList') {
              iconName = focused ? 'time-outline' : 'time-outline';
            } else if (route.name === 'AddTask') {
              iconName = focused ? 'add' : 'add';
            } else if (route.name === 'Report') {
              iconName = focused ? 'pie-chart' : 'pie-chart';
            }

            // Você pode retornar qualquer componente que desejar aqui, estamos usando Ionicons.
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="TaskList" component={TaskListScreen} options={{ title: 'Tarefas' }} />
        <Tab.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Nova Tarefa' }} />
        <Tab.Screen name="Report" component={ReportScreen} options={{ title: 'Relatórios' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TaskEntity } from '../models/TaskEntity';
import { Ionicons } from '@expo/vector-icons'; // Usando Ionicons para os ícones das tabs
import { TaskItemCategory } from './TaskItemCategory';
import { FormatTime } from './FormatTime';

const icons = {
    Icon_Book_Circle: require('../assets/icons/Icon_Book_Circle.png'),
    // Adicione mais ícones conforme necessário
};

export function TaskItem({ item }: { item: TaskEntity; }) {
    return (
        <View style={styles.card}>
            <View style={styles.section}>
                <Image source={icons[item.icon]} style={styles.image} />
            </View>
            <View style={styles.section}>
                <Text style={styles.task}>{item.title}</Text>
                <TaskItemCategory category={item.category} />
            </View>
            <View style={styles.section}>
                <Text>{item.scheduledDate?.toLocaleDateString()}</Text>
                <Ionicons name={'play'} size={20} color={'gray'} />
                <FormatTime time={item.scheduledTime || 0} />

            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    card: {
        width: 345,
        height: 90,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        flexDirection: 'row',
        marginVertical: 10,
    },
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
    },
    image: {
        width: 50,
        height: 50,
    },
    task: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    categories: {
        flexDirection: 'row',
    },
    category: {
        padding: 5,
        marginHorizontal: 5,
        fontSize: 12,
        backgroundColor: '#E6FCF4'
    },
});


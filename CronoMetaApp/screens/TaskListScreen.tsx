import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TaskItem } from '../components/TaskItem';
import { TaskEntity } from '../models/TaskEntity';
import { taskService } from '../services/TaskService';

export default function TaskListScreen() {
    const [taskList, setTaskList] = useState<TaskEntity[]>([]);

    useEffect(() => {
        taskService.getTasks().then(setTaskList);
        return;
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={taskList}
                renderItem={({ item, index }) => <TaskItem key={item.id + index.toString()} item={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    list: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    task: {
        padding: 20,
        fontSize: 18,
    },
});
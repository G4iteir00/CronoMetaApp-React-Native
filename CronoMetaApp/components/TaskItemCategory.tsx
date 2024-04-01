import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TaskEntity } from '../models/TaskEntity';

export function TaskItemCategory({ category }: { category: TaskEntity['category']; }) {
    return <View style={styles.categories}>
        {category.map((cat, i) => <Text key={i} style={styles.category}>{cat}</Text>)}
    </View>;
}

export const styles = StyleSheet.create({
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

import React from 'react';
import { Text } from 'react-native';



export function FormatTime({ time }: { time: number; }) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formatNumber = (num: number) => num < 10 ? `0${num}` : num;

    return (
        <Text>{`${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`}</Text>
    );
}

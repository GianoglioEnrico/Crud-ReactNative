import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function Header({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )

}

Header.defaultProps = {
    title: "T2M Spike React Native"
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: "#f44336"
    },
    text: {
        color: "white",
        fontSize: 23,
        textAlign: "center"
    }


})
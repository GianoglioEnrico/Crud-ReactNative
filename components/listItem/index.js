import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Button, Alert } from 'react-native'



export default function ListItem({ item, deleteItem }) {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.title}</Text>

                <Button title="delete" onPress={() => deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',

    },
    listItemText: {
        fontSize: 18,
        maxWidth: 200
    },
})
import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'


export default function AddItem({ addItem }) {
    const [itemText, setItemText] = useState("")


    return (
        <View>
            <TextInput style={styles.input} value={itemText} placeholder="Add item..." onChangeText={text => setItemText(text)} />
            <Button style={styles.btn} title="Add Item" onPress={() => {
                addItem(itemText)
                setItemText("")
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        margin: 5,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
})
import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'

const CustomButton = ({title,onPress}) => {

    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        marginTop:40
    },
    buttonText:{
        color:'#8e44ad',
        fontSize:24,
        fontWeight:'bold'
    }
})




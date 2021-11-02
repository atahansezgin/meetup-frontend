import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const Card = ({label,placeholder,onChangeText,keyboardType,secureTextEntry,value}) => {
    return(
        <View style={styles.card}>
                <View style={{flex:3}}>
                    <Text style={styles.text}>
                        {label}
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.text}>
                        :
                    </Text>
                </View>
                <View style={{flex:7}}>
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        value={value}
                        placeholderTextColor='#2980b9'
                    />
                </View>                
                
            </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        padding: 10,
        borderRadius:10,
    },
    text:{
        fontSize:16,
        marginHorizontal:9,
        color:'#2980b9',
        fontWeight:'bold'

    },
    input:{
        borderWidth:2,
        borderRadius:10,
        width: '95%',
        textAlign:'center'
    },
})

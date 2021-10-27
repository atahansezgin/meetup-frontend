import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const UserCard = ({label,placeholder,onChangeText,keyboardType,secureTextEntry,value}) => {
    return(
        <View style={styles.card}>
                <View style={{flex:1}}>
                    <Text style={styles.text}>
                        {label}
                    </Text>
                </View>
                <View style={{flex:2}}>
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        value={value}
                    />
                </View>                
                
            </View>
    )
}

export default UserCard;

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        padding: 10,
        borderRadius:10,
    },
    text:{
        fontSize:16,
        marginHorizontal:9
    },
    input:{
        borderWidth:2,
        borderRadius:10,
        width: '95%',
        textAlign:'center'
    },
})

import React,{useState} from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';

const Login = () => {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const emailHandler = (value) => {
        setEmail(value);
    }

    const passwordHandler = (value) => {
        setPassword(value)
    }

    const submitHandler = () => {
        Alert.alert(email+" "+password);
    }

    return(
        <View style={styles.body}>
            <View style={styles.card}>
                <View style={{flex:1}}>
                    <Text style={styles.text}>
                        Email :
                    </Text>
                </View>
                <View style={{flex:2}}>
                    <TextInput
                        style={styles.input}
                        placeholder="mail@mail.com"
                        onChangeText={emailHandler}
                        keyboardType='email-address'
                    />
                </View>
                
            </View>
            <View style={styles.card}>
                <View style={{flex:1}}>
                    <Text style={styles.text}>
                        Password :
                    </Text>
                </View>
                <View style={{flex:2}}>
                    <TextInput
                        style={styles.input}
                        placeholder="12345"
                        onChangeText={passwordHandler}
                        secureTextEntry={true}
                    />
                </View>
                
            </View>
            <Button
                title="Login"
                onPress={submitHandler}
            />
        </View>
    );    
}

export default Login;

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:16,
        marginRight:20
    },
    input:{
        borderWidth:2,
        borderRadius:10,
        width: '95%',
        textAlign:'center'
    },
    card:{
        flexDirection:'row',
        padding: 10,
        borderRadius:10,
    }
})

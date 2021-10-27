import React,{useState} from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';

const SignIn = () => {

    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[pwd1,setPwd1] = useState("");
    const[pwd2,setPwd2] = useState("");

    const submitHandler = () => {
        Alert.alert(firstName+" "+lastName+" "+email);
        setEmail('');
        setFirstName('');
        setLastName('');
        setPwd1('');
        setPwd2('');
    }


    return(
        <View style={styles.body}>
            <View>
                <Text style={styles.header}>
                    Sign In
                </Text>
            </View>
            <View style={styles.card}>
                <View style={{flex:1}}>
                    <Text style={styles.text}>
                        First Name :
                    </Text>
                </View>
                <View style={{flex:2}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Atahan"
                        onChangeText={(value) => setFirstName(value)}
                    />
                </View>                
                
            </View>
            <View style={styles.card}>
                <View style={{flex:1}}>
                    <Text style={styles.text}>
                        Last Name :
                    </Text>
                </View>
                <View style={{flex:2}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Sezgin"
                        onChangeText={(value) => setLastName(value)}
                    />
                </View>
            </View>
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
                    onChangeText={(value) => setEmail(value)}
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
                    onChangeText={(value) => setPwd1(value)}
                    secureTextEntry={true}
                    />
                </View>                
            </View>
            <View style={styles.card}>
                <View style={{flex:1}}>
                    <Text style={styles.text}>
                    Verify Password :
                    </Text>
                </View>
                <View style={{flex:2}}>
                    <TextInput
                    style={styles.input}
                    placeholder="12345"
                    onChangeText={(value) => setPwd2(value)}
                    secureTextEntry={true}
                    />
                </View>
                
            </View>
            <Button
                title="Sign in"
                onPress={submitHandler}
            />
        </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        fontSize:40,
        marginBottom:50
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
        borderRadius:10
    }
})

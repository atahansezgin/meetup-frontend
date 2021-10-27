import React,{useState} from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import UserCard from '../components/UserCard';

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
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTag}>
                    Sign In
                </Text>
            </View>
            <View style={styles.body}>
                <UserCard
                    label="First Name :"
                    placeholder="Atahan"
                    onChangeText={(value) => setFirstName(value)}
                    keyboardType='number-pad'
                    secureTextEntry={false}
                    value={firstName}
                />
                <UserCard
                    label="Last Name :"
                    placeholder="Sezgin"
                    onChangeText={(value) => setLastName(value)}
                    keyboardType='default'
                    secureTextEntry={false}
                    value={lastName}
                />
                <UserCard
                    label="Email :"
                    placeholder="mail@mail.com"
                    onChangeText={(value) => setEmail(value)}
                    keyboardType='email-address'
                    secureTextEntry={false}
                    value={email}
                />
                <UserCard
                    label="Password :"
                    placeholder="not 12345"
                    onChangeText={(value) => setPwd1(value)}
                    keyboardType='default'
                    secureTextEntry={true}
                    value={pwd1}
                />
                <UserCard
                    label="Verify Password :"
                    placeholder="not 12345"
                    onChangeText={(value) => setPwd2(value)}
                    keyboardType='default'
                    secureTextEntry={true}
                    value={pwd2}
                />            
                <Button
                    title="Sign in"
                    onPress={submitHandler}
                />
            </View>
        </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        flex: 1,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    body:{
        flex:3,
        alignItems:'center',
        justifyContent:'center',
    },
    headerTag:{
        fontSize:40,
    },
})

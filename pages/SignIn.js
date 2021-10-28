import { StackActions } from '@react-navigation/routers';
import React,{useState} from 'react';
import { View, Text, Button, Alert } from 'react-native';
import UserCard from '../components/UserCard';
import UserPageSyles from '../styles/UserPageStyles';

const SignIn = ({navigation}) => {

    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[pwd1,setPwd1] = useState("");
    const[pwd2,setPwd2] = useState("");

    const submitHandler = () => {
        setEmail('');
        setFirstName('');
        setLastName('');
        setPwd1('');
        setPwd2('');
        navigation.navigate('Home');
    }


    return(
        <View style={UserPageSyles.container}>
            <View style={UserPageSyles.header}>
                <Text style={UserPageSyles.headerTag}>
                    Sign In
                </Text>
            </View>
            <View style={UserPageSyles.body}>
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
import React,{useState} from 'react';
import { View, Text, Alert } from 'react-native';
import UserPageSyles from '../styles/UserPageStyles';

import CustomButton from '../components/CustomButton';
import Card from '../components/Card';
import { AuthContext } from '../components/Context';

import axios from 'axios';
import api from '../apiURL.json';

const SignUp = ({navigation}) => {

    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[pwd1,setPwd1] = useState("");
    const[pwd2,setPwd2] = useState("");

    const {signUp} = React.useContext(AuthContext);

    const post = () => {
        const user = {
            fullName : firstName+" "+lastName,
            email : email,
            password : pwd1,
            deleted : false,
        }
        axios.post(api.url+'user/post',user);
        signUp();
    }

    const submitHandler = () => {
        if(pwd1 == pwd2){
            axios.get(api.url+`user/emailCheck?email=${email}`)
                .then(response => {
                    response.data ? Alert.alert("Email Error") : post();
                })
        }
        else{
            Alert.alert("Password Error");
        }
    }


    return(
        <View style={UserPageSyles.container}>
            <View style={UserPageSyles.header}>
                <Text style={UserPageSyles.headerTag}>
                    Sign Up
                </Text>
            </View>
            <View style={UserPageSyles.body}>
                <Card
                    label="First Name"
                    placeholder="Atahan"
                    onChangeText={(value) => setFirstName(value)}
                    keyboardType='number-pad'
                    secureTextEntry={false}
                    value={firstName}
                />
                <Card
                    label="Last Name"
                    placeholder="Sezgin"
                    onChangeText={(value) => setLastName(value)}
                    keyboardType='default'
                    secureTextEntry={false}
                    value={lastName}
                />
                <Card
                    label="Email"
                    placeholder="mail@mail.com"
                    onChangeText={(value) => setEmail(value)}
                    keyboardType='email-address'
                    secureTextEntry={false}
                    value={email}
                />
                <Card
                    label="Password"
                    placeholder="not 12345"
                    onChangeText={(value) => setPwd1(value)}
                    keyboardType='default'
                    secureTextEntry={true}
                    value={pwd1}
                />
                <Card
                    label="Verify Password"
                    placeholder="not 12345"
                    onChangeText={(value) => setPwd2(value)}
                    keyboardType='default'
                    secureTextEntry={true}
                    value={pwd2}
                />            
                <CustomButton 
                    title="Sign Up"
                    onPress={submitHandler}
                />
            </View>
        </View>
    );
}

export default SignUp;
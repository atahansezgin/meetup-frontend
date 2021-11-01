import React,{useState} from 'react';
import { View, Text, Alert } from 'react-native';
import UserPageSyles from '../styles/UserPageStyles';

import CustomButton from '../components/CustomButton';
import Card from '../components/Card';
import { AuthContext } from '../components/Context';

import axios from 'axios';
import api from '../apiURL.json';


const Login = ({navigation}) => {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const {signIn} = React.useContext(AuthContext);

    const submitHandler = () => {

        axios.get(api.url+`user/login?email=${email}&password=${password}`)
            .then(response => {
                response.data ? signIn() : Alert.alert("Error");
            });
            
        setEmail('');
        setPassword('');
    }

    return(
        <View style={UserPageSyles.container}>
            <View style={UserPageSyles.header}>
                <Text style={UserPageSyles.headerTag}>
                    Login
                </Text>
            </View>
            <View style={UserPageSyles.body}>
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
                        placeholder="*****"
                        onChangeText={(value) => setPassword(value)}
                        keyboardType='default'
                        secureTextEntry={true}
                        value={password}
                />
                <View style={{flexDirection:'row'}}>

                    <CustomButton
                        title="Login"
                        onPress={submitHandler}
                    />
                    <CustomButton
                        title="Sign Up"
                        onPress={() => navigation.navigate('SignUp')}
                    />
                </View>
            </View>
        </View>
    );    
}

export default Login;
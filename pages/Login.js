import React,{useState} from 'react';
import { View, Text, Button, Alert } from 'react-native';
import UserCard from '../components/UserCard';
import UserPageSyles from '../styles/UserPageStyles';

const Login = ({navigation}) => {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const submitHandler = () => {
        Alert.alert(email+" "+password);
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
                        placeholder="*****"
                        onChangeText={(value) => setPassword(value)}
                        keyboardType='default'
                        secureTextEntry={true}
                        value={password}
                />
                <View style={{flexDirection:'row'}}>
                    <Button
                        title="Login"
                        onPress={submitHandler}
                    />
                    <Button
                        title="Sign In"
                        onPress={() => {
                            navigation.navigate('SignIn');
                        }}
                    />
                </View>
            </View>
        </View>
    );    
}

export default Login;
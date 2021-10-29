import React,{useState} from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import Card from '../components/Card';
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
    }


    return(
        <View style={UserPageSyles.container}>
            <View style={UserPageSyles.header}>
                <Text style={UserPageSyles.headerTag}>
                    Sign In
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
                    title="Sign In"
                    onPress={submitHandler}
                />
            </View>
        </View>
    );
}

export default SignIn;